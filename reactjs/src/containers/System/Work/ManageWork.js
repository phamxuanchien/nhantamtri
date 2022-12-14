import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManageWork.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { createNewBranch } from '../../../services/userService';
import { toast } from "react-toastify";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";

const mdParser = new MarkdownIt();
class ManageWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branchArr: [],
            branchName: '',
            branchCode: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
            image: '',
            phonenumber: '',
            address: '',
            email: '',
            branchId: '',
            branchManager: '',
            listbranchManagers: [],
        }
    }
    async componentDidMount() {
        this.props.getBranchStart();
        this.props.getAllBranchManagers();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.branchRedux !== this.props.branchRedux) {
            let arrBranch = this.props.branchRedux;
            this.setState({
                branchArr: arrBranch,
                branch: arrBranch && arrBranch.length > 0 ? arrBranch[0].keyMap : ''
            })
        }
        if (prevProps.branchManagerRedux !== this.props.branchManagerRedux) {
            let arrBranchManager = this.props.branchManagerRedux;
            this.setState({
                listbranchManagers: arrBranchManager.data,
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

    handleSaveNewBranch = async () => {
        let res = await createNewBranch(this.state)
        if (res && res.errCode === 0) {
            toast.success('Add new branch succeeds!')
            this.setState({
                branchName: '',
                branchCode: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
                image: '',
                phonenumber: '',
                address: '',
                email: '',
                branchId: '',
                branchManager: '',
            })
        } else {
            toast.error('Something wrongs...')
        }
    }

    render() {

        let branchs = this.state.branchArr;
        let branchManagers = this.state.listbranchManagers;
        let language = this.props.language;
        return (

            <div className="manage-branch-container">
                <div className="ms-title">Qu???n l?? c??ng vi???c</div>
                <div className="work-title">t??n chi nh??nh, b??? ph???n....</div>
                <div className="add-new-branch row">
                    <div className="col-6 form-group">
                        <label>T??n c??ng vi???c:</label>
                        <input className="form-control" type="text" value={this.state.branchName}
                            onChange={(event) => this.handleOnchangeInput(event, 'branchName')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Giai ??o???n:<FormattedMessage id="manage-user.gender" /></label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'branchId') }}
                            value={this.state.branchId} placeholder="Ch???n lo???i h??nh t??? ch???c"
                        >
                            {branchs && branchs.length > 0 &&
                                branchs.map((item, index) => {
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
                        <label>M?? ?????nh danh:</label>
                        <input className="form-control" type="text" value={this.state.branchCode}
                            onChange={(event) => this.handleOnchangeInput(event, 'branchCode')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Ng?????i ph??? tr??ch:</label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'branchManager') }}
                            value={this.state.branchManager} placeholder="Ch???n ng?????i ph??? tr??ch"
                        >
                            {branchManagers && branchManagers.length > 0 &&
                                branchManagers.map((item, index) => {
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
                        <label>S??? ??i???n tho???i li??n h???:</label>
                        <input className="form-control" type="text" value={this.state.phonenumber}
                            onChange={(event) => this.handleOnchangeInput(event, 'phonenumber')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Email li??n h???:</label>
                        <input className="form-control" type="text" value={this.state.email}
                            onChange={(event) => this.handleOnchangeInput(event, 'email')}
                        />

                    </div>
                    <div className="col-12 form-group">
                        <label>?????a ch??? li??n h???:</label>
                        <input className="form-control" type="text" value={this.state.address}
                            onChange={(event) => this.handleOnchangeInput(event, 'address')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>???nh c??ng ty, chi nh??nh, v??n ph??ng,trung t??m</label>
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
                        <button className="btn-save-branch"
                            onClick={() => this.handleSaveNewBranch()}
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
        branchRedux: state.admin.branch,
        branchManagerRedux: state.admin.allBranchManagers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBranchStart: () => dispatch(actions.fetchBranchStart()),
        getAllBranchManagers: () => dispatch(actions.fetchAllBranchManagers()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageWork);
