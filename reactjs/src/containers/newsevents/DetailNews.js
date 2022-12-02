import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DetailNews.scss';
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/HomeFooter';
import { getAllDetailNewseventsById } from '../../services/userService';
import _ from 'lodash';
import ListMenuImage from '../HomePage/Section/ListMenuImage';
import ListNews from '../HomePage/Section/ListNews';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";


class DetailNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDetailNews: {},
            currentNewsId: -1,
            detaiListNews: []
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentNewsId: id
            })
            let res = await getAllDetailNewseventsById({
                id: id,
            });
            if (res && res.errCode === 0) {
                this.setState({
                    dataDetailNews: res.data,
                    action: CRUD_ACTIONS.OFF,
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
    }
    handleListDetailNews = (dataDetail) => {
        this.setState({
            detaiListNews: dataDetail,
            action: CRUD_ACTIONS.ON,
        })
    }

    render() {
        let { dataDetailNews } = this.state;
        let { language } = this.props;
        let { detaiListNews } = this.state;
        let detailData = '';
        if (this.state.action === CRUD_ACTIONS.OFF) {
            detailData = dataDetailNews
        }
        if (this.state.action === CRUD_ACTIONS.ON) {
            detailData = detaiListNews;
        }
        console.log('detailData', detailData)
        return (
            <div className="detailnews-container">
                <HomeHeader />
                <div className="detailnews-body">
                    <div className="detailnews-content">
                        <div className="detailnews-left">
                            {detailData && !_.isEmpty(detailData)
                                &&
                                <div className="detailnews-element">
                                    <div className="detailnews-element-title">
                                        {detailData.title}</div>
                                    <div className="detailnews-element-abstract">{detailData.abstract}</div>
                                    <div className="span-element">
                                        <span>{detailData.createdAt}</span><span>Không có phản hồi</span>
                                    </div>


                                    <img className="detailnews-image" style={{ backgroundImage: `url(${detailData.image})` }} />
                                    <div className="detailnews-element-content" dangerouslySetInnerHTML={{ __html: detailData.descriptionHTML }}>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="detailnews-right">
                            <div className="detailnews-right-up">
                                <span className="right-up-title">Danh mục các hoàn cảnh cần giúp đỡ</span>
                                <div className="right-up-content"><ListNews listDetail={(dataDetail) => this.handleListDetailNews(dataDetail)} /></div>
                            </div>
                            <div className="detailnews-right-down">
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailNews);
