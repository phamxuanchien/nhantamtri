import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './NewsEvents.scss';
import HomeHeader from '../HomePage/HomeHeader';
import NewsDetail from './DetailNews';
import { Link } from 'react-router-dom';
import * as actions from "../../store/actions";
import HomeFooter from '../HomePage/HomeFooter';
import ListMenuImage from '../HomePage/Section/ListMenuImage';

class NewsEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newseventsRedux: [],

        }
    }
    async componentDidMount() {
        this.props.fetchNewseventsRedux();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.listNewsevents !== this.props.listNewsevents) {
            this.setState({
                newseventsRedux: this.props.listNewsevents

            })
        }

    }

    handleNewsDetail = (newsevent) => {
        if (this.props.history) {
            this.props.history.push(`/detail-news/${newsevent.id}`)
        }
    }

    render() {
        let language = this.props.language;
        let newsevents = this.state.newseventsRedux;
        return (
            <div className="newsevents-container">
                <HomeHeader />
                <div className="newsevents-body">
                    <div className="newsevents-title">
                        <span className=" span-title">Tin tức & sự kiện</span>
                    </div>
                    <div className="newsevents-content">
                        <div className="newsevents-left">
                            {newsevents.data && newsevents.data.length > 0 &&
                                newsevents.data.map((item, index) => {
                                    return (
                                        <div className="newsevents-element" key={index} onClick={() => this.handleNewsDetail(item)}>
                                            <div className="newsevents-element-left">
                                                <div className="newsevents-element-title">
                                                    {item.title}
                                                    <div className="span-element">
                                                        <span>{item.updatedAt}</span><span>Không có phản hồi</span>
                                                    </div>

                                                </div>
                                                <img className="newsevents-image" style={{ backgroundImage: `url(${item.image})` }} />
                                            </div>
                                            <div className="newsevents-element-right">
                                                <div className="newsevents-element-title">
                                                    {item.title}
                                                    <div className="span-element">
                                                        <span>{item.updatedAt}</span><span>Không có phản hồi</span>
                                                    </div>

                                                </div>
                                                <div className="newsevents-element-content">
                                                    <p>{item.abstract}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                        <div className="newsevents-right">
                            <div className="newsevents-right-element">
                                <div className="newsevents-right-title">Danh mục Tin tức nổi bật</div>
                                <div className="newsevents-right-content">

                                </div>
                            </div>
                            <div className="newsevents-right-element">
                                <div className="newsevents-right-title">Danh mục Tin tức & Sự kiện</div>
                                <div className="newsevents-right-content">

                                </div>
                            </div>
                            <div className="newsevents-right-down">
                                <ListMenuImage />
                            </div>
                        </div>
                    </div>
                </div>
                <HomeFooter />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listNewsevents: state.admin.newsevents,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNewseventsRedux: () => dispatch(actions.fetchAllNewseventsStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsEvents);
