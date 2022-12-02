import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DetailProjectNeedHelp.scss';
import HomeHeader from '../HomePage/HomeHeader';
import { getAllDetailProjectneedhelpById } from '../../services/userService';
import _ from 'lodash';
import ListMenuImage from '../HomePage/Section/ListMenuImage';
import ListProjectneedhelp from '../HomePage/Section/ListProjectneedhelp';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";

class DetailProjectNeedHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDetailProjectNeedHelp: {},
            currentProjectneedhelpId: -1,
            detaiListProjectneedhelp: []
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentProjectneedhelpId: id
            })
            let res = await getAllDetailProjectneedhelpById({
                id: id,
            });
            if (res && res.errCode === 0) {
                this.setState({
                    dataDetailProjectNeedHelp: res.data,
                    action: CRUD_ACTIONS.OFF,
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
    }
    handleListDetailProjectneedhelp = (dataDetail) => {
        this.setState({
            detaiListProjectneedhelp: dataDetail,
            action: CRUD_ACTIONS.ON,
        })
    }

    render() {
        let { dataDetailProjectNeedHelp } = this.state;
        let { language } = this.props;
        let { detaiListProjectneedhelp } = this.state;
        let detailData = '';
        if (this.state.action === CRUD_ACTIONS.OFF) {
            detailData = dataDetailProjectNeedHelp
        }
        if (this.state.action === CRUD_ACTIONS.ON) {
            detailData = detaiListProjectneedhelp;
        }
        console.log('detailData', detailData)
        return (
            <div className="detailproject-container">
                <HomeHeader />
                <div className="detailproject-body col-12">

                    <div className="detailproject-left col-9">
                        {detailData && !_.isEmpty(detailData)
                            &&
                            <>
                                <div className="detailproject-title"><span className="span-title">Dự án:</span><p>{detailData.name}</p></div>
                                <span className="detailproject-address">Địa chỉ: {detailData.address}</span>
                                <div className="detailproject-image" style={{ backgroundImage: `url(${detailData.image})` }} />
                                <div className="detailproject-content">
                                    <div dangerouslySetInnerHTML={{ __html: detailData.descriptionHTML }}></div>
                                </div>
                                <div className="detailproject-time">
                                    <p className="card-text"><small className="text-muted">Được đăng bởi Phạm Kiến Quốc vào lúc: {detailData.createdAt}</small></p>
                                </div>
                            </>
                        }
                    </div>

                    <div className="detailproject-right col-3">
                        <div className="detailproject-right-up">
                            <span className="right-up-title">Danh mục các dự án cần giúp đỡ</span>
                            <div className="right-up-content">
                                <ListProjectneedhelp listDetail={(dataDetail) => this.handleListDetailProjectneedhelp(dataDetail)} />
                            </div>
                        </div>
                        <div className="detailproject-right-down">
                            <ListMenuImage />
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProjectNeedHelp);
