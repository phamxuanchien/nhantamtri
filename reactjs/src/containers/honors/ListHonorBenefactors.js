import React, { Component } from 'react';
import { connect } from "react-redux";
import './ListHonorBenefactors.scss';
import { LANGUAGES } from '../../utils';
import * as actions from '../../store/actions';


class ListHonorBenefactors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrBenefactor: [],
            dataDetailBenefactor: []
        }
    }
    async componentDidMount() {
        this.props.getTopBenefactor();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.topBenefactorRedux !== this.props.topBenefactorRedux) {
            this.setState({
                arrBenefactor: this.props.topBenefactorRedux
            })
        }
    }

    listDetail = (arrBenefactor) => {
        this.setState({
            arrBenefactor: this.props.arrBenefactor.id
        })
    }

    render() {
        let arrBenefactor = this.state.arrBenefactor;
        let { language } = this.props;
        return (
            <>
                {arrBenefactor && arrBenefactor.length > 0 && arrBenefactor.map((item, index) => {
                    let imageBase64 = '';
                    if (item.image) {
                        imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
                    }
                    let nameVi = `${item.lastName} ${item.firstName}`;
                    let nameEn = `${item.firstName} ${item.lastName}`;
                    return (
                        <div className="list-container" key={index} onClick={(dataDetail) => this.props.listDetail(item)}>
                            <button type="button" className="btn btn-link"><i className="fas fa-angle-right"></i><span className="span-listhonor">{language === LANGUAGES.VI ? nameVi : nameEn}</span></button>
                        </div>
                    )
                })}
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListHonorBenefactors);
