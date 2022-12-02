import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './Detailhumanneedhelp.scss';
import HomeHeader from '../HomePage/HomeHeader';
import { getAllDetailHumanneedhelpById } from '../../services/userService';
import _ from 'lodash';
import ListMenuImage from '../HomePage/Section/ListMenuImage';
import HomeFooter from '../HomePage/HomeFooter';
import ListHumanneedhelp from '../HomePage/Section/ListHumanneedhelp';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";

class Detailhumanneedhelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDetailhumanneedhelp: {},
            currentHumanneedhelpId: -1,
            detaiListHumanneedhelp: []
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentHumanneedhelpId: id
            })
            let res = await getAllDetailHumanneedhelpById({
                id: id,
            });
            if (res && res.errCode === 0) {
                this.setState({
                    dataDetailhumanneedhelp: res.data,
                    action: CRUD_ACTIONS.OFF,
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
    }
    handleListDetailHumanneedhelp = (dataDetail) => {
        this.setState({
            detaiListHumanneedhelp: dataDetail,
            action: CRUD_ACTIONS.ON,
        })
    }

    render() {
        let { dataDetailhumanneedhelp } = this.state;
        let { language } = this.props;
        let { detaiListHumanneedhelp } = this.state;
        let detailData = '';
        if (this.state.action === CRUD_ACTIONS.OFF) {
            detailData = dataDetailhumanneedhelp
        }
        if (this.state.action === CRUD_ACTIONS.ON) {
            detailData = detaiListHumanneedhelp;
        }
        console.log('detailData', detailData)
        return (
            <div className="detailhumanneedhelp-container">
                <HomeHeader />
                <div className="detailhumanneedhelp-body col-12">

                    <div className="detailhumanneedhelp-left col-9">
                        {detailData && !_.isEmpty(detailData)
                            &&
                            <>
                                <div className="detailhumanneedhelp-title"><span className="span-title">Hoàn cảnh:</span><p>{detailData.name}</p></div>
                                <span className="detailhumanneedhelp-address">Địa chỉ: {detailData.address}</span>
                                <div className="detailhumanneedhelp-image" style={{ backgroundImage: `url(${detailData.image})` }} />
                                <div className="detailhumanneedhelp-content">
                                    <div dangerouslySetInnerHTML={{ __html: detailData.descriptionHTML }}></div>
                                </div>
                                <div className="detailhumanneedhelp-time">
                                    <p className="card-text"><small className="text-muted">Được đăng bởi Phạm Kiến Quốc vào lúc: {detailData.createdAt}</small></p>
                                </div>
                            </>
                        }
                    </div>

                    <div className="detailhumanneedhelp-right col-3">
                        <div className="detailhuman-right-up">
                            <span className="right-up-title">Danh mục các hoàn cảnh cần giúp đỡ</span>
                            <div className="right-up-content">
                                <ListHumanneedhelp listDetail={(dataDetail) => this.handleListDetailHumanneedhelp(dataDetail)} />
                            </div>
                        </div>
                        <div className="detailhuman-right-down">
                            <ListMenuImage />
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

export default connect(mapStateToProps, mapDispatchToProps)(Detailhumanneedhelp);
