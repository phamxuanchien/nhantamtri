import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManageSubmenu.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { LANGUAGES, CommonUtils } from '../../../utils';
import { createNewSubmenu } from '../../../services/userService';
import { toast } from "react-toastify";
import * as actions from "../../../store/actions";

const mdParser = new MarkdownIt();
class ManageGroupmenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            groupmenu: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',
        }
    }
    async componentDidMount() {
        this.props.getGroupmenuStart();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (prevProps.groupmenuRedux !== this.props.groupmenuRedux) {
            let arrGroupmenus = this.props.groupmenuRedux;
            this.setState({
                groupmenuArr: arrGroupmenus,
                groupmenu: arrGroupmenus && arrGroupmenus.length > 0 ? arrGroupmenus[0].keyMap : ''
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

    handleSaveNewSubmenu = async () => {
        let res = await createNewSubmenu(this.state)
        if (res && res.errCode === 0) {
            toast.success('Add new submenu succeeds!')
            this.setState({
                name: '',
                groupmenu: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
            })
        } else {
            toast.error('Something wrongs...')
        }
    }

    render() {
        let groupmenu = this.state.groupmenuArr;
        let language = this.props.language;
        return (

            <div className="manage-submenu-container">
                <div className="ms-title">Quản lý Submenu</div>
                <div className="add-new-submenu row">
                    <div className="col-6 form-group">
                        <label>Tên menu</label>
                        <input className="form-control" type="text" value={this.state.name}
                            onChange={(event) => this.handleOnchangeInput(event, 'name')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Chọn nhóm menu</label>
                        <select className="form-control"
                            onChange={(event) => { this.handleOnchangeInput(event, 'groupmenu') }}
                            value={this.state.groupmenu}
                        >
                            {groupmenu && groupmenu.length > 0
                                && groupmenu.map((item, index) => {
                                    return (
                                        <option key={index} value={item.keyMap} placeholder="chọn submenu">
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    )
                                })}
                        </select>
                    </div>
                    <div className="col-6 form-group">
                        <label>Ảnh submenu</label>
                        <input className="form-control-file" type="file"
                            value={this.state.event}
                            onChange={(event) => this.handleOnchangeImage(event)}
                        />

                    </div>

                    <div className="detai-info col-12">
                        <span className="detai-info-title">Thêm thông tin chi tiết</span>
                        <MdEditor
                            style={{ height: '300px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.descriptionMarkdown}
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn-save-submenu"
                            onClick={() => this.handleSaveNewSubmenu()}
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
        groupmenuRedux: state.admin.groupmenus,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGroupmenuStart: () => dispatch(actions.fetchGroupmenuStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageGroupmenu);
