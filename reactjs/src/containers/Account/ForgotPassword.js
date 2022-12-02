import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";
import * as actions from "../../store/actions";
import './ForgotPassword.scss';


class RegisterAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',

        }
    }

    async componentDidMount() {
        this.props.getGenderStart();

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : ''
            })
        }

    }


    registerAccount = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phoneNumber,
            gender: this.state.gender,

        })
        this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
        })
        window.location.reload();

    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i])
                break;
            }
        }
        return isValid;
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }

        copyState[id] = event.target.value;
        this.setState({
            ...copyState

        })
    }
    // registerAccount = () => {
    //     // if (this.props.addUserSuccess() && this.props.history) {
    //     //     // this.props.history.push(`/login`)
    //     // }
    // }

    render() {
        let genders = this.state.genderArr;
        let language = this.props.language;
        let isGetGenders = this.props.isLoadingGender;

        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar } = this.state;
        return (
            <div className="registeraccount-container">
                <div className="title"> Vui lòng làm theo hướng dẫn để được cấp lại password
                    {/* <FormattedMessage id="manage-user.manage-user" /> */}
                </div>
                <div className="registeraccount-body" >
                    <div className="registeraccount-element">
                        <div className="row">
                            <div className="col-6">
                                <label>Vui lòng Nhập email bạn đã dùng để đăng ký tài khoản<FormattedMessage id="manage-user.email" /></label>
                                <input className="form-control" type="email"
                                    value={email}
                                    onChange={(event) => { this.onChangeInput(event, 'email') }}
                                />
                            </div>
                            <div className="col-6">
                                <label>Vui lòng Nhập số điện thoại bạn đã dùng để đăng ký tài khoản<FormattedMessage id="manage-user.phone-number" /></label>
                                <input className="form-control" type="text"
                                    value={phoneNumber}
                                    onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                                />
                            </div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className="form-control" type="password"
                                    value={password}
                                    onChange={(event) => { this.onChangeInput(event, 'password') }}
                                />
                            </div>
                            <div>Hãy xác nhận để được cấp password mới</div>
                            <div className="col-12 my-3">
                                <button className="btn btn-primary"
                                // onClick={() => this.registerAccount()}
                                >
                                    Xác nhận
                                    <FormattedMessage id="manage-user.create" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        // roleRedux: state.admin.roles,
        // positionRedux: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        // getPositionStart: () => dispatch(actions.fetchPositionStart()),
        // getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAccount);
