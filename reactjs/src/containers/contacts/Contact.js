import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './Contact.scss';
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/HomeFooter';
import MessageContact from './MessageContact';
import InfoContact from './InfoContact';
import ListMenuImage from '../../containers/HomePage/Section/ListMenuImage';
import TableInfoContact from './TableInfoContact';


class Contact extends Component {
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
            <div className="contact-container">
                <HomeHeader />
                <div className="contact-body col-12">
                    <div className="contact-title">
                        <div className="intro-title">
                            <label className="comment">Liên hệ với chúng tôi</label>
                        </div>
                    </div>
                    <div className="contact-content col-12">
                        <div className="contact-left col-lg-9 col-md-12">
                            <div className="contact-message"><MessageContact /></div>
                            <div className="intro-content">
                                <div className="intro-content-title"><span className="intro-content-title-span">Danh sách và địa chỉ các văn phòng, chi nhánh trực thuộc</span></div>
                                <div><TableInfoContact /></div>
                            </div>
                        </div>
                        <div className="contact-right col-lg-3 col-md-0">
                            <div className="info-contact"><InfoContact /></div>
                            <div className="list-menu-image"><ListMenuImage /></div>
                        </div>
                    </div>
                </div>
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
