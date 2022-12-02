import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManageDepartment.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { createNewDepartment } from '../../../services/userService';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";

const mdParser = new MarkdownIt();
class ManageDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentArr: [],
            allBranchArr: [],
            departmentName: '',
            branchName: '',
            departmentCode: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
            image: '',
            phonenumber: '',
            address: '',
            email: '',
            departmentId: '',
            departmentManager: '',
            listdepartmentManagers: [],
        }
    }
    async componentDidMount() {
        this.props.getDepartmentStart();
        this.props.getAllBranchStart();
        this.props.getAllDepartmentManagers();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.departmentRedux !== this.props.departmentRedux) {
            let arrDepartment = this.props.departmentRedux;
            this.setState({
                departmentArr: arrDepartment,
                department: arrDepartment && arrDepartment.length > 0 ? arrDepartment[0].keyMap : ''
            })
        }
        if (prevProps.allBranchRedux !== this.props.allBranchRedux) {
            let arrAllBranch = this.props.allBranchRedux;
            this.setState({
                allBranchArr: arrAllBranch.data,
            })
        }
        if (prevProps.departmentManagerRedux !== this.props.departmentManagerRedux) {
            let arrDepartmentManager = this.props.departmentManagerRedux;
            this.setState({
                listdepartmentManagers: arrDepartmentManager.data,
            })
        }
    }

    handleOnchangeInput = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy
        })
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionHTML: html,
            descriptionMarkdown: text,
        })
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imageBase64: base64
            })
        }
    }

    handleSaveNewDepartment = async () => {
        let res = await createNewDepartment(this.state)
        if (res && res.errCode === 0) {
            toast.success('Add new department succeeds!')
            this.setState({
                departmentName: '',
                branchName: '',
                departmentCode: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
                image: '',
                phonenumber: '',
                address: '',
                email: '',
                departmentId: '',
                departmentManager: '',
            })
        } else {
            toast.error('Something wrongs...')
        }
    }

    render() {
        let departments = this.state.departmentArr;
        let allBranchs = this.state.allBranchArr;
        let language = this.props.language;
        let departmentManagers = this.state.listdepartmentManagers;

        return (

            <div className="manage-department-container">
                <div className="ms-title">Quản lý phòng ban, cửa hàng</div>
                <div className="add-new-department row">
                    <div className="col-6 form-group">
                        <label>Chọn chi nhánh, công ty,... cần lập hệ thống quản lý:</label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'branchName') }}
                            value={this.state.branchName}
                        >
                            {allBranchs && allBranchs.length > 0 &&
                                allBranchs.map((item, index) => {
                                    return (
                                        <option key={index}>
                                            {item.branchName}
                                        </option>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <div className="col-6 form-group">
                        <label>Tên phòng ban, cửa hàng:</label>
                        <input className="form-control" type="text" value={this.state.departmentName}
                            onChange={(event) => this.handleOnchangeInput(event, 'departmentName')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label> Loại hình tổ chức:<FormattedMessage id="manage-user.gender" /></label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'department') }}
                            value={this.state.department}
                        >
                            {departments && departments.length > 0 &&
                                departments.map((item, index) => {
                                    return (
                                        <option key={index} value={item.keyMap}>
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-6 form-group">
                        <label>Mã định danh:</label>
                        <input className="form-control" type="text" value={this.state.branchCode}
                            onChange={(event) => this.handleOnchangeInput(event, 'branchCode')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Người phụ trách:</label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'departmentManager') }}
                            value={this.state.departmentManager} placeholder="Chọn người phụ trách"
                        >
                            {departmentManagers && departmentManagers.length > 0 &&
                                departmentManagers.map((item, index) => {
                                    let labelVi = `${item.lastName} ${item.firstName}`;
                                    let labelEn = `${item.firstName} ${item.lastName}`;
                                    return (
                                        <option key={index}>
                                            {language === LANGUAGES.VI ? labelVi : labelEn}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-6 form-group">
                        <label>Số điện thoại liên hệ:</label>
                        <input className="form-control" type="text" value={this.state.phonenumber}
                            onChange={(event) => this.handleOnchangeInput(event, 'phonenumber')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Email liên hệ:</label>
                        <input className="form-control" type="text" value={this.state.email}
                            onChange={(event) => this.handleOnchangeInput(event, 'email')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Địa chỉ phòng phòng ban, cửa hàng</label>
                        <input className="form-control" type="text" value={this.state.address}
                            onChange={(event) => this.handleOnchangeInput(event, 'address')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Hình ảnh phòng ban, cửa hàng</label>
                        <input className="form-control-file" type="file"
                            value={this.state.event}
                            onChange={(event) => this.handleOnchangeImage(event)}
                        />

                    </div>
                    <div className="col-12">
                        <MdEditor
                            style={{ height: '300px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.descriptionMarkdown}
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn-save-department"
                            onClick={() => this.handleSaveNewDepartment()}
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
        departmentRedux: state.admin.department,
        allBranchRedux: state.admin.allBranchs,
        departmentManagerRedux: state.admin.allDepartmentManagers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDepartmentStart: () => dispatch(actions.fetchDepartmentStart()),
        getAllBranchStart: () => dispatch(actions.fetchAllBranchStart()),
        getAllDepartmentManagers: () => dispatch(actions.fetchAllDepartmentManagers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDepartment);
