import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DeployWork.scss';
import { createNewBranch } from '../../../services/userService';
import { toast } from "react-toastify";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import DatePicker from '../../../components/Input/DatePicker';
import Select from 'react-select';

class DeployWork extends Component {
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

            <div className="deploy-work-container">
                <div className="work-title">
                    <span className="span-title">Tri???n khai th???c hi???n k??? ho???ch l??m vi???c</span>
                    <span className="spanname-title">t??n nh??n vi??n....</span>
                </div>
                <div className="deploy-work row">
                    <div className="deploy-work-up col-12">
                        <span>Danh s??ch c??ng vi???c ???????c ph??n c??ng</span>
                        <table id="TableManageUser">
                            <tr>
                                <th>T??n c??ng vi???c</th>
                                <th>M???c ti??u</th>
                                <th>Th???i gian</th>
                                <th>Ti???n ?????</th>
                            </tr>
                            <tr >
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                                <td>D</td>
                            </tr>
                        </table>

                    </div>
                    <div className="deploy-work-center col-12">
                        <span>K??? ho???ch l??m vi???c</span>
                        <table id="TableManageUser">
                            <tr>
                                <th>T??n c??ng vi???c</th>
                                <th>K??? ho???ch th???c hi???n</th>
                                <th>Lo???i h??nh k??? ho???ch</th>
                                <th>Th???i gian d??? ki???n ho??n th??nh</th>
                            </tr>
                            <tr >
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                                <td>D</td>
                            </tr>
                        </table>
                    </div>

                    <div className="deploy-work-down col-12">
                        <span>Th???c hi???n c??ng vi???c theo k??? ho???ch</span>
                        <div className="col-12 deploy-center">
                            <div className="col-6 form-group">
                                <label>Ch???n t??n c??ng vi???c:</label>
                                <Select
                                    value={this.state.selectedManager}
                                    onChange={this.handleChangeSelect}
                                    options={this.state.listManagers}
                                    placeholder='Ch???n c??ng vi???c'
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Ch???n lo???i h??nh th???c hi???n theo k??? ho???ch:</label>
                                <Select
                                    value={this.state.selectedManager}
                                    onChange={this.handleChangeSelect}
                                    options={this.state.listManagers}
                                    placeholder='Ch???n t??n th??nh vi??n ????? giao c??ng vi???c'
                                />
                            </div>
                        </div>
                        <span>K???t qu??? th???c hi???n</span>
                        <table id="TableManageUser">
                            <tr>
                                <th>Th???i gian l??m vi???c</th>
                                <th>?????a ??i???m th???c hi???n</th>
                                <th>C??ng vi???c c??? th???</th>
                                <th>K???t qu???</th>
                                <th>T??? ????nh gi?? hi???u qu???</th>
                            </tr>
                            <tr >
                                <td> <input className="form-control" type="text" value={this.state.branchName}
                                    onChange={(event) => this.handleOnchangeInput(event, 'branchName')}
                                /></td>
                                <td> <input className="form-control" type="text" value={this.state.branchName}
                                    onChange={(event) => this.handleOnchangeInput(event, 'branchName')}
                                /></td>
                                <td> <input className="form-control" type="text" value={this.state.branchName}
                                    onChange={(event) => this.handleOnchangeInput(event, 'branchName')}
                                /></td>
                                <td> <input className="form-control" type="text" value={this.state.branchName}
                                    onChange={(event) => this.handleOnchangeInput(event, 'branchName')}
                                /></td>
                                <td> <input className="form-control" type="text" value={this.state.branchName}
                                    onChange={(event) => this.handleOnchangeInput(event, 'branchName')}
                                /></td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary"
                            onClick={() => this.handleSaveNewWork()}
                        >Save</button>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeployWork);
