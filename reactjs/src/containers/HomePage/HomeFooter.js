import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss';
import InfoContact from '../contacts/InfoContact';
import * as actions from '../../store/actions';
import { LANGUAGES } from '../../utils';
import AbountMenuProgram from '../AboutUs/AbountMenuProgram';
import AbountMenuGuide from '../AboutUs/AbountMenuGuide';
import AbountMenuAboutus from '../AboutUs/AbountMenuAboutus';

class HomeFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div className="home-footer-container">
                <div className="home-footer-body">
                    <div className="home-footer-up col-12">
                        <div className="footer-up-menu">
                            <InfoContact />
                        </div>
                        <div className="footer-up-menu">
                            <AbountMenuProgram />
                        </div>
                        <div className="footer-up-menu">
                            <AbountMenuGuide />
                        </div>
                        <div className="footer-up-menu">
                            <AbountMenuAboutus />
                        </div>
                    </div>
                    <div className="home-footer-down">
                        <p>&copy; 2022 nhantamtri.net<br />
                            <a>Tổ chức phi lợi nhuận Nhân Tâm Trí, giấy phép hoạt động số:....., cấp ngày:...../2022</a></p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

