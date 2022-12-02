import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SliderHumanneedhelp.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { withRouter } from 'react-router';
import * as actions from "../../../store/actions";
import { Link } from 'react-router-dom';
import { LANGUAGES } from '../../../utils';


class SliderHumanneedhelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHumanneedhelp: [],
        }
    }

    async componentDidMount() {
        this.props.getAllHumanneedhelpStart();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (prevProps.allHumanneedhelp !== this.props.allHumanneedhelp) {
            let listHumanneedhelp = this.props.allHumanneedhelp;
            this.setState({
                dataHumanneedhelp: listHumanneedhelp.data,

            })
        }
    }

    handleDetailHumanneedhelp = (humanneedhelp) => {
        if (this.props.history) {
            this.props.history.push(`/detailhumanneedhelp/${humanneedhelp.id}`)
        }
    }

    render() {
        let { dataHumanneedhelp } = this.state;
        let { language } = this.props;
        console.log('check render dataHumanneedhelp :', dataHumanneedhelp)

        return (
            <div className="section-share section-sliderhumanneedhelp">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section"><FormattedMessage id="homepage.humanneedhelp" /></span>
                        <button className="btn-section">
                            <Link to={`/humanneedhelp`}><FormattedMessage id="homepage.more-infor" /></Link>
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {dataHumanneedhelp && dataHumanneedhelp.length > 0 &&
                                dataHumanneedhelp.map((item, index) => {
                                    let nameVi = `${item.stageTypeData.valueVi}`;
                                    let nameEn = `${item.stageTypeData.valueEn}`;
                                    return (
                                        <div className="section-customize sliderhumanneedhelp-child" key={index}
                                            onClick={() => this.handleDetailHumanneedhelp(item)}
                                        >
                                            <div className="section-content-name">{item.name}</div>
                                            <div className="bg-image section-medical-facility"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className="section-content-location">- <FormattedMessage id="homepage.location" />: {item.location}</div>
                                            <div className="section-content-purpose">- <FormattedMessage id="homepage.purpose" />: {item.purpose}</div>
                                            <div className="section-content-begin">- <FormattedMessage id="homepage.begin" />: {item.begin}</div>
                                            <div className="section-content-cost">- <FormattedMessage id="homepage.cost" />: {item.cost}</div>
                                            <div className="section-content-stage">- <FormattedMessage id="homepage.stage" />: {language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        allHumanneedhelp: state.admin.humanneedhelp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllHumanneedhelpStart: () => dispatch(actions.fetchAllHumanneedhelpStart()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SliderHumanneedhelp));
