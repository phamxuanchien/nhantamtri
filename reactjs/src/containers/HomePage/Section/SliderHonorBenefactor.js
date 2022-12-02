import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import { withRouter } from 'react-router';
import './SliderHonorBenefactor.scss';
import { Link } from 'react-router-dom';

class SliderHonorBenefactor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrBenefactor: [],
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topBenefactorRedux !== this.props.topBenefactorRedux) {
            this.setState({
                arrBenefactor: this.props.topBenefactorRedux
            })
        }
    }

    componentDidMount() {
        this.props.getTopBenefactor();

    }

    handleDetailHonorBenefactors = (user) => {
        if (this.props.history) {
            this.props.history.push(`/detailhonorbenefactors/${user.id}`)
        }
    }
    render() {
        let arrBenefactor = this.state.arrBenefactor;
        let { language } = this.props;
        // arrManagers = arrManagers.concat(arrManagers).concat(arrManagers)
        return (
            <div className="section-share section-sliderhonorbenefactor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section"><FormattedMessage id="homepage.honor-benefactor" /></span>
                        <button className="btn-section">
                            <Link to={`/honorbenefactors`}><FormattedMessage id="homepage.more-infor" /></Link>
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>

                            {arrBenefactor && arrBenefactor.length > 0 && arrBenefactor.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.lastName} ${item.firstName}`;
                                let nameEn = `${item.firstName} ${item.lastName}`;
                                return (
                                    <div className="section-customize" key={index} onClick={() => this.handleDetailHonorBenefactors(item)}>
                                        <div className="customize-border">
                                            <div className="outer-bg">
                                                <div className="honor-title"></div>
                                                <div className="bg-image sliderhonorbenefactor-child"
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                />
                                            </div>
                                            <div className="position text-center">
                                                <div>
                                                    <div className="honor-nickname">Mạnh thường quân</div>
                                                    <div className="honor-name">{language === LANGUAGES.VI ? nameVi : nameEn}</div>
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
                                        </div>
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
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topBenefactorRedux: state.admin.topBenefactors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTopBenefactor: () => dispatch(actions.fetchTopBenefactor())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SliderHonorBenefactor));
