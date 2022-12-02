import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DonationForm.scss';
import bankinter from '../../assets/bank/mastercard-visa-bank-card.png';
import banksacombank from '../../assets/bank/Logo-Sacombank-new.png';
import bankvietcombank from '../../assets/bank/vietcombank.png';
import momo from '../../assets/bank/MoMo_Logo.png';
import zalopay from '../../assets/bank/zalo.png';
import sacombankpay from '../../assets/bank/sacombank pay.png';
import paypal from '../../assets/bank/paypal-logo.png';


class DonationForm extends Component {
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
    returnDonationBank = () => {
        if (this.props.history) {
            this.props.history.push(`/donation/donationbank`)
        }
    }

    render() {


        return (
            <div className="donation-form-container">
                <div className="row">
                    <div className="donation-form-title">
                        <label>ủng hộ chúng tôi bằng cách</label>
                    </div>
                    <div className="donation-form-content col-12">
                        <div className="donation-form-content-up">
                            <div className="donation-form-bank-title">
                                <label className="label">chuyển khoản ngân hàng</label>
                            </div>
                            <div className="donation-form-bank-content">
                                BANG DANH SACH TK NGAN HANG
                            </div>
                        </div>
                        <div className="donation-form-content-center">
                            <div className="donation-form-wallet-title">
                                <label className="label">ví điện tử</label>
                            </div>
                            <div className="donation-form-wallet-content">
                                DANH SACH VI DIEN TU
                            </div>
                        </div>
                        <div className="donation-form-content-down">
                            <div className="donation-form-paypal-title">
                                <label className="label">ngoại tệ</label>
                            </div>
                            <div className="donation-form-paypal-content">
                                DANH SACH TL PAYPAL
                            </div>
                        </div>
                        <div className="donation-form-cash">
                            <div className="donation-form-cash-title">
                                <label className="label">tiền mặt hoặc vật chất</label>
                            </div>
                            <div className="donation-form-cash-content">
                                <label>vui lòng liên hệ và trực tiếp quyên góp tại văn phòng của chúng tôi</label>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DonationForm);
