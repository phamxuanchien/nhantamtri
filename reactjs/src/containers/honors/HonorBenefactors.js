import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './HonorBenefactors.scss';
import HomeHeader from '../HomePage/HomeHeader';
import * as actions from "../../store/actions";
import { LANGUAGES } from '../../utils';
import HomeFooter from '../HomePage/HomeFooter';
import ListMenuImage from '../HomePage/Section/ListMenuImage';
import TableHonorBenefactors from './TableHonorBenefactors';

class HonorBenefactors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrBenefactor: [],
        }
    }
    async componentDidMount() {
        this.props.getTopBenefactor();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.topBenefactorRedux !== this.props.topBenefactorRedux) {
            this.setState({
                arrBenefactor: this.props.topBenefactorRedux
            })
        }
    }
    handleDetailHonorBenefactors = (user) => {
        if (this.props.history) {
            this.props.history.push(`/detailhonorbenefactors/${user.id}`)
        }
    }

    render() {
        let arrBenefactor = this.state.arrBenefactor;
        let { language } = this.props;

        console.log('check nameVi:', arrBenefactor)
        return (
            <div className="honor-container">
                <HomeHeader />
                <div className="honor-body col-12">
                    <div className="honor-title">
                        <span className="span-title">Vinh danh những tấm lòng vàng</span>
                    </div>
                    <div className="honor-content">
                        <div className="honor-content-left col-lg-9 col-md-12">
                            <div className="honor-content-left-up">
                                {arrBenefactor && arrBenefactor.length > 0 && arrBenefactor.map((item, index) => {
                                    let nameVi = `${item.lastName} ${item.firstName}`;
                                    let nameEn = `${item.firstName} ${item.lastName}`;
                                    return (
                                        <button type="button" className="btn btn-info" onClick={() => this.handleDetailHonorBenefactors(item)} key={index}>
                                            <h5 className="btn-title">{language === LANGUAGES.VI ? nameVi : nameEn}</h5>
                                            <div className="btn-content"><p className="content-title">Nhà hảo tâm đã quyên góp:</p>
                                                <div className="content-body">
                                                    <span className="content-total">5000 lần</span>
                                                    <span className="content-money">Với tổng số tiền: 1000 tỷ</span>
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                            <div className="honor-content-left-down">
                                <div className="element-title"><span className="span-title">Danh sách mạnh thường quân</span></div>
                                <div className="element-content"><TableHonorBenefactors /></div>
                            </div>
                        </div>
                        <div className="honor-content-right col-lg-3 col-md-0">
                            <div className="honor-content-right-up">
                                <ListMenuImage />
                            </div>
                            <div className="honor-content-right-down">
                                <div className="element-up"><span className="span-element-up">Danh sách dự án cần giúp đỡ</span>
                                    <div className="element-list">
                                        <span className="span-list">List</span></div>
                                </div>
                                <div className="element-down"><span className="span-element-up">Danh sách hoàn cảnh cần giúp đỡ </span>
                                    <div className="element-list">
                                        <span className="span-list">List</span></div>
                                </div>
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
        topBenefactorRedux: state.admin.topBenefactors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTopBenefactor: () => dispatch(actions.fetchTopBenefactor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HonorBenefactors);
