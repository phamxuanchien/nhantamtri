import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SliderYoutube.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { withRouter } from 'react-router';
import * as actions from "../../../store/actions";
import { Link } from 'react-router-dom';




class SliderYoutube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSliderYoutube: {}
        }
    }

    async componentDidMount() {
        this.props.getAllNewseventsStart()

    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (prevProps.allNewsevents !== this.props.allNewsevents) {
            let dataSliderYoutube = this.props.allNewsevents;
            this.setState({
                dataNewsevents: dataSliderYoutube.data,

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
            <div className="section-share section-slideryoutube">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">
                            <FormattedMessage id="homepage.action-youtube" />
                        </span>
                        <button className="btn-section">
                            <Link to={`/newsevents`}><FormattedMessage id="homepage.more-infor" /></Link>
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {dataNewsevents && dataNewsevents.length > 0 && dataNewsevents.map((item, index) => {
                                return (
                                    <div className="section-customize slideryoutube-child" key={index}
                                        onClick={() => this.handleNewsDetail(item)}
                                    >
                                        <div className="section-content-name">{item.title}</div>
                                        <div className="bg-image section-slideryoutube">
                                            <iframe width="100%" height="100%"
                                                src="https://www.youtube.com/embed/Hb4qMTCn8HM"
                                            // title="#6 Project Structure - Giải Thích Cấu Trúc Dự Án React | Khóa Học React ULTIMATE"
                                            // frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            // allowfullscreen
                                            >
                                            </iframe>
                                        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SliderYoutube));
