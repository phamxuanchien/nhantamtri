import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './MessageContact.scss';


class MessageContact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {


        }
    }

    render() {


        return (
            <div className="message-contact-container">
                <div className="message-contact-content-title">
                    <label className="comment">gửi tin nhắn cho chúng tôi</label>
                </div>
                <div className="message-contact-content-up col-12">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="far fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Họ và tên" id="usr" name="username" />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="far fa-envelope"></i></span>
                        </div>
                        <input type="email" className="form-control" placeholder="Email" id="usr" name="username" />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-mobile-alt"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Số điện thoại" id="usr" name="username" />
                    </div>
                </div>

                <div className="form-group">
                    <span className="span">Lời nhắn của mạnh thường quân</span>
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Gửi tin nhắn</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageContact);
