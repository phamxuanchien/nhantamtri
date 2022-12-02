import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './AbountMenuProgram.scss';
import * as actions from '../../store/actions';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";
import { getAllSubmenuprogram } from '../../services/userService';
import { Link } from 'react-router-dom';


class AbountMenuProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSubmenuRedux: ''
        }
    }
    async componentDidMount() {
        this.props.getAllSubmenuprogramStart();
        // let res = await getAllSubmenuprogram();

        // if (res && res.errCode === 0) {
        //     this.setState({
        //         submenuProgram: res.data,
        //     })
        // }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.allSubmenus !== this.props.allSubmenus) {
            let allSubmenuRedux = this.props.allSubmenus;
            this.setState({
                allSubmenus: allSubmenuRedux.data,
            })
        }
    }

    render() {
        let allSubmenuProgram = this.state.allSubmenus;
        let language = this.props.language;

        // let nameVi = '';
        // let nameEn = '';
        // if (allSubmenus && allSubmenus.groupmenu === 'GROUP2') {
        //     nameVi = `${allSubmenus.groupmenuTypeData.valueVi}`;
        //     nameEn = `${allSubmenus.groupmenuTypeData.valueEn}`;
        // }
        return (
            <div className="abount-menuprogram-container">
                <div className="abount-menuprogram-body">
                    <div className="abount-menuprogram-title">
                        <span className="span-right-title">
                            {/* {language === LANGUAGES.VI ? nameVi : nameEn} */}
                            chương trình hành động
                        </span>
                    </div>
                    <div className="abount-menuprogram-element">
                        {allSubmenuProgram && allSubmenuProgram.length > 0
                            && allSubmenuProgram.map((item, index) => {

                                return (
                                    <div className="right-block-content" key={index}>
                                        <i className="fas fa-angle-right"></i>
                                        <span className="span-right-content"
                                        >
                                            <Link to={`/aboutus`}>{item.name}</Link>

                                            {/* {item.groupmenu === 'GROUP2' ? item.name : ''} */}

                                        </span>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allSubmenus: state.admin.allSubmenuProgram,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllSubmenuprogramStart: () => dispatch(actions.fetchAllSubmenuprogramStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbountMenuProgram);
