import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SliderNewsEvents.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { withRouter } from 'react-router';
import * as actions from "../../../store/actions";
import { Link } from 'react-router-dom';




class SliderNewsEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSliderNewsEvents: {}
        }
    }

    async componentDidMount() {
        this.props.getAllNewseventsStart()

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (prevProps.allNewsevents !== this.props.allNewsevents) {
            let dataSliderNewsEvents = this.props.allNewsevents;
            this.setState({
                dataNewsevents: dataSliderNewsEvents.data,

            })
        }
    }

    handleNewsDetail = (newsevent) => {
        if (this.props.history) {
            this.props.history.push(`/detail-news/${newsevent.id}`)
        }
    }

    render() {
        let { dataNewsevents } = this.state;

        return (
            <div className="section-share section-slidernewsevents">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                            <FormattedMessage id="homepage.newsevents" />
                        </span>
                        <button className="btn-section">
                            <Link to={`/newsevents`}><FormattedMessage id="homepage.more-infor" /></Link>
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {dataNewsevents && dataNewsevents.length > 0 && dataNewsevents.map((item, index) => {
                                return (
                                    <div className="section-customize slidernewsevents-child" key={index}
                                        onClick={() => this.handleNewsDetail(item)}
                                    >
                                        <div className="section-content-name">{item.title}</div>
                                        <div className="bg-image section-slidernewsevents"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                        <div className="section-content-abstract">{item.abstract}</div>
                                    </div>
                                )
                            })}

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
        allNewsevents: state.admin.newsevents,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllNewseventsStart: () => dispatch(actions.fetchAllNewseventsStart()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SliderNewsEvents));
