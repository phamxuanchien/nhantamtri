import React from 'react';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

        }
    }

    handleOnChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })


    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {

            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('loging success');

            }

        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
            console.log('error message', e.response);
        }
    }

    handleShowHidePassword = () => {

        this.setState({
            isshowPassword: !this.state.isshowPassword
        })
        console.log(this.state.isshowPassword);
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            this.handleLogin();
        }
    }

    loginAccount = () => {
        if (this.props.history) {
            this.props.history.push(`/registeraccount`)
        }
    }
    render() {

        return (
            <div className="login-background">

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
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };


};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

