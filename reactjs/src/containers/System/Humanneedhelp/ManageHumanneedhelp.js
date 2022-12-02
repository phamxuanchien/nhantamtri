import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManageHumanneedhelp.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { LANGUAGES, CommonUtils } from '../../../utils';
import { createNewHumanneedhelp } from '../../../services/userService';
import { toast } from "react-toastify";
import * as actions from "../../../store/actions";

const mdParser = new MarkdownIt();
class ManageHumanneedhelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            location: '',
            purpose: '',
            program: '',
            cost: '',
            begin: '',
            operate: '',
            managename: '',
            manage: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
            email: '',
            phonenumber: '',
            stage: '',
        }
    }
    async componentDidMount() {
        this.props.getStageStart();
        this.props.getManageStart();
        this.props.getProgramStart();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (prevProps.stageRedux !== this.props.stageRedux) {
            let arrStages = this.props.stageRedux;
            this.setState({
                stageArr: arrStages,
                stage: arrStages && arrStages.length > 0 ? arrStages[0].keyMap : ''
            })
        }
        if (prevProps.manageRedux !== this.props.manageRedux) {
            let arrManages = this.props.manageRedux;
            this.setState({
                manageArr: arrManages,
                manage: arrManages && arrManages.length > 0 ? arrManages[0].keyMap : ''
            })
        }
        if (prevProps.programRedux !== this.props.programRedux) {
            let arrPrograms = this.props.programRedux;
            this.setState({
                programArr: arrPrograms,
                program: arrPrograms && arrPrograms.length > 0 ? arrPrograms[0].keyMap : ''
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

    handleSaveNewHumanneedhelp = async () => {
        let res = await createNewHumanneedhelp(this.state)
        if (res && res.errCode === 0) {
            toast.success('Add new humanneedhelp succeeds!')
            this.setState({
                name: '',
                address: '',
                location: '',
                purpose: '',
                program: '',
                cost: '',
                begin: '',
                operate: '',
                managename: '',
                manage: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
                email: '',
                phonenumber: '',
                stage: '',
            })
        } else {
            toast.error('Something wrongs...')
        }
    }

    render() {
        let stages = this.state.stageArr;
        let manages = this.state.manageArr;
        let programs = this.state.programArr;
        let language = this.props.language;

        return (

            <div className="manage-humanneedhelp-container">
                <div className="ms-title">Quản lý hoàn cảnh cần giúp đỡ</div>
                <div className="add-new-humanneedhelp row">
                    <label className="add-new">Tạo hoàn cảnh mới</label>
                    <div className="col-12 humanneedhelp-info">
                        <label className="project-info">Thông tin về hoàn cảnh</label>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Tên hoàn cảnh</label>
                                <input className="form-control" type="text" value={this.state.name}
                                    onChange={(event) => this.handleOnchangeInput(event, 'name')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>Hoàn cảnh cần giúp này thuộc chương trình</label>
                                <select className="form-control"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'program') }}
                                    value={this.state.program}
                                >
                                    {programs && programs.length > 0
                                        && programs.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-12 form-group">
                                <label>Địa chỉ của hoàn cảnh cần giúp đỡ</label>
                                <input className="form-control" type="text" value={this.state.location}
                                    onChange={(event) => this.handleOnchangeInput(event, 'location')}
                                />

                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Mục đích giúp đỡ hoàn cảnh</label>
                                <input className="form-control" type="text" value={this.state.purpose}
                                    onChange={(event) => this.handleOnchangeInput(event, 'purpose')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>Tổng chi phí cần được giúp đỡ</label>
                                <input className="form-control" type="text" value={this.state.cost}
                                    onChange={(event) => this.handleOnchangeInput(event, 'cost')}
                                />

                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Dự kiến thời gian triển khai</label>
                                <input className="form-control" type="text" value={this.state.begin}
                                    onChange={(event) => this.handleOnchangeInput(event, 'begin')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>Dự kiến thời gian trao giúp đỡ</label>
                                <input className="form-control" type="text" value={this.state.operate}
                                    onChange={(event) => this.handleOnchangeInput(event, 'operate')}
                                />

                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Hoàn cảnh đang trong giai đoạn</label>
                                <select className="form-control"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'stage') }}
                                    value={this.state.stage}
                                >
                                    {stages && stages.length > 0
                                        && stages.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                            <div className="col-6 form-group">
                                <label>Hình ảnh của Hoàn cảnh</label>
                                <input className="form-control-file" type="file"
                                    value={this.state.event}
                                    onChange={(event) => this.handleOnchangeImage(event)}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 humanneedhelp-contact">
                        <label className="info-manage">Thông tin ban quản lý</label>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Người phụ trách</label>
                                <input className="form-control" type="text" value={this.state.managename}
                                    onChange={(event) => this.handleOnchangeInput(event, 'managename')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>Trách nhiệm</label>
                                <select className="form-control"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'manage') }}
                                    value={this.state.manage}
                                >
                                    {manages && manages.length > 0
                                        && manages.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })}
                                </select>

                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Số điện thoại</label>
                                <input className="form-control" type="text" value={this.state.phonenumber}
                                    onChange={(event) => this.handleOnchangeInput(event, 'phonenumber')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>Email</label>
                                <input className="form-control" type="text" value={this.state.email}
                                    onChange={(event) => this.handleOnchangeInput(event, 'email')}
                                />

                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Địa chỉ liên hệ</label>
                                <input className="form-control" type="text" value={this.state.address}
                                    onChange={(event) => this.handleOnchangeInput(event, 'address')}
                                />

                            </div>
                        </div>
                    </div>
                    <label className="project-content">Thêm nội dung của hoàn cảnh</label>
                    <div className="col-12">
                        <MdEditor
                            style={{ height: '300px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.descriptionMarkdown}
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn-save-humanneedhelp"
                            onClick={() => this.handleSaveNewHumanneedhelp()}
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
        stageRedux: state.admin.stage,
        manageRedux: state.admin.manage,
        programRedux: state.admin.programs,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getStageStart: () => dispatch(actions.fetchStageStart()),
        getManageStart: () => dispatch(actions.fetchManageStart()),
        getProgramStart: () => dispatch(actions.fetchProgramStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageHumanneedhelp);
