import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DetailHonorBenefactors.scss';
import HomeHeader from '../HomePage/HomeHeader';
import { getDetailInforBenefactor } from '../../services/userService';
import ListHonorBenefactors from './ListHonorBenefactors';
import ManagerSchedule from '../../containers/Patient/Manager/ManagerSchedule';
import ManagerExtraInfor from '../../containers/Patient/Manager/ManagerSchedule';
import HomeFooter from '../HomePage/HomeFooter';
import ListMenuImage from '../HomePage/Section/ListMenuImage';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";

class DetailHonorBenefactors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailBenefactor: {},
            currentBenefactorId: -1,
            detaiListBenefactor: []
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentBenefactorId: id
            })
            let res = await getDetailInforBenefactor(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailBenefactor: res.data,
                    action: CRUD_ACTIONS.OFF,
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
    }
    handleListDetailBenefactor = (dataDetail) => {
        this.setState({
            detaiListBenefactor: dataDetail,
            action: CRUD_ACTIONS.ON,
        })
    }
    //chưa hiển thị được dữ liệu markdow
    render() {
        let { language } = this.props;
        let { detailBenefactor } = this.state;
        let { detaiListBenefactor } = this.state;
        let detailData = '';
        if (this.state.action === CRUD_ACTIONS.OFF) {
            detailData = detailBenefactor
        }
        if (this.state.action === CRUD_ACTIONS.ON) {
            detailData = detaiListBenefactor;
        }
        let imageBase64 = '';
        if (detailData.image) {
            imageBase64 = Buffer.from(detailData.image, 'base64').toString('binary');
        }
        console.log('detailData', detailData)
        return (
            <div className="detailhonor-container">
                <HomeHeader />
                <div className="detailhonor-body col-12">
                    <div className="detailhonor-left col-9">
                        <div className="detailhonor-title">
                            <div className="detailhonor-image col-lg-4 col-md-12" style={{ backgroundImage: `url(${this.state.action === CRUD_ACTIONS.ON ? imageBase64 : detailData.image})` }}></div>
                            <div className="detailhonor-info col-lg-8 col-md-12">
                                <div className="detailhonor-info-name">
                                    <span className="honor-element1"><FormattedMessage id="homepage.benefactor.fullname" />:</span>
                                    <span className="fullname">{detailData.firstName} {detailData.lastName}</span>
                                </div>
                                <div className="detailhonor-info-address">
                                    <span className="honor-element1"><FormattedMessage id="homepage.benefactor.address" />:</span>
                                    <span>{detailData.address}</span>
                                </div>
                                <div className="detailhonor-info-phone">
                                    <span className="honor-element1"><FormattedMessage id="homepage.benefactor.phone-number" />:</span>
                                    <span>{detailData.phonenumber}</span>
                                </div>
                                <div className="honor-sum-number">
                                    <span className="honor-element1"><FormattedMessage id="homepage.donated" />:</span>
                                    <span className="honor-element2">5000</span>
                                    <span className="honor-element3"><FormattedMessage id="homepage.turns" /></span>
                                </div>
                                <div className="honor-sum-money">
                                    <span className="honor-element1"><FormattedMessage id="homepage.total-money" />:</span>
                                    <span className="honor-element2">10.000.000.000</span>
                                    <span className="honor-element3"><FormattedMessage id="homepage.unit" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="detailhonor-content">
                            {detailData.Markdown && detailData.Markdown.description
                                && <span>
                                    {detailData.Markdown.description}
                                </span>}
                        </div>
                        <div className="detailhonor-inforbenefactor">
                            {detailData && detailData.Markdown && detailData.Markdown.contentHTML &&
                                <div dangerouslySetInnerHTML={{ __html: detailData.Markdown.contentHTML }}>

                                </div>
                            }
                        </div>
                        <div className="list-honor-mobile">
                            <span className="span-title"><FormattedMessage id="homepage.benefactor.list-benefactor" /></span>
                            <ListHonorBenefactors listDetail={(dataDetail) => this.handleListDetailBenefactor(dataDetail)} />
                        </div>
                        <div className="schedule-manager">
                            {/* <div className="content-left">
                         <ManagerSchedule
                             managerIdFromParent={this.state.currentManagerId}
                         />
                     </div>
                     <div className="content-right">
                         <ManagerExtraInfor managerIdFromParent={this.state.currentManagerId} />
                     </div> */}
                        </div>

                    </div>
                    <div className="detailhonor-right col-3">
                        <div className="list-title"><span className="span-title"><FormattedMessage id="homepage.benefactor.list-benefactor" /></span>
                            <div className="list-honor">
                                <ListHonorBenefactors listDetail={(dataDetail) => this.handleListDetailBenefactor(dataDetail)} />
                            </div>
                        </div>
                        <div className="list-image">
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailHonorBenefactors);
