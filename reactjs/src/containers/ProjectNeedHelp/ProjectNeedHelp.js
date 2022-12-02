import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ProjectNeedHelp.scss';
import HomeHeader from '../HomePage/HomeHeader';
// import { getAllDepartment } from '../../services/userService';
import { withRouter } from 'react-router';
import * as actions from "../../store/actions";
import HomeFooter from '../HomePage/HomeFooter';
import ListMenuImage from '../HomePage/Section/ListMenuImage';

class ProjectNeedHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dataDepartments: []
            projectneedhelpRedux: [],
        }
    }
    async componentDidMount() {
        // let res = await getAllDepartment(); //gọi API trực tiếp
        // if (res && res.errCode === 0) {
        //     this.setState({
        //         dataDepartments: res.data ? res.data : []
        //     })
        // }
        this.props.fetchProjectneedhelpRedux();  //gọi redux
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.listProjectneedhelp !== this.props.listProjectneedhelp) {
            this.setState({
                projectneedhelpRedux: this.props.listProjectneedhelp.data

            })
        }

    }

    handleDetailProjectNeedHelp = (projectneedhelp) => {
        if (this.props.history) {
            this.props.history.push(`/detailprojectneedhelp/${projectneedhelp.id}`)
        }
    }

    render() {
        let dataProjectneedhelp = this.state.projectneedhelpRedux;

        return (
            <div className="project-container">
                <HomeHeader />
                <div className="body col-12">
                    <div className="title">
                        <span className="title-span">Các dự án cần được giúp đỡ</span>
                    </div>
                    <div className="project-content">
                        <div className="content-left col-lg-9 col-md-12">
                            <div className="card-deck">
                                {dataProjectneedhelp && dataProjectneedhelp.length > 0 &&
                                    dataProjectneedhelp.map((item, index) => {
                                        return (

                                            <div className="card" key={index}
                                                onClick={() => this.handleDetailProjectNeedHelp(item)}>
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
        listProjectneedhelp: state.admin.projectneedhelp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProjectneedhelpRedux: () => dispatch(actions.fetchAllProjectneedhelpStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectNeedHelp);
