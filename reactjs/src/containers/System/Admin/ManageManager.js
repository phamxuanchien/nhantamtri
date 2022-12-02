import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
// import * as actions from "../../../store/actions";
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageManager.scss';
import Select from 'react-select';
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
import { getDetailInforManager } from '../../../services/userService';


const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //save to markdown table
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
            listManagers: [],
            hasOldData: false,

            //save to manager-infor table
            listPrice: [],
            listPayment: [],
            listDepartment: [],
            listBranch: [],
            listProvince: [],
            selectedPrice: '',
            selectedPayment: '',
            selectedDepartment: '',
            selectedBranch: '',
            selectedProvince: '',
            nameDepartment: '',
            addressDepartment: '',
            note: '',
            departmentId: '',
            branchId: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllManagers();
        this.props.getAllRequiredManagerInfor();
    }

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
            if (type === 'PRICE') {
                inputData.map((item, index) => {
                    let Object = {};
                    let labelVi = `${item.valueVi}`;
                    let labelEn = `${item.valueEn} USD`;
                    Object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                    Object.value = item.keyMap;
                    result.push(Object)
                })
            }
            if (type === 'PAYMENT' || type === 'PROVINCE') {
                inputData.map((item, index) => {
                    let Object = {};
                    let labelVi = `${item.valueVi}`;
                    let labelEn = `${item.valueEn}`;
                    Object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                    Object.value = item.keyMap;
                    result.push(Object)
                })
            }
            if (type === 'DEPENDENTPART') {
                inputData.map((item, index) => {
                    let object = {};
                    object.label = item.name;
                    object.value = item.id;
                    result.push(object)
                })
            }
            if (type === 'DEPARTMENT') {
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
        if (prevProps.allManagers !== this.props.allManagers) {
            let dataSelect = this.buildDataInputSelect(this.props.allManagers, 'USERS')
            this.setState({
                listManagers: dataSelect
            })
        }

        if (prevProps.allRequiredManagerInfor !== this.props.allRequiredManagerInfor) {
            let { resPrice, resPayment, resProvince, resBranch, resDepartment } = this.props.allRequiredManagerInfor;

            let dataSelectPrice = this.buildDataInputSelect(resPrice, 'PRICE');
            let dataSelectPayment = this.buildDataInputSelect(resPayment, 'PAYMENT');
            let dataSelectProvince = this.buildDataInputSelect(resProvince, 'PROVINCE');
            let dataSelectBranch = this.buildDataInputSelect(resBranch, 'DEPENDENTPART');
            let dataSelectDepartment = this.buildDataInputSelect(resDepartment, 'DEPARTMENT')


            this.setState({
                listPrice: dataSelectPrice,
                listPayment: dataSelectPayment,
                listProvince: dataSelectProvince,
                listBranch: dataSelectBranch,
                listDepartment: dataSelectDepartment
            })
        }

        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.allManagers, 'USERS');
            let { resPrice, resPayment, resProvince } = this.props.allRequiredManagerInfor;
            let dataSelectPrice = this.buildDataInputSelect(resPrice, 'PRICE');
            let dataSelectPayment = this.buildDataInputSelect(resPayment, 'PAYMENT');
            let dataSelectProvince = this.buildDataInputSelect(resProvince, 'PROVINCE')


            this.setState({
                listManagers: dataSelect,
                listPrice: dataSelectPrice,
                listPayment: dataSelectPayment,
                listProvince: dataSelectProvince,

            })
        }

    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        let { hasOldData } = this.state;
        this.props.saveDetailManager({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            managerId: this.state.selectedOption.value,
            action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,

            selectedPrice: this.state.selectedPrice.value,
            selectedPayment: this.state.selectedPayment.value,
            selectedProvince: this.state.selectedProvince.value,
            nameDepartment: this.state.nameDepartment,
            addressDepartment: this.state.addressDepartment,
            note: this.state.note,
            departmentId: this.state.selectedDepartment && this.state.selectedDepartment.value ? this.state.selectedDepartment.value : '',
            branchId: this.state.selectedBranch.value,
        })
    }

    handleChangeSelect = async (selectedOption) => {
        this.setState({ selectedOption });
        let { listPrice, listPayment, listProvince, listBranch, listDepartment } = this.state;

        let res = await getDetailInforManager(selectedOption.value);
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            let markdown = res.data.Markdown;

            let addressDepartment = '', nameDepartment = '', note = '', paymentId = '', priceId = '', provinceId = '', branchId = '',
                selectedPayment = '', selectedPrice = '', selectedProvince = '', selectedBranch = '', departmentId = '', selectedDepartment = '';
            if (res.data.Manager) {
                addressDepartment = res.data.Manager.addressDepartment;
                nameDepartment = res.data.Manager.nameDepartment;
                note = res.data.Manager.note;
                paymentId = res.data.Manager.paymentId;
                priceId = res.data.Manager.priceId;
                provinceId = res.data.Manager.provinceId;
                branchId = res.data.Manager.branchId;
                departmentId = res.data.Manager.departmentId;

                selectedPayment = listPayment.find(item => {
                    return item && item.value === paymentId
                })
                selectedPrice = listPrice.find(item => {
                    return item && item.value === priceId
                })
                selectedProvince = listProvince.find(item => {
                    return item && item.value === provinceId
                })
                selectedBranch = listBranch.find(item => {
                    return item && item.value === branchId
                })
                selectedDepartment = listDepartment.find(item => {
                    return item && item.value === departmentId
                })

            }
            this.setState({
                contentHTML: markdown.contentHTML,
                contentMarkdown: markdown.contentMarkdown,
                description: markdown.description,
                hasOldData: true,
                addressDepartment: addressDepartment,
                nameDepartment: nameDepartment,
                note: note,
                selectedPayment: selectedPayment,
                selectedPrice: selectedPrice,
                selectedProvince: selectedProvince,
                selectedBranch: selectedBranch,
                selectedDepartment: selectedDepartment
            })
        } else {
            this.setState({
                contentHTML: '',
                contentMarkdown: '',
                description: '',
                hasOldData: false,
                addressDepartment: '',
                nameDepartment: '',
                note: '',
                selectedPayment: '',
                selectedPrice: '',
                selectedProvince: '',
                selectedBranch: '',
                selectedDepartment: ''
            })
        }
    };

    handleChangeSelectManagerInfor = async (selectedOption, name) => {
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
        let { listManagers } = this.state
        console.log('hoidanit check listManagers: ', listManagers)
        return (
            <div className="manage-manager-container">
                <div className="manage-manager-title">
                    <FormattedMessage id="admin.manage-manager.title" />
                </div>
                <div className="more-infor">
                    <div className="content-left form-group">

                        <label><FormattedMessage id="admin.manage-manager.select-manager" /></label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelect}
                            options={this.state.listManagers}
                            placeholder={<FormattedMessage id="admin.manage-manager.select-manager" />}

                        />
                    </div>
                    <div className="content-right">
                        <label><FormattedMessage id="admin.manage-manager.intro" /></label>
                        <textarea className="form-control"
                            onChange={(event) => this.handleOnChangeText(event, 'description')}
                            value={this.state.description}
                        >

                        </textarea>
                    </div>
                </div>
                <div className="more-infor-extra row">
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-manager.price" /></label>
                        <Select
                            value={this.state.selectedPrice}
                            onChange={this.handleChangeSelectManagerInfor}
                            options={this.state.listPrice}
                            placeholder={<FormattedMessage id="admin.manage-manager.price" />}
                            name="selectedPrice"
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-manager.payment" /></label>
                        <Select
                            value={this.state.selectedPayment}
                            onChange={this.handleChangeSelectManagerInfor}
                            options={this.state.listPayment}
                            placeholder={<FormattedMessage id="admin.manage-manager.payment" />}
                            name="selectedPayment"
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-manager.province" /></label>
                        <Select
                            value={this.state.selectedProvince}
                            onChange={this.handleChangeSelectManagerInfor}
                            options={this.state.listProvince}
                            placeholder={<FormattedMessage id="admin.manage-manager.province" />}
                            name="selectedProvince"
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-manager.nameDepartment" /></label>
                        <input className="form-control"
                            onChange={(event) => this.handleOnChangeText(event, 'nameDepartment')}
                            value={this.state.nameDepartment}
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-manager.addressDepartment" /></label>
                        <input className="form-control"
                            onChange={(event) => this.handleOnChangeText(event, 'addressDepartment')}
                            value={this.state.addressDepartment}
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-manager.note" /></label>
                        <input className="form-control"
                            onChange={(event) => this.handleOnChangeText(event, 'note')}
                            value={this.state.note}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-manager.branch" /></label>
                        <Select
                            value={this.state.selectedBranch}
                            onChange={this.handleChangeSelectManagerInfor}
                            options={this.state.listBranch}
                            placeholder={<FormattedMessage id="admin.manage-manager.branch" />}
                            name="selectedBranch"
                        />
                    </div>
                    <div className="col-4 form-group">
                        <label><FormattedMessage id="admin.manage-manager.select-department" /></label>
                        <Select
                            value={this.state.selectedDepartment}
                            onChange={this.handleChangeSelectManagerInfor}
                            options={this.state.listDepartment}
                            placeholder={<FormattedMessage id="admin.manage-manager.select-department" />}
                            name="selectedDepartment"
                        />
                    </div>
                </div>
                <div className="manage-manager-editor">
                    <MdEditor
                        style={{ height: '300px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <button
                    onClick={() => this.handleSaveContentMarkdown()}
                    className={hasOldData === true ? "save-content-manager" : "create-content-manager"}>
                    {hasOldData === true ? <span>
                        <FormattedMessage id="admin.manage-manager.save" />
                    </span> : <span>
                        <FormattedMessage id="admin.manage-manager.add" />
                    </span>}
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allManagers: state.admin.allManagers,
        allRequiredManagerInfor: state.admin.allRequiredManagerInfor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllManagers: () => dispatch(actions.fetchAllManagers()),
        getAllRequiredManagerInfor: () => dispatch(actions.getRequiredManagerInfor()),
        saveDetailManager: (data) => dispatch(actions.saveDetailManager(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageManager);
