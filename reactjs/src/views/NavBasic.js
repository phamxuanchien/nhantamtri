import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import * as actions from '../store/actions';
import { NavLink } from 'react-router-dom';
import { CRUD_ACTIONS, LANGUAGES } from '../utils';
import './NavBasic.scss';

class NavBasic extends Component {
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

    handleDetailIntro = (submenu) => {
        console.log('check handleDetailIntro :', submenu)
        if (this.props.history) {
            this.props.history.push(`/detail-intro/${submenu.id}`)
        }
        console.log('check handleDetailIntro submenus.id:', submenu.id)
    }

    render() {
        let allSubmenus = this.state.allSubmenus;
        let language = this.props.language;
        console.log('check allSubmenus :', allSubmenus)
        return (
            <div className="menunav-intro">
                {allSubmenus && allSubmenus.length > 0
                    && allSubmenus.map((item, index) => {
                        return (
                            // <NavLink key={index} onClick={() => this.handleContentSubmenu(item)}
                            //     activeClassName="active1" to="/introduce/intro">
                            //         <i className="fas fa-angle-right"></i>

                            // </NavLink>
                            <span className="span-1" key={index} onClick={() => this.handleDetailIntro(item)}>{item.name}</span>
                        )
                    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBasic);
