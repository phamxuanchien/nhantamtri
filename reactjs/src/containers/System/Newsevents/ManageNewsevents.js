import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManageNewsevents.scss';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { LANGUAGES, CommonUtils } from '../../../utils';
import { createNewNewsevents } from '../../../services/userService';
import { toast } from "react-toastify";
import * as actions from "../../../store/actions";

const mdParser = new MarkdownIt();
class ManageNewsevents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            abstract: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',

        }
    }
    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

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

    handleSaveNewNewsevents = async () => {
        let res = await createNewNewsevents(this.state)
        if (res && res.errCode === 0) {
            toast.success('Add new newsevents succeeds!')
            this.setState({
                title: '',
                abstract: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: '',
            })
        } else {
            toast.error('Something wrongs...')
            console.log('hoidanit check res: ', res)
        }
    }

    render() {
        let language = this.props.language;

        return (

            <div className="manage-newsevents-container">
                <div className="ms-title">Qu???n l?? tin t???c & s??? ki???n</div>
                <div className="add-new-newsevents row">
                    <label className="add-new">T???o m???i tin t???c, s??? ki???n</label>
                    <div className="col-12 newsevents-info">
                        <label className="project-info">Th??ng tin v??? tin t???c, s??? ki???n</label>
                        <div className="element col-12">
                            <div className="col-6 form-group">
                                <label>Ti??u ????? b??i vi???t</label>
                                <input className="form-control" type="text" value={this.state.title}
                                    onChange={(event) => this.handleOnchangeInput(event, 'title')}
                                />

                            </div>
                            <div className="col-6 form-group">
                                <label>H??nh ???nh minh h???a</label>
                                <input className="form-control-file" type="file"
                                    value={this.state.event}
                                    onChange={(event) => this.handleOnchangeImage(event)}
                                />

                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <label>T??m t???t n???i dung b??i vi???t</label>
                            <textarea className="form-control" rows="5" type="text"
                                value={this.state.abstract}
                                onChange={(event) => this.handleOnchangeInput(event, 'abstract')}
                            />
                        </div>
                    </div>
                    <label className="project-content">N???i dung ch??nh c???a b??i vi???t:</label>
                    <div className="col-12">
                        <MdEditor
                            style={{ height: '300px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.descriptionMarkdown}
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn-save-newsevents"
                            onClick={() => this.handleSaveNewNewsevents()}
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

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageNewsevents);
