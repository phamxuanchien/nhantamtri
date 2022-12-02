import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './AbountMenuAboutus.scss';
import * as actions from '../../store/actions';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";
import { Link } from 'react-router-dom';


class AbountMenuAboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSubmenuRedux: ''
        }
    }
    async componentDidMount() {
        this.props.getAllSubmenuaboutusStart();

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
        let allSubmenuAboutus = this.state.allSubmenus;
        let language = this.props.language;

        // let nameVi = '';
        // let nameEn = '';
        // if (allSubmenus && allSubmenus.groupmenu === 'GROUP2') {
        //     nameVi = `${allSubmenus.groupmenuTypeData.valueVi}`;
        //     nameEn = `${allSubmenus.groupmenuTypeData.valueEn}`;
        // }
        return (
            <div className="abount-menuaboutus-container">
                <div className="abount-menuaboutus-body">
                    <div className="abount-menuaboutus-title">
                        <span className="span-right-title">
                            {/* {language === LANGUAGES.VI ? nameVi : nameEn} */}
                            chương trình
                        </span>
                    </div>
                    <div className="abount-menuaboutus-element">
                        {allSubmenuAboutus && allSubmenuAboutus.length > 0
                            && allSubmenuAboutus.map((item, index) => {

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
        allSubmenus: state.admin.allSubmenuAboutus,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllSubmenuaboutusStart: () => dispatch(actions.fetchAllSubmenuaboutusStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbountMenuAboutus);
