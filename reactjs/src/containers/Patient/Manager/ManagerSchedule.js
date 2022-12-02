import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManagerSchedule.scss';
import moment from 'moment';
import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getScheduleManagerByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';
import BookingModal from './Modal/BookingModal';

class ManagerSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
            allAvalableTime: [],
            isOpenModalBooking: false,
            dataScheduleTimeModal: {}
        }
    }
    async componentDidMount() {
        let { language } = this.props;
        let allDays = this.getArrDays(language);
        if (this.props.managerIdFromParent) {
            let res = await getScheduleManagerByDate(this.props.managerIdFromParent, allDays[0].value);
            this.setState({
                allAvalableTime: res.data ? res.data : []
            })
        }
        this.setState({
            allDays: allDays,
        })

    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    getArrDays = (language) => {
        let allDays = []
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                if (i === 0) {
                    let ddMM = moment(new Date()).format('DD/MM');
                    let today = `Hôm nay-${ddMM}`;
                    object.label = today;
                } else {
                    let labelVi = moment(new Date()).add(i, 'days').format('dddd-DD/MM');
                    object.label = this.capitalizeFirstLetter(labelVi)
                }

            } else {
                if (i === 0) {
                    let ddMM = moment(new Date()).format('DD/MM');
                    let today = `Today-${ddMM}`;
                    object.label = today;
                } else {
                    object.label = moment(new Date()).add(i, 'days').locale('en').format("ddd-DD/MM");
                }
            }
            object.value = moment(new Date()).add(i, 'days').startOf('days').valueOf();
            allDays.push(object);
        }

        return allDays;

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            let allDays = this.getArrDays(this.props.language);
            this.setState({
                allDays: allDays
            })
        }
        if (this.props.managerIdFromParent !== prevProps.managerIdFromParent) {
            let allDays = this.getArrDays(this.props.language);
            let res = await getScheduleManagerByDate(this.props.managerIdFromParent, allDays[0].value);
            this.setState({
                allAvalableTime: res.data ? res.data : []
            })
        }
    }

    handleOnChangeSelect = async (e) => {
        if (this.props.managerIdFromParent && this.props.managerIdFromParent !== -1) {
            let managerId = this.props.managerIdFromParent;
            let date = e.target.value;
            let res = await getScheduleManagerByDate(managerId, date);
            if (res && res.errCode === 0) {
                this.setState({
                    allAvalableTime: res.data ? res.data : []
                })
            }
        }
    }

    handleClickScheduleTime = (time) => {
        this.setState({
            isOpenModalBooking: true,
            dataScheduleTimeModal: time
        })
    }

    closeBookingModal = () => {
        this.setState({
            isOpenModalBooking: false,
        })
    }
    render() {
        let { allDays, allAvalableTime, isOpenModalBooking, dataScheduleTimeModal } = this.state;
        let { language } = this.props;
        return (
            <>
                <div className="manager-schedule-container">
                    <div className="all-schedule">
                        <select onChange={(e) => this.handleOnChangeSelect(e)}>
                            {allDays && allDays.length > 0 && allDays.map((item, index) => {
                                return (
                                    <option
                                        value={item.value}
                                        key={index}
                                    >
                                        {item.label}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="all-available-time">
                        <div className="text-calendar">
                            <i className="fas fa-calendar-alt">
                                <span><FormattedMessage id="patient.detail-manager.schedule" /></span>
                            </i>
                        </div>
                        <div className="time-content">
                            {allAvalableTime && allAvalableTime.length > 0 ?
                                <>
                                    <div className="time-content-btns">
                                        {allAvalableTime.map((item, index) => {
                                            let timeDisplay = language === LANGUAGES.VI ? item.timeTypeData.valueVi : item.timeTypeData.valueEn;

                                            return (
                                                <button key={index} className={language === LANGUAGES.VI ? 'btn-vi' : 'btn-en'}
                                                    onClick={() => this.handleClickScheduleTime(item)}
                                                >
                                                    {timeDisplay}
                                                </button>
                                            )
                                        })
                                        }
                                    </div>
                                    <div className="book-free">
                                        <span>
                                            <FormattedMessage id="patient.detail-manager.choose" />
                                            <i className="fas fa-hand-point-up"></i>
                                            <FormattedMessage id="patient.detail-manager.book-free" />
                                        </span>
                                    </div>
                                </>
                                :
                                <div className="no-schedule"><FormattedMessage id="patient.detail-manager.no-schedule" /></div>
                            }
                        </div>
                    </div>
                </div>
                <BookingModal
                    isOpenModal={isOpenModalBooking}
                    closeBookingModal={this.closeBookingModal}
                    dataTime={dataScheduleTimeModal}
                />
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerSchedule);
