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
                <div className="ms-title">Qu???n l?? ho??n c???nh c???n gi??p ?????</div>
                <div className="add-new-humanneedhelp row">
                    <label className="add-new">T???o ho??n c???nh m???i</label>
                    <div className="col-12 humanneedhelp-info">
                        <label className="project-info">Th??ng tin v??? ho??n c???nh</label>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>T??n ho??n c???nh</label>
                                <input className="form-control" type="text" value={this.state.name}
                                    onChange={(event) => this.handleOnchangeInput(event, 'name')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>Ho??n c???nh c???n gi??p n??y thu???c ch????ng tr??nh</label>
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
                                <label>?????a ch??? c???a ho??n c???nh c???n gi??p ?????</label>
                                <input className="form-control" type="text" value={this.state.location}
                                    onChange={(event) => this.handleOnchangeInput(event, 'location')}
                                />

                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>M???c ????ch gi??p ????? ho??n c???nh</label>
                                <input className="form-control" type="text" value={this.state.purpose}
                                    onChange={(event) => this.handleOnchangeInput(event, 'purpose')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>T???ng chi ph?? c???n ???????c gi??p ?????</label>
                                <input className="form-control" type="text" value={this.state.cost}
                                    onChange={(event) => this.handleOnchangeInput(event, 'cost')}
                                />

                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>D??? ki???n th???i gian tri???n khai</label>
                                <input className="form-control" type="text" value={this.state.begin}
                                    onChange={(event) => this.handleOnchangeInput(event, 'begin')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>D??? ki???n th???i gian trao gi??p ?????</label>
                                <input className="form-control" type="text" value={this.state.operate}
                                    onChange={(event) => this.handleOnchangeInput(event, 'operate')}
                                />

                            </div>
                        </div>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Ho??n c???nh ??ang trong giai ??o???n</label>
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
                                <label>H??nh ???nh c???a Ho??n c???nh</label>
                                <input className="form-control-file" type="file"
                                    value={this.state.event}
                                    onChange={(event) => this.handleOnchangeImage(event)}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 humanneedhelp-contact">
                        <label className="info-manage">Th??ng tin ban qu???n l??</label>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Ng?????i ph??? tr??ch</label>
                                <input className="form-control" type="text" value={this.state.managename}
                                    onChange={(event) => this.handleOnchangeInput(event, 'managename')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>Tr??ch nhi???m</label>
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
                                <label>S??? ??i???n tho???i</label>
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
                                <label>?????a ch??? li??n h???</label>
                                <input className="form-control" type="text" value={this.state.address}
                                    onChange={(event) => this.handleOnchangeInput(event, 'address')}
                                />

                            </div>
                        </div>
                    </div>
                    <label className="project-content">Th??m n???i dung c???a ho??n c???nh</label>
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
