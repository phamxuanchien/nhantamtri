import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './CreateWork.scss';
import { createNewBranch } from '../../../services/userService';
import { toast } from "react-toastify";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import DatePicker from '../../../components/Input/DatePicker';
import Select from 'react-select';

class CreateWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listManagers: [],
            selectedManager: {},
            currentDate: '',
        }
    }
    componentDidMount() {
        // this.props.fetchAllManagers();
        // this.props.fetchAllScheduleTime();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allManagers !== this.props.allManagers) {
            // let dataSelect = this.buildDataInputSelect(this.props.allManagers)
            // this.setState({
            //     listManagers: dataSelect
            // })
        }
        // if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
        //     let data = this.props.allScheduleTime;
        //     if (data && data.length > 0) {
        //         data = data.map(item => ({ ...item, isSelected: false }))
        //     }
        //     this.setState({
        //         rangeTime: data
        //     })
        // }
    }


    buildDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let Object = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                Object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                Object.value = item.id;
                result.push(Object)
            })
        }
        return result;
    }
    handleChangeSelect = async (selectedOption) => {
        this.setState({ selectedManager: selectedOption });

    };

    handleOnchangeInput = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
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

    handleOnchangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }

    handleSaveNewWork = async () => {
        // let res = await createNewBranch(this.state)
        // if (res && res.errCode === 0) {
        //     toast.success('Add new work succeeds!')
        //     this.setState({
        //         workName: '',
        //         workCode: '',
        //         descriptionHTML: '',
        //         descriptionMarkdown: '',
        //         image: '',
        //         phonenumber: '',
        //         address: '',
        //         email: '',
        //         workId: '',
        //         workManager: '',
        //     })
        // } else {
        //     toast.error('Something wrongs...')
        // }
    }

    render() {


        let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        let language = this.props.language;
        return (

            <div className="manage-work-container">
                <div className="work-title">
                    <span className="span-title">T???o m???i c??ng vi???c</span>
                    <span className="spanname-title">t??n chi nh??nh, b??? ph???n....</span>
                </div>
                <div className="add-new-work row">
                    <div className="col-6 form-group">
                        <label>T??n c??ng vi???c:</label>
                        <input className="form-control" type="text" value={this.state.workname}
                            onChange={(event) => this.handleOnchangeInput(event, 'workname')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>M?? c??ng vi???c:</label>
                        <input className="form-control" type="text" value={this.state.workcode}
                            onChange={(event) => this.handleOnchangeInput(event, 'workcode')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>M???c ti??u c??ng vi???c</label>
                        <textarea className="form-control"
                            onChange={(event) => this.handleOnChangeText(event, 'description')}
                            value={this.state.description}
                        >

                        </textarea>
                    </div>
                    <div className="col-6 form-group">
                        <label>Th??nh vi??n tham gia:</label>
                        <Select
                            value={this.state.selectedManager}
                            onChange={this.handleChangeSelect}
                            options={this.state.listManagers}
                            placeholder='Ch???n th??nh vi??n tham gia'
                        />
                    </div>
                    <div className="col-6 form-group">
                        <label>Ph??n c??ng tr??ch nhi???m:</label>
                        <Select
                            value={this.state.selectedManager}
                            onChange={this.handleChangeSelect}
                            options={this.state.listManagers}
                            placeholder='Ch???n th??nh vi??n tham gia'
                        />
                    </div>
                    <div className="col-6 form-group">
                        <label>C??ng vi???c c??? th??? t???ng th??nh vi??n:</label>
                        <input className="form-control" type="text" value={this.state.workdetail}
                            onChange={(event) => this.handleOnchangeInput(event, 'workdetail')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Th???i gian b???t ?????u</label>
                        <DatePicker
                            onChange={this.handleOnchangeDatePicker}
                            className="form-control"
                            value={this.state.beginDate}
                            minDate={yesterday}
                        />
                    </div>
                    <div className="col-6 form-group">
                        <label>Th???i gian ho??n th??nh</label>
                        <DatePicker
                            onChange={this.handleOnchangeDatePicker}
                            className="form-control"
                            value={this.state.endDate}
                            minDate={yesterday}
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary"
                            onClick={() => this.handleSaveNewWork()}
                        >Save</button>
                    </div>
                    <div className="list-work col-12">Danh s??ch c??ng vi???c</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        // workRedux: state.admin.work,
        // workManagerRedux: state.admin.allBranchManagers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getBranchStart: () => dispatch(actions.fetchBranchStart()),
        // getAllBranchManagers: () => dispatch(actions.fetchAllBranchManagers()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateWork);
