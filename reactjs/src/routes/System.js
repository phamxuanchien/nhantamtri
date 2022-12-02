import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/Admin/UserRedux';
import Header from '../containers/Header/Header';
import ManageManager from '../containers/System/Admin/ManageManager';
import ManageBranch from '../containers/System/Branch/ManageBranch';
import ManageDepartment from '../containers/System/Department/ManageDepartment';
import ManageGroup from '../containers/System/InternalOperations/ManageGroup';
import ManageSubmenu from '../containers/System/InternalOperations/ManageSubmenu';

import ManageProjectneedhelp from '../containers/System/Projectneedhelp/ManageProjectneedhelp';
// import EditUsers from '../containers/usermember/EditUsers';
import HomePage from '../containers/HomePage/HomePage';
import EditInfoUser from '../containers/usermember/EditInfoUser';
import ManageHumanneedhelp from '../containers/System/Humanneedhelp/ManageHumanneedhelp';
import ManageNewsevents from '../containers/System/Newsevents/ManageNewsevents';
import ManageBenefactor from '../containers/System/Benefactor/ManageBenefactor';
import ManageAllcode from '../containers/System/InternalOperations/ManageAllcode';
import ManageWork from '../containers/System/Work/ManageWork';
import CreateWork from '../containers/System/Work/CreateWork';
import DeployWork from '../containers/System/Work/DeployWork';
import PlanWork from '../containers/System/Work/PlanWork';
import PerformWork from '../containers/System/Work/PerformWork';
import AssignmentWork from '../containers/System/Work/AssignmentWork';

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/home" exact component={HomePage} />
                            {/* <Route path="/system/home" component={HomePage} /> */}
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/user-redux" component={UserRedux} />
                            <Route path="/system/manage-manager" component={ManageManager} />

                            <Route path="/system/editinfouser" component={EditInfoUser} />

                            <Route path="/system/manage-projectneedhelp" component={ManageProjectneedhelp} />
                            <Route path="/system/manage-humanneedhelp" component={ManageHumanneedhelp} />
                            <Route path="/system/manage-newsevents" component={ManageNewsevents} />
                            <Route path="/system/manage-benefactor" component={ManageBenefactor} />

                            <Route path="/system/manage-branch" component={ManageBranch} />
                            <Route path="/system/manage-department" component={ManageDepartment} />
                            <Route path="/system/manage-group" component={ManageGroup} />
                            <Route path="/system/manage-submenu" component={ManageSubmenu} />
                            <Route path="/system/manage-allcode" component={ManageAllcode} />

                            <Route path="/system/manage-work" component={ManageWork} />
                            <Route path="/system/create-work" component={CreateWork} />
                            <Route path="/system/deploy-work" component={DeployWork} />
                            <Route path="/system/plan-work" component={PlanWork} />
                            <Route path="/system/perform-work" component={PerformWork} />
                            <Route path="/system/assignment-work" component={AssignmentWork} />


                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
