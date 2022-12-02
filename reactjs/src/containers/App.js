import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import Home from '../routes/Home';
// import Login from './Auth/Login';
import Header from './Header/Header';
import System from '../routes/System';
import { CustomToastCloseButton } from '../components/CustomToast';
import HomePage from './HomePage/HomePage.js';
import CustomScrollbars from '../components/CustomScrollbars';
import DetailManager from './Patient/Manager/DetailManager';
import Manager from '../routes/Manager';
import VerifyEmail from './Patient/VerifyEmail';
import DetailBranch from './Patient/Branch/DetailBranch';
import DetailDepartment from './Patient/Department/DetailDepartment';
import SliderNewsEvents from './HomePage/Section/SliderNewsEvents';
import SliderProjectneedhelp from './HomePage/Section/SliderProjectneedhelp';
import NewsEvents from './newsevents/NewsEvents';
import Donation from './donations/Donation';
import Contact from './contacts/Contact';
import ProjectNeedHelp from './ProjectNeedHelp/ProjectNeedHelp';
import DetailProjectNeedHelp from './ProjectNeedHelp/DetailProjectNeedHelp';
import HonorBenefactors from './honors/HonorBenefactors';
import DetailHonorBenefactors from './honors/DetailHonorBenefactors';
import PublicActivity from './ManageActivity/PublicActivity';
import DetailNews from './newsevents/DetailNews';
import Humanneedhelp from './NeedHelpNow/Humanneedhelp';
import Detailhumanneedhelp from './NeedHelpNow/Detailhumanneedhelp';
import SliderHumanneedhelp from './HomePage/Section/SliderHumanneedhelp';
import SliderHonorBenefactor from './HomePage/Section/SliderHonorBenefactor';
import AboutUs from './AboutUs/AboutUs';
import MainLogin from './Account/MainLogin';
import RegisterAccount from './Account/RegisterAccount';
import ForgotPassword from './Account/ForgotPassword';
import AppTodo from './System/Todos/AppTodo';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">

                        <div className="content-container">
                            <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    {/* <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} /> */}
                                    <Route path={path.MAINLOGIN} component={userIsNotAuthenticated(MainLogin)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    <Route path={'/manager/'} component={userIsAuthenticated(Manager)} />
                                    <Route path={path.HOMEPAGE} component={HomePage} />
                                    <Route path={path.DETAIL_MANAGER} component={DetailManager} />
                                    <Route path={path.DETAIL_BRANCH} component={DetailBranch} />
                                    <Route path={path.DETAIL_DEPARTMENT} component={DetailDepartment} />

                                    <Route path={path.VERIFY_EMAIL_BOOKING} exact component={VerifyEmail} />

                                    <Route path={'/slidernewsevents'} exact component={SliderNewsEvents} />
                                    <Route path={'/sliderhonorbenefactor'} exact component={SliderHonorBenefactor} />
                                    <Route path={'/sliderprojectneedhelp'} exact component={SliderProjectneedhelp} />
                                    <Route path={'/sliderhumanneedhelp'} exact component={SliderHumanneedhelp} />

                                    <Route path={'/donation'} exact component={Donation} />
                                    <Route path={'/contact'} exact component={Contact} />

                                    <Route path={'/home'} exact component={HomePage} />

                                    <Route path={'/projectneedhelp'} exact component={ProjectNeedHelp} />
                                    <Route path={path.DETAILPROJECTNEEDHELP} component={DetailProjectNeedHelp} />

                                    <Route path={'/humanneedhelp'} exact component={Humanneedhelp} />
                                    <Route path={path.DETAILHUMANNEEDHELP} component={Detailhumanneedhelp} />
                                    {/* vinh danh nhà hảo tâm */}
                                    <Route path={'/honorbenefactors'} exact component={HonorBenefactors} />
                                    <Route path={path.DETAILHONORBENEFACTORS} component={DetailHonorBenefactors} />
                                    {/* công khai hoạt động */}
                                    <Route path={'/publicactivity'} exact component={PublicActivity} />

                                    <Route path={'/newsevents'} exact component={NewsEvents} />
                                    <Route path={path.DETAIL_NEWS} component={DetailNews} />

                                    <Route path={'/aboutus'} exact component={AboutUs} />
                                    <Route path={'/registeraccount'} exact component={RegisterAccount} />
                                    <Route path={'/forgotpassword'} exact component={ForgotPassword} />

                                    <Route path={'/apptodo'} exact component={AppTodo} />
                                </Switch>
                            </CustomScrollbars>
                        </div>

                        {/* <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        /> */}

                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </Router>
            </Fragment >
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);