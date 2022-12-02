import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManageGroup.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { createNewGroup } from '../../../services/userService';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";

const mdParser = new MarkdownIt();
class ManageGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupArr: [],
            allDepartmentArr: [],
            departmentName: '',
            groupName: '',
            groupCode: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
            image: '',
            phonenumber: '',
            address: '',
            email: '',
            groupId: '',
            groupManager: '',
            listgroupManagers: [],
        }
    }
    async componentDidMount() {
        this.props.getAllGroupStart();
        this.props.getAllDepartmentStart();
        this.props.getAllGroupManagers();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.groupRedux !== this.props.groupRedux) {
            let arrGroup = this.props.groupRedux;
            this.setState({
                groupArr: arrGroup,
                group: arrGroup && arrGroup.length > 0 ? arrGroup[0].keyMap : ''
            })
        }
        if (prevProps.allDepartmentRedux !== this.props.allDepartmentRedux) {
            let arrAllDepartment = this.props.allDepartmentRedux;
            this.setState({
                allDepartmentArr: arrAllDepartment.data,
            })
        }
        if (prevProps.groupManagerRedux !== this.props.groupManagerRedux) {
            let arrGroupManager = this.props.groupManagerRedux;
            this.setState({
                listgroupManagers: arrGroupManager.data,
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

    handleSaveNewGroup = async () => {
        let res = await createNewGroup(this.state)
        if (res && res.errCode === 0) {
            toast.success('Add new group succeeds!')
            this.setState({
                groupName: '',
                departmentName: '',
                groupCode: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
                image: '',
                phonenumber: '',
                address: '',
                email: '',
                groupId: '',
                groupManager: '',
            })
        } else {
            toast.error('Something wrongs...')
        }
    }

    render() {
        let groups = this.state.groupArr;
        let allDepartments = this.state.allDepartmentArr;
        let language = this.props.language;
        let groupManagers = this.state.listgroupManagers;

        return (

            <div className="manage-group-container">
                <div className="ms-title">Quản lý Đội, nhóm</div>
                <div className="add-new-group row">
                    <div className="col-6 form-group">
                        <label>Chọn phòng ban, chương trình cần phân nhóm:</label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'departmentName') }}
                            value={this.state.departmentName}
                        >
                            {allDepartments && allDepartments.length > 0 &&
                                allDepartments.map((item, index) => {
                                    return (
                                        <option key={index}>
                                            {item.departmentName}
                                        </option>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <div className="col-6 form-group">
                        <label>Tên đội, nhóm:</label>
                        <input className="form-control" type="text" value={this.state.groupName}
                            onChange={(event) => this.handleOnchangeInput(event, 'groupName')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label> Loại hình tổ chức:<FormattedMessage id="manage-user.gender" /></label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'group') }}
                            value={this.state.group}
                        >
                            {groups && groups.length > 0 &&
                                groups.map((item, index) => {
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
                        <input className="form-control" type="text" value={this.state.groupCode}
                            onChange={(event) => this.handleOnchangeInput(event, 'groupCode')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Người phụ trách:</label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'groupManager') }}
                            value={this.state.groupManager} placeholder="Chọn người phụ trách"
                        >
                            {groupManagers && groupManagers.length > 0 &&
                                groupManagers.map((item, index) => {
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
                        <label>Địa chỉ liên hệ</label>
                        <input className="form-control" type="text" value={this.state.address}
                            onChange={(event) => this.handleOnchangeInput(event, 'address')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Hình ảnh đội nhóm</label>
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
                        <button className="btn-save-group"
                            onClick={() => this.handleSaveNewGroup()}
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
        groupRedux: state.admin.group,
        allDepartmentRedux: state.admin.allDepartments,
        groupManagerRedux: state.admin.allGroupManagers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllGroupStart: () => dispatch(actions.fetchAllGroupStart()),
        getAllDepartmentStart: () => dispatch(actions.fetchAllDepartmentStart()),
        getAllGroupManagers: () => dispatch(actions.fetchAllGroupManagers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageGroup);
