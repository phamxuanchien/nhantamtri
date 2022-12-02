import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ProfileManager.scss';
import { getProfileManagerById } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class ProfileManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProfile: {}
        }
    }
    async componentDidMount() {
        let data = await this.getInforManager(this.props.managerId);
        this.setState({
            dataProfile: data
        })
        console.log('>>>>hoidanit check state: ', this.state)
    }

    getInforManager = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileManagerById(id);
            if (res && res.errCode === 0) {
                result = res.data;
            }
        }
        return result;
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (this.props.managerId !== prevProps.managerId) {
            // this.getInforManager(this.props.managerId)
        }
    }

    renderTimeBooking = (dataTime) => {
        let { language } = this.props;
        if (dataTime && !_.isEmpty(dataTime)) {
            let time = language === LANGUAGES.VI ?
                dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;

            let date = language === LANGUAGES.VI ?
                moment.unix(+dataTime.date / 1000).format('dddd-DD/MM/YYYY')
                :
                moment.unix(+dataTime.date / 1000).locale('en').format('ddd-MM/DD/YYYY')
            return (
                <>
                    <div>{time}-{date}</div>
                    <div><FormattedMessage id="patient.booking-modal.freeBooking" /></div>
                </>
            )
        }
        return <></>
    }

    render() {

        let { dataProfile } = this.state;
        let { language, isShowDescriptionManager, dataTime, isShowPrice, isShowLinkDetail, managerId } = this.props;

        let nameVi = '', nameEn = '';
        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName}`;
            nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        return (
            <div className="profile-manager-container">
                <div className="intro-manager">
                    <div className="content-left">
                        <div className="image"
                            style={{ backgroundImage: `url(${dataProfile && dataProfile.image ? dataProfile.image : ''})` }}
                        >
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="up">
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                        </div>
                        <div className="down">
                            {isShowDescriptionManager === true ?
                                <>
                                    {dataProfile && dataProfile.Markdown
                                        && dataProfile.Markdown.description
                                        &&
                                        <span>
                                            {dataProfile.Markdown.description}
                                        </span>
                                    }
                                </>
                                :
                                <>
                                    {this.renderTimeBooking(dataTime)}
                                </>
                            }
                        </div>
                    </div>
                </div>
                {isShowLinkDetail === true &&
                    <div className="view-detail-manager">
                        <Link to={`/detail-manager/${managerId}`}>Xem thêm</Link>
                    </div>
                }
                {isShowPrice === true &&
                    <div className="price">
                        <FormattedMessage id="patient.booking-modal.price" />
                        {dataProfile && dataProfile.Manager && language === LANGUAGES.VI &&
                            <NumberFormat
                                className="currency"
                                value={dataProfile.Manager.priceTypeData.valueVi}
                                displayType={'text'}
                                thousandSeparator={true}
                                suffix={'VND'}
                            />
                        }
                        {dataProfile && dataProfile.Manager && language === LANGUAGES.EN &&
                            <NumberFormat
                                className="currency"
                                value={dataProfile.Manager.priceTypeData.valueEn}
                                displayType={'text'}
                                thousandSeparator={true}
                                suffix={'USD'}
                            />
                        }
                    </div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileManager);
