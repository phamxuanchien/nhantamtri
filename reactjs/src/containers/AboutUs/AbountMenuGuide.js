import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './AbountMenuGuide.scss';
import * as actions from '../../store/actions';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";
import { Link } from 'react-router-dom';


class AbountMenuGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSubmenuRedux: ''
        }
    }
    async componentDidMount() {
        this.props.getAllSubmenuguideStart();

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
        let allSubmenuGuide = this.state.allSubmenus;
        let language = this.props.language;

        // let nameVi = '';
        // let nameEn = '';
        // if (allSubmenus && allSubmenus.groupmenu === 'GROUP2') {
        //     nameVi = `${allSubmenus.groupmenuTypeData.valueVi}`;
        //     nameEn = `${allSubmenus.groupmenuTypeData.valueEn}`;
        // }
        return (
            <div className="abount-menuguide-container">
                <div className="abount-menuguide-body">
                    <div className="abount-menuguide-title">
                        <span className="span-right-title">
                            {/* {language === LANGUAGES.VI ? nameVi : nameEn} */}
                            hướng dẫn
                        </span>
                    </div>
                    <div className="abount-menuguide-element">
                        {allSubmenuGuide && allSubmenuGuide.length > 0
                            && allSubmenuGuide.map((item, index) => {

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
        allSubmenus: state.admin.allSubmenuGuide,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllSubmenuguideStart: () => dispatch(actions.fetchAllSubmenuguideStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbountMenuGuide);
