import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import ntt from '../../assets/header/nhan tam tri.png';
import logo from '../../assets/header/LOGO NTT.png';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils";
import { changelanguageApp } from "../../store/actions";
import { withRouter } from 'react-router';
import SelideShowBanner from './SelideShowBanner';
import MenuHeader from './MenuHeader';
import Nav from '../../views/Nav';
import NavMobile from '../../views/NavMobile';
import { Link } from 'react-router-dom';

class HomeHeader extends Component {

    changelanguage = (language) => {
        this.props.changelanguageAppRedux(language)
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    returnToLogin = () => {
        if (this.props.history) {
            this.props.history.push(`/mainlogin`)
            this.setState({
                username: '',
                password: '',
            })
        }
    }

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className="container-fluid sticky-top">
                    <div className="row">
                        <div className="content-login col-12">
                            <div className="select-language"><span className="language"><FormattedMessage id="homeheader.select-language" />:  </span>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changelanguage(LANGUAGES.VI)}>VN</span></div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changelanguage(LANGUAGES.EN)}>EN</span></div>
                            </div>
                            <div className="login"><span className="login-span" onClick={() => this.returnToLogin()}><FormattedMessage id="homeheader.login" /></span></div>
                        </div>
                        <div className="content-element">
                            <div className="left-content">
                                <img className="header-logo" src={logo} onClick={() => this.returnToHome()} />
                            </div>
                            <div className="right-content">
                                <div className="right-content-up">
                                    <div className="right-content-up-sologan">
                                        {/* <span className="sologan">NHÂN TÂM TRÍ</span> */}
                                        <img className="header-ntt" src={ntt} />
                                    </div>
                                    <div className="right-content-up-login">
                                        <div className="image1"></div>
                                        <div className="image2"></div>
                                        <div className="image3"></div>
                                        <div className="image4"></div>
                                        <div className="image5"></div>
                                        <div className="image6"></div>
                                    </div>
                                </div>
                                <div className="right-content-down">
                                    <div className="right-content-center-sologan">
                                        <span className="center-sologan"><FormattedMessage id="homeheader.sologan" /></span>
                                    </div>
                                    <div className="right-content-center-login">
                                        <div className="select-language"><span className="language"><FormattedMessage id="homeheader.select-language" />:  </span>
                                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changelanguage(LANGUAGES.VI)}>VN</span></div>
                                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changelanguage(LANGUAGES.EN)}>EN</span></div>
                                        </div>
                                        {/* <div className="signup">
                                        <Link to={`/adduser`}><FormattedMessage id="homeheader.register" /></Link>
                                        <span>Đăng ký</span>
                                    </div> */}
                                        <div className="login"><span className="login-span" onClick={() => this.returnToLogin()}><FormattedMessage id="homeheader.login" /></span></div>
                                    </div>
                                </div>
                                <div className="header-menu">
                                    <label htmlFor="nav-mobile-input" className="navbar-toggler">
                                        <i className="fas fa-bars"></i>
                                    </label>
                                    <input type="checkbox" name="" className="nav_input" id="nav-mobile-input" />
                                    <div className="collapse">
                                        <Nav />
                                    </div>
                                    <label htmlFor="nav-mobile-input" className="overlay"></label>
                                    <label htmlFor="nav-mobile-input" className="collapse-mobile"><NavMobile /></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
                    <div className="home-header-banner">
                        <SelideShowBanner />
                    </div>
                }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changelanguageAppRedux: (language) => dispatch(changelanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
