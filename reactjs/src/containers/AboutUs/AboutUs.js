import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './AboutUs.scss';
import HomeHeader from '../HomePage/HomeHeader';
import HomeFooter from '../HomePage/HomeFooter';
import * as actions from '../../store/actions';
import ListMenuImage from '../HomePage/Section/ListMenuImage';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../utils";
import AboutIntro from './AboutIntro';


class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSubmenuRedux: ''
        }
    }
    async componentDidMount() {
        this.props.getAllSubmenuStart();
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
    // handleDetailAboutUs = (allSubmenus) => {
    //     if (this.props.history) {
    //         this.props.history.push(`/detailaboutus/${allSubmenus.id}`)
    //     }
    // }

    //hiển thị dữ liệu ngay trên component
    handleDetailAboutUs = (allSubmenus) => {
        this.setState({
            nameAbout: allSubmenus.name,
            contentAbout: allSubmenus.descriptionMarkdown,
            action: CRUD_ACTIONS.ON,
        })
    }

    render() {
        let allSubmenus = this.state.allSubmenus;
        let language = this.props.language;
        let { nameAbout } = this.state;
        let { contentAbout } = this.state;
        return (
            <div className="aboutus-container">
                <HomeHeader />
                <div className="aboutus-body">
                    <div className="aboutus-title">
                        <span className="span-title">{this.state.action === CRUD_ACTIONS.ON ? nameAbout : 'Giới thiệu'}</span>
                    </div>
                    <div className="aboutus-element">
                        <div className="aboutus-element-left col-lg-9 col-md-12">
                            <div className="aboutus-element-content">
                                {this.state.action === CRUD_ACTIONS.ON ? contentAbout : <AboutIntro />}
                            </div>
                            <div className="aboutus-element-right-block-mobile">
                                <div className="right-block-title">
                                    <span className="span-right-title">nói về chúng tôi</span>
                                    {/* <span className="span-right-title">{language === LANGUAGES.VI ? nameVi : nameEn}</span> */}
                                </div>
                                {allSubmenus && allSubmenus.length > 0
                                    && allSubmenus.map((item, index) => {
                                        let nameVi = '', nameEn = '';
                                        if (item.groupmenu && item.groupmenuTypeData && item.groupmenu === 'GROUP1') {
                                            nameVi = `${item.groupmenuTypeData.valueVi}`;
                                            nameEn = `${item.groupmenuTypeData.valueEn}`;
                                        }
                                        return (
                                            <div className="right-block-content" key={index}>
                                                <i className="fas fa-angle-right"></i>
                                                <span className="span-right-content"
                                                    onClick={() => this.handleDetailAboutUs(item)}
                                                >
                                                    {item.name}
                                                    {/* {item.groupmenu === 'GROUP1' ? item.name : ''} */}
                                                </span>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                        <div className="aboutus-element-right col-lg-3 col-md-0">
                            <div className="aboutus-element-right-menu">
                                {/* <AboutUsMenu /> */}
                            </div>
                            <div className="aboutus-element-right-block">
                                <div className="right-block-title">
                                    <span className="span-right-title">nói về chúng tôi</span>
                                    {/* <span className="span-right-title">{language === LANGUAGES.VI ? nameVi : nameEn}</span> */}
                                </div>
                                {allSubmenus && allSubmenus.length > 0
                                    && allSubmenus.map((item, index) => {
                                        let nameVi = '', nameEn = '';
                                        if (item.groupmenu && item.groupmenuTypeData && item.groupmenu === 'GROUP1') {
                                            nameVi = `${item.groupmenuTypeData.valueVi}`;
                                            nameEn = `${item.groupmenuTypeData.valueEn}`;
                                        }
                                        return (
                                            <div className="right-block-content" key={index}>
                                                <i className="fas fa-angle-right"></i>
                                                <span className="span-right-content"
                                                    onClick={() => this.handleDetailAboutUs(item)}
                                                >
                                                    {item.name}
                                                    {/* {item.groupmenu === 'GROUP1' ? item.name : ''} */}
                                                </span>
                                            </div>
                                        )
                                    })}
                            </div>
                            <div className="aboutus-element-right-img">
                                <ListMenuImage />
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
        allSubmenus: state.admin.allSubmenu,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllSubmenuStart: () => dispatch(actions.fetchAllSubmenuStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
