import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManagerExtraInfor.scss';
import { LANGUAGES } from '../../../utils';
import { getExtraInforManagerById } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';


class ManagerExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
            extraInfor: {}
        }
    }
    async componentDidMount() {
        if (this.props.managerIdFromParent) {
            let res = await getExtraInforManagerById(this.props.managerIdFromParent);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (this.props.managerIdFromParent !== prevProps.managerIdFromParent) {
            let res = await getExtraInforManagerById(this.props.managerIdFromParent);
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }

    ShowHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }
    render() {

        let { isShowDetailInfor, extraInfor } = this.state;
        let { language } = this.props;
        return (
            <div className="manager-extra-infor-container">
                <div className="content-up">
                    <div className="text-address">
                        <FormattedMessage id="patient.extra-infor-manager.text-address" />
                    </div>
                    <div className="name-department">
                        {extraInfor && extraInfor.nameDepartment ? extraInfor.nameDepartment : ''}
                    </div>
                    <div className="detail-address">
                        {extraInfor && extraInfor.addressDepartment ? extraInfor.addressDepartment : ''}
                    </div>
                </div>
                <div className="content-down">
                    {isShowDetailInfor === false &&
                        <div className="short-infor">
                            <FormattedMessage id="patient.extra-infor-manager.price" />
                            {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI
                                &&
                                <NumberFormat
                                    className="currency"
                                    value={extraInfor.priceTypeData.valueVi}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={'VND'}
                                />
                            }
                            {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN
                                &&
                                <NumberFormat
                                    className="currency"
                                    value={extraInfor.priceTypeData.valueEn}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={'USD'}
                                />
                            }
                            <span className="detail" onClick={() => this.ShowHideDetailInfor(true)}>
                                <FormattedMessage id="patient.extra-infor-manager.detail" />
                            </span>
                        </div>
                    }
                    {isShowDetailInfor === true &&
                        <>
                            <div className="title-price">
                                <FormattedMessage id="patient.extra-infor-manager.price" />
                            </div>
                            <div className="detail-infor">
                                <div className="price" />
                                <span className="left">
                                    <FormattedMessage id="patient.extra-infor-manager.price" />
                                </span>
                                <span className="right">
                                    {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI
                                        &&
                                        <NumberFormat
                                            className="currency"
                                            value={extraInfor.priceTypeData.valueVi}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            suffix={'VND'}
                                        />
                                    }
                                    {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN
                                        &&
                                        <NumberFormat
                                            className="currency"
                                            value={extraInfor.priceTypeData.valueEn}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            suffix={'USD'}
                                        />
                                    }
                                </span>
                            </div>
                            <div className="note">
                                {extraInfor && extraInfor.note ? extraInfor.note : ''}
                            </div>
                            <div className="payment">
                                <FormattedMessage id="patient.extra-infor-manager.payment" />
                                {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.VI
                                    ? extraInfor.paymentTypeData.valueVi : ''}
                                {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.EN
                                    ? extraInfor.paymentTypeData.valueEn : ''}
                            </div>
                            <div className="hide-price">
                                <span onClick={() => this.ShowHideDetailInfor(false)}>
                                    <FormattedMessage id="patient.extra-infor-manager.hide-price" />
                                </span>
                            </div>
                        </>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerExtraInfor);
