import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './MainLogin.scss';
import { FormattedMessage } from 'react-intl';
import UserGuideAccounts from './UserGuideAccounts';
import Login from './Login';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";
import RegisterAccount from './RegisterAccount';


class MainLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleLoginAccount = () => {
        // if (this.props.history) {
        //     this.props.history.push(`/registeraccount`)
        //     this.setState({
        //         action: CRUD_ACTIONS.ON,
        //     })
        // }
        this.setState({
            action: CRUD_ACTIONS.ON,
        })
    }
    handleRegisterAccount = () => {
        window.location.reload();

    }
    render() {

        return (
            <div className="mainlogin-background">
                <div className="mainlogin-container">
                    <div className="mainlogin-content col-12">
                        <div className="mainlogin-content-left col-4 col-md-12">
                            <Login loginAccount={() => this.handleLoginAccount()} />
                        </div>
                        <div className="mainlogin-content-right col-8 col-md-12">
                            {this.state.action === CRUD_ACTIONS.ON ? <RegisterAccount registerAccount={() => this.handleRegisterAccount()} /> : <UserGuideAccounts />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };

};

export default connect(mapStateToProps, mapDispatchToProps)(MainLogin);
