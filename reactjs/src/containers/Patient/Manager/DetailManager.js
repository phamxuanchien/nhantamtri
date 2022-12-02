import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailManager.scss'
import moment from 'moment';
import { getDetailInforManager } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import ManagerSchedule from './ManagerSchedule';
import ManagerExtraInfor from './ManagerExtraInfor';
import LikeAndShare from '../SocialPlugin/LikeAndShare';
import Comment from '../SocialPlugin/Comment';

class DetailManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailManager: {},
            currentManagerId: -1,
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentManagerId: id
            })
            let res = await getDetailInforManager(id);
            console.log('hoidanit channel check res manager: ', res)
            if (res && res.errCode === 0) {
                this.setState({
                    detailManager: res.data,

                })
            }
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        console.log('hoidanit channel state manager: ', this.state)
        let { language } = this.props;
        let { detailManager } = this.state;
        let nameVi = '', nameEn = '';
        if (detailManager && detailManager.positionData) {
            nameVi = `${detailManager.positionData.valueVi}, ${detailManager.lastName} ${detailManager.firstName}`;
            nameEn = `${detailManager.positionData.valueEn}, ${detailManager.firstName} ${detailManager.lastName}`;
        }
        //đang sử dụng chatbot nhà hàng sau này thay bằng chatbot đặt lịch khám bệnh
        let currentURL = +process.env.REACT_APP_IS_LOCALHOST === 1 ?
            "https://restaurantchatbottv.herokuapp.com/" : window.location.href;
        return (
            <>
                <HomeHeader isShowBanner={false} />
                <div className="manager-detail-container">
                    <div className="intro-manager">
                        <div className="content-left"
                            style={{ backgroundImage: `url(${detailManager.image})` }}>

                        </div>
                        <div className="content-right">
                            <div className="up">
                                {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            <div className="down">
                                {detailManager.Markdown && detailManager.Markdown.description
                                    && <span>
                                        {detailManager.Markdown.description}
                                    </span>}
                                <div className="like-share-plugin">
                                    <LikeAndShare
                                        dataHref={currentURL}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-manager">
                        <div className="content-left">
                            <ManagerSchedule
                                managerIdFromParent={this.state.currentManagerId}
                            />
                        </div>
                        <div className="content-right">
                            <ManagerExtraInfor managerIdFromParent={this.state.currentManagerId} />
                        </div>
                    </div>
                    <div className="detail-infor-manager">
                        {detailManager && detailManager.Markdown && detailManager.Markdown.contentHTML &&
                            <div dangerouslySetInnerHTML={{ __html: detailManager.Markdown.contentHTML }}>

                            </div>
                        }
                    </div>
                    <div className="comment-manager">
                        <Comment
                            dataHref={currentURL}
                            width={"100%"}
                        />
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailManager);
