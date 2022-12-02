import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import NavigatorMobile from '../../views/NavigatorMobile';
import { adminMenu, managerMenu, patientMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES, USER_ROLE } from "../../utils";
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuApp: []
        }
    }

    handleChangeLanguage = (language) => {
        this.props.changelanguageAppRedux(language)
    }

    componentDidMount() {
        let { userInfo } = this.props;
        let menu = [];
        if (userInfo && !_.isEmpty(userInfo)) {
            let role = userInfo.roleId;
            if (role === USER_ROLE.ADMIN) {
                menu = adminMenu;
            }
            if (role === USER_ROLE.MANAGER) {
                menu = managerMenu;
            }
            if (role === USER_ROLE.PATIENT) {
                menu = patientMenu;
            }
        }
        this.setState({
            menuApp: menu
        })
    }

    render() {
        const { processLogout, language, userInfo } = this.props;
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <label htmlFor="nav-mobile-input" className="navbar-toggler">
                        <i className="fas fa-bars"></i>
                    </label>
                    <input type="checkbox" name="" className="nav_input" id="nav-mobile-input" />
                    <div className="collapse">
                        <Navigator menus={this.state.menuApp} />
                    </div>
                    <label htmlFor="nav-mobile-input" className="overlay"></label>
                    <label htmlFor="nav-mobile-input" className="collapse-mobile"><NavigatorMobile menus={this.state.menuApp} /></label>
                </div>
                <div className="languages">
                    <div className="back-home">
                        <span onClick={processLogout}><Link to={`/home`}><FormattedMessage id="menu.home.homepage" /></Link></span>
                    </div>
                    <span className="welcome"><FormattedMessage id="homeheader.welcome" />
                        {userInfo && userInfo.firstName ? userInfo.firstName : ''} !</span>
                    <span className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"} onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>VN</span>
                    <span className={language === LANGUAGES.EN ? "language-en active" : "language-en"} onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>EN</span>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title="Log out">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changelanguageAppRedux: (language) => dispatch(actions.changelanguageApp(language)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
