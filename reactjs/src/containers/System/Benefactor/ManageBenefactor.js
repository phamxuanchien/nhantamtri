import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import './TableManageUser.scss';
// import * as actions from "../../../store/actions";
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageBenefactor.scss';
import Select from 'react-select';
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
import { getDetailInforBenefactor } from '../../../services/userService';


const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageBenefactor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //save to markdown table
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
            listBenefactors: [],
            hasOldData: false,

            //save to manager-infor table
            listPayment: [],
            listProjectneedhelp: [],
            listHumanneedhelp: [],
            listDonateActivity: [],

            selectedPayment: '',
            selectedProjectneedhelp: '',
            selectedHumanneedhelp: '',
            selectedDonateActivity: '',
            money: '',
            humanneedhelpId: '',
            projectneedhelpId: ''
        }
    }

    componentDidMount() {
        this.props.getAllBenefactors();
        this.props.getAllHumanneedhelpStart();
        this.props.getAllProjectneedhelpStart();
        this.props.getAllRequiredBenefactorInfor();
    }
    //build dữ liệu data trước khi truyền xuống render (thay vì truyền trực tiếp xuống render và dùng vòng lặp map.)
    buildDataInputSelect = (inputData, type) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            if (type === 'USERS') {
                inputData.map((item, index) => {
                    let Object = {};
                    let labelVi = `${item.lastName} ${item.firstName}`;
                    let labelEn = `${item.firstName} ${item.lastName}`;
                    Object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                    Object.value = item.id;
                    result.push(Object)
                })
            }
            if (type === 'PAYMENT' || type === 'OACTIVITY') {
                inputData.map((item, index) => {
                    let Object = {};
                    let labelVi = `${item.valueVi}`;
                    let labelEn = `${item.valueEn}`;
                    Object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                    Object.value = item.keyMap;
                    result.push(Object)
                })
            }
            if (type === 'PROJECTNEEDHELP') {
                inputData.map((item, index) => {
                    let object = {};
                    object.label = item.name;
                    object.value = item.id;
                    result.push(object)

                })
            }
            if (type === 'HUMANNEEDHELP') {
                inputData.map((item, index) => {
                    let object = {};
                    object.label = item.name;
                    object.value = item.id;
                    result.push(object)
                })
            }

        }
        return result;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allBenefactors !== this.props.allBenefactors) {
            let dataSelect = this.buildDataInputSelect(this.props.allBenefactors, 'USERS')
            this.setState({
                listBenefactors: dataSelect
            })
        }
        if (prevProps.allRequiredBenefactorInfor !== this.props.allRequiredBenefactorInfor) {
            let { resPayment, resOactivity, resProjectneedhelp, resHumanneedhelp } = this.props.allRequiredBenefactorInfor;
            let dataSelectPayment = this.buildDataInputSelect(resPayment, 'PAYMENT');
            let dataSelectDonateActivity = this.buildDataInputSelect(resOactivity, 'OACTIVITY');
            let dataSelectProjectneedhelp = this.buildDataInputSelect(resProjectneedhelp, 'PROJECTNEEDHELP');
            let dataSelectHumanneedhelp = this.buildDataInputSelect(resHumanneedhelp, 'HUMANNEEDHELP')

            this.setState({
                listPayment: dataSelectPayment,
                listProjectneedhelp: dataSelectProjectneedhelp,
                listHumanneedhelp: dataSelectHumanneedhelp,
                listDonateActivity: dataSelectDonateActivity
            })
        }
        //nếu language thay đổi sẽ tự động load dữ liệu theo ngôn ngữ
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.allBenefactors, 'USERS');
            let { resPayment, resOactivity } = this.props.allRequiredBenefactorInfor;
            let dataSelectPayment = this.buildDataInputSelect(resPayment, 'PAYMENT');
            let dataSelectDonateActivity = this.buildDataInputSelect(resOactivity, 'OACTIVITY');
            this.setState({
                allBenefactors: dataSelect,
                listPayment: dataSelectPayment,
                listDonateActivity: dataSelectDonateActivity
            })
        }

    }
    //lấy sự kiện text trên markdows
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        let { hasOldData } = this.state;
        this.props.saveDetailBenefactor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            benefactorId: this.state.selectedOption.value,
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,

            selectedPayment: this.state.selectedPayment.value,
            selectedDonateActivity: this.state.selectedDonateActivity.value,
            money: this.state.money,
            humanneedhelpId: this.state.selectedHumanneedhelp && this.state.selectedHumanneedhelp.value ? this.state.selectedHumanneedhelp.value : '',
            projectneedhelpId: this.state.selectedProjectneedhelp.value,
        })
    }

    handleChangeSelect = async (selectedOption) => {
        this.setState({ selectedOption });
        let { listPayment, listDonateActivity, listProjectneedhelp, listHumanneedhelp } = this.state;

        let res = await getDetailInforBenefactor(selectedOption.value);
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let markdown = res.data.Markdown;

            let money = '', paymentId = '', donateActivityId = '', projectneedhelpId = '',
                selectedPayment = '', selectedDonateActivity = '', selectedProjectneedhelp = '', humanneedhelpId = '', selectedHumanneedhelp = '';
            if (res.data.Benefactor) {

                money = res.data.Benefactor.money;
                paymentId = res.data.Benefactor.paymentId;
                donateActivityId = res.data.Benefactor.donateActivityId;
                projectneedhelpId = res.data.Benefactor.projectneedhelpId;
                humanneedhelpId = res.data.Benefactor.humanneedhelpId;

                selectedPayment = listPayment.find(item => {
                    return item && item.value === paymentId
                })
                selectedDonateActivity = listDonateActivity.find(item => {
                    return item && item.value === donateActivityId
                })
                selectedProjectneedhelp = listProjectneedhelp.find(item => {
                    return item && item.value === projectneedhelpId
                })
                selectedHumanneedhelp = listHumanneedhelp.find(item => {
                    return item && item.value === humanneedhelpId
                })

            }
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true,
                money: money,
                selectedPayment: selectedPayment,
                selectedDonateActivity: selectedDonateActivity,
                selectedProjectneedhelp: selectedProjectneedhelp,
                selectedHumanneedhelp: selectedHumanneedhelp
            })
        } else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false,
                money: '',
                selectedPayment: '',
                selectedDonateActivity: '',
                selectedProjectneedhelp: '',
                selectedHumanneedhelp: ''
            })
        }
    };

    handleChangeSelectBenefactorInfor = async (selectedOption, name) => {
        let stateName = name.name;
        let stateCopy = { ...this.state };
        stateCopy[stateName] = selectedOption;
        this.setState({
            ...stateCopy
        })
    }

    handleOnChangeText = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy
        })
    }

    render() {
        let { hasOldData } = this.state;

        return (
            <div className="managebenefactor-container">
                <div className="managebenefactor-title">
                    <FormattedMessage id="admin.manage-benefactor.title" />
                </div>
                <label className="add-info"><FormattedMessage id="admin.manage-benefactor.add-info" /></label>
                <div className="more-infor">
                    <div className="content-left form-group">

                        <label><FormattedMessage id="admin.manage-benefactor.select-benefactor" /></label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelect}
                            options={this.state.listBenefactors}
                            placeholder={<FormattedMessage id="admin.manage-benefactor.select-benefactor" />}

                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-benefactor.money" /></label>
                        <input className="form-control"
                            onChange={(event) => this.handleOnChangeText(event, 'money')}
                            value={this.state.money}
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-benefactor.payment" /></label>
                        <Select
                            value={this.state.selectedPayment}
                            onChange={this.handleChangeSelectBenefactorInfor}
                            options={this.state.listPayment}
                            placeholder={<FormattedMessage id="admin.manage-benefactor.payment" />}
                            name="selectedPayment"
                        />
                    </div>
                </div>
                <div className="more-infor-extra row">
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-benefactor.select-projectneedhelp" /></label>
                        <Select
                            value={this.state.selectedProjectneedhelp}
                            onChange={this.handleChangeSelectBenefactorInfor}
                            options={this.state.listProjectneedhelp}
                            placeholder={<FormattedMessage id="admin.manage-benefactor.select-projectneedhelp" />}
                            name="selectedProjectneedhelp"
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-benefactor.select-humanneedhelp" /></label>
                        <Select
                            value={this.state.selectedHumanneedhelp}
                            onChange={this.handleChangeSelectBenefactorInfor}
                            options={this.state.listHumanneedhelp}
                            placeholder={<FormattedMessage id="admin.manage-benefactor.select-humanneedhelp" />}
                            name="selectedHumanneedhelp"
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-benefactor.donateActivity" /></label>
                        <Select
                            value={this.state.selectedDonateActivity}
                            onChange={this.handleChangeSelectBenefactorInfor}
                            options={this.state.listDonateActivity}
                            placeholder={<FormattedMessage id="admin.manage-benefactor.donateActivity" />}
                            name="selectedDonateActivity"
                        />
                    </div>
                </div>
                <div className="content-right">
                    <label><FormattedMessage id="admin.manage-benefactor.note" /></label>
                    <textarea className="form-control"
                        onChange={(event) => this.handleOnChangeText(event, 'description')}
                        value={this.state.description}
                    >

                    </textarea>
                </div>
                <label className="detail-info"><FormattedMessage id="admin.manage-benefactor.detail-info" /></label>
                <div className="manage-benefactor-editor">
                    <MdEditor
                        style={{ height: '300px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <button
                    onClick={() => this.handleSaveContentMarkdown()}
                    className={hasOldData === true ? "save-content-benefactor" : "create-content-benefactor"}>
                    {hasOldData === true ? <span>
                        <FormattedMessage id="admin.manage-benefactor.save" />
                    </span> : <span>
                        <FormattedMessage id="admin.manage-benefactor.add" />
                    </span>}
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allBenefactors: state.admin.allBenefactors,
        allProjectneedhelp: state.admin.projectneedhelp,
        allHumanneedhelp: state.admin.humanneedhelp,
        allRequiredBenefactorInfor: state.admin.allRequiredBenefactorInfor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllBenefactors: () => dispatch(actions.fetchAllBenefactors()),
        getAllProjectneedhelpStart: () => dispatch(actions.fetchAllProjectneedhelpStart()),
        getAllHumanneedhelpStart: () => dispatch(actions.fetchAllHumanneedhelpStart()),

        getAllRequiredBenefactorInfor: () => dispatch(actions.getRequiredBenefactorInfor()),
        saveDetailBenefactor: (data) => dispatch(actions.saveDetailBenefactor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBenefactor);
