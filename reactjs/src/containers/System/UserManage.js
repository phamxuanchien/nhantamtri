import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManage.scss';
import { FormattedMessage } from 'react-intl';


class UserManage extends Component {


    render() {

        return (
            <div className="user-container">
                <div className='title text-center'><FormattedMessage id="manage-user.manage-internal" /></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
