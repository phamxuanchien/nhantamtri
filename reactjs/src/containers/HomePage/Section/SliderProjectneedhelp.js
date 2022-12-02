import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SliderProjectneedhelp.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { withRouter } from 'react-router';
import * as actions from "../../../store/actions";
import { Link } from 'react-router-dom';
import { LANGUAGES } from '../../../utils';


class SliderProjectneedhelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProjectneedhelp: [],
        }
    }

    async componentDidMount() {
        this.props.getAllProjectneedhelpStart();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (prevProps.allProjectneedhelp !== this.props.allProjectneedhelp) {
            let listProjectneedhelp = this.props.allProjectneedhelp;
            this.setState({
                dataProjectneedhelp: listProjectneedhelp.data,

            })
        }
    }

    handleDetailProjectNeedHelp = (projectneedhelp) => {
        if (this.props.history) {
            this.props.history.push(`/detailprojectneedhelp/${projectneedhelp.id}`)
        }
    }

    render() {
        let { dataProjectneedhelp } = this.state;
        let { language } = this.props;
        return (
            <div className="section-share section-sliderprojectneedhelp">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section"><FormattedMessage id="homepage.projectneedhelp" /></span>
                        <button className="btn-section">
                            <Link to={`/projectneedhelp`}><FormattedMessage id="homepage.more-infor" /></Link>
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {dataProjectneedhelp && dataProjectneedhelp.length > 0 && dataProjectneedhelp.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.stageData.valueVi}`;
                                let nameEn = `${item.stageData.valueEn}}`;
                                return (
                                    <div className="section-customize sliderprojectneedhelp-child" key={index}
                                        onClick={() => this.handleDetailProjectNeedHelp(item)}
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
        allProjectneedhelp: state.admin.projectneedhelp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProjectneedhelpStart: () => dispatch(actions.fetchAllProjectneedhelpStart()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SliderProjectneedhelp));
