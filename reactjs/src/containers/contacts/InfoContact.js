import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './InfoContact.scss';


class InfoContact extends Component {
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
            <div className="infocontact-container">
                <div className="infocontact-title">
                    <span className="comment"><FormattedMessage id="homepage.contact-infor" /></span>
                </div>
                <div className="infocontact-body">
                    <div className="detail-contact"><i className="far fa-envelope"></i><span className="detail-contact-span">nhantamtri2022@gmail.com</span></div>
                    <div className="detail-contact"><i className="fas fa-mobile-alt"></i><span className="detail-contact-span">0933735892</span></div>
                    <div className="detail-contact"><i className="fas fa-map-marker-alt"></i><span className="detail-contact-span">25 Gia Quất, Thượng Thanh, Long Biên, Hà Nội</span></div>
                    <div className="detail-contact"><i className="far fa-envelope"></i><span className="detail-contact-span">Hotline:   0338203934</span></div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoContact);
