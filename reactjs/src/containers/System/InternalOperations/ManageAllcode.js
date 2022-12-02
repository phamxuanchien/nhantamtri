import './ManageAllcode.scss';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from "../../../store/actions";
import TableAllcode from './TableAllcode';


class ManageAllcode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyMap: '',
            type: '',
            valueEn: '',
            valueVi: '',
        }
    }
    async componentDidMount() {
        this.setState({
            keyMap: '',
            type: '',
            valueEn: '',
            valueVi: '',
            action: CRUD_ACTIONS.CREATE,
        })
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (prevProps.allcodes !== this.props.allcodes) {

        }
    }

    handleOnchangeInput = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy
        })
    }

    handleSaveAllcode = async () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        let { action } = this.state;
        if (action === CRUD_ACTIONS.CREATE) {
            //fire redux create allcode
            this.props.createNewAAllcode({
                keyMap: this.state.keyMap,
                type: this.state.type,
                valueEn: this.state.valueEn,
                valueVi: this.state.valueVi,
            })
            this.setState({
                keyMap: '',
                type: '',
                valueEn: '',
                valueVi: '',
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            //fire redux edit allcode
            this.props.editAllcodeRedux({
                id: this.state.allcodeEditId,
                keyMap: this.state.keyMap,
                type: this.state.type,
                valueEn: this.state.valueEn,
                valueVi: this.state.valueVi,

            })
            this.setState({
                keyMap: '',
                type: '',
                valueEn: '',
                valueVi: '',
            })
        }
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['keyMap', 'type', 'valueEn', 'valueVi']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid;
    }
    handleEditAllcodeFromParent = (allcode) => {
        this.setState({
            keyMap: allcode.keyMap,
            type: allcode.type,
            valueEn: allcode.valueEn,
            valueVi: allcode.valueVi,

            action: CRUD_ACTIONS.EDIT,
            allcodeEditId: allcode.id,
        })
    }

    render() {

        let language = this.props.language;
        return (

            <div className="manage-submenu-container">
                <div className="ms-title">Quản lý bảng Allcode</div>
                <div className="add-new-submenu row">
                    <div className="manage-allcode-title col-12">
                        <span className="manage-allcode-title-span">Tạo mới code</span>
                    </div>
                    <div className="col-6 form-group">
                        <label>keyMap :"bao gồm chữ cái viết hoa và số ví dụ: R1,P2..."</label>
                        <input className="form-control" type="text" value={this.state.keyMap}
                            onChange={(event) => this.handleOnchangeInput(event, 'keyMap')}
                        />

                    </div>
                    <div className="col-6 form-group">
                        <label>Type :"bao gồm chữ cái viết hoa ví dụ: ROLE, STAGE..."</label>
                        <input className="form-control" type="text" value={this.state.type}
                            onChange={(event) => this.handleOnchangeInput(event, 'type')}
                        />
                    </div>
                    <div className="col-6 form-group">
                        <label>ValueVi : "tên code bằng tiếng việt"</label>
                        <input className="form-control" type="text" value={this.state.valueVi}
                            onChange={(event) => this.handleOnchangeInput(event, 'valueVi')}
                        />
                    </div>
                    <div className="col-6 form-group">
                        <label>ValueEn : "tên code bằng tiếng anh"</label>
                        <input className="form-control" type="text" value={this.state.valueEn}
                            onChange={(event) => this.handleOnchangeInput(event, 'valueEn')}
                        />
                    </div>
                    <div className="col-12">
                        <button className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-primary"}
                            onClick={() => this.handleSaveAllcode()}
                        >
                            {this.state.action === CRUD_ACTIONS.EDIT ?
                                <FormattedMessage id="manage-user.edit" />
                                :
                                <FormattedMessage id="manage-user.save-allcode" />
                            }
                        </button>
                    </div>
                    <div className="list-allcode col-12">
                        <label className="list-allcode-span">Danh mục Allcode toàn hệ thống</label>
                        <div className="col-12 mb-5">
                            <TableAllcode
                                handleEditAllcodeFromParent={this.handleEditAllcodeFromParent}
                                action={this.state.action}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listAllcodes: state.admin.allcodes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewAAllcode: (data) => dispatch(actions.createNewAAllcode(data)),
        fetchAllcodeRedux: () => dispatch(actions.fetchAllAllcodesStart()),
        editAllcodeRedux: (data) => dispatch(actions.editAllAllcode(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAllcode);
