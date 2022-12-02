import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './Humanneedhelp.scss';
import HomeHeader from '../HomePage/HomeHeader';
import { withRouter } from 'react-router';
import * as actions from "../../store/actions";
import HomeFooter from '../HomePage/HomeFooter';
import ListMenuImage from '../HomePage/Section/ListMenuImage';

class Humanneedhelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            humanneedhelpRedux: [],
        }
    }
    async componentDidMount() {
        this.props.fetchHumanneedhelpRedux();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (prevProps.listHumanneedhelp !== this.props.listHumanneedhelp) {
            this.setState({
                humanneedhelpRedux: this.props.listHumanneedhelp.data
            })
        }
    }
    handleDetailHumanneedhelp = (humanneedhelp) => {
        if (this.props.history) {
            this.props.history.push(`/detailhumanneedhelp/${humanneedhelp.id}`)
        }
    }

    render() {
        let dataHumanneedhelp = this.state.humanneedhelpRedux;
        return (
            <div className="humanneedhelp-container">
                <HomeHeader />
                <div className="body col-12">
                    <div className="title">
                        <span className="title-span">Các hoàn cảnh cần giúp đỡ</span>
                    </div>
                    <div className="human-content">
                        <div className="content-left col-lg-9 col-md-12">
                            <div className="card-deck">
                                {dataHumanneedhelp && dataHumanneedhelp.length > 0 &&
                                    dataHumanneedhelp.map((item, index) => {
                                        return (

                                            <div className="card" key={index}
                                                onClick={() => this.handleDetailHumanneedhelp(item)}>
                                                <h4 className="card-title">{item.name}</h4>
                                                <p className="card-location">{item.location}</p>
                                                <img className="card-img-top" style={{ backgroundImage: `url(${item.image})` }} />
                                                <div className="card-body">
                                                    <p className="card-text">{item.purpose}</p>
                                                    <p className="card-text">{item.cost}</p>
                                                    <p className="card-text">{item.stage}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">Last updated {item.updatedAt} ago</small>
                                                </div>
                                            </div>

                                        )
                                    })}
                            </div>
                        </div>
                        <div className="content-right col-lg-3 col-md-0">
                            <div className="content-right-up">
                                <ListMenuImage />
                            </div>
                            <div className="content-right-down">cần giúp đỡ ngay</div>
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
        listHumanneedhelp: state.admin.humanneedhelp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHumanneedhelpRedux: () => dispatch(actions.fetchAllHumanneedhelpStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Humanneedhelp);
