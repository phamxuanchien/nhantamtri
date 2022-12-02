import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './Donation.scss';
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/HomeFooter';
import DonationForm from './DonationForm';
import DonationDonor from './DonationDonor';
import ListMenuImage from '../HomePage/Section/ListMenuImage';


class Donation extends Component {
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
            <div className="donation-container">
                <HomeHeader />
                <div className="donation-title">
                    <span className="comment">Quyên góp cho nhân tâm trí</span>
                </div>
                <div className="donation-body">
                    <div className="donation-left col-lg-9 col-md-12">
                        <div className="donation-donor">
                            <DonationDonor />
                        </div>
                        <div className="donation-form">
                            <DonationForm />
                        </div>
                    </div>
                    <div className="donation-right col-lg-3 col-md-0">
                        <ListMenuImage />
                    </div>

                </div>
                <div className="donation-footer">
                    <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(Donation);
