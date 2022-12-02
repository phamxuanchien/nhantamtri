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
                    <span className="span-title">Triển khai thực hiện kế hoạch làm việc</span>
                    <span className="spanname-title">tên nhân viên....</span>
                </div>
                <div className="deploy-work row">
                    <div className="deploy-work-up col-12">
                        <span>Danh sách công việc được phân công</span>
                        <table id="TableManageUser">
                            <tr>
                                <th>Tên công việc</th>
                                <th>Mục tiêu</th>
                                <th>Thời gian</th>
                                <th>Tiến độ</th>
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
                        <span>Kế hoạch làm việc</span>
                        <table id="TableManageUser">
                            <tr>
                                <th>Tên công việc</th>
                                <th>Kế hoạch thực hiện</th>
                                <th>Loại hình kế hoạch</th>
                                <th>Thời gian dự kiến hoàn thành</th>
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
                        <span>Thực hiện công việc theo kế hoạch</span>
                        <div className="col-12 deploy-center">
                            <div className="col-6 form-group">
                                <label>Chọn tên công việc:</label>
                                <Select
                                    value={this.state.selectedManager}
                                    onChange={this.handleChangeSelect}
                                    options={this.state.listManagers}
                                    placeholder='Chọn công việc'
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Chọn loại hình thực hiện theo kế hoạch:</label>
                                <Select
                                    value={this.state.selectedManager}
                                    onChange={this.handleChangeSelect}
                                    options={this.state.listManagers}
                                    placeholder='Chọn tên thành viên để giao công việc'
                                />
                            </div>
                        </div>
                        <span>Kết quả thực hiện</span>
                        <table id="TableManageUser">
                            <tr>
                                <th>Thời gian làm việc</th>
                                <th>Địa điểm thực hiện</th>
                                <th>Công việc cụ thể</th>
                                <th>Kết quả</th>
                                <th>Tự đánh giá hiệu quả</th>
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
