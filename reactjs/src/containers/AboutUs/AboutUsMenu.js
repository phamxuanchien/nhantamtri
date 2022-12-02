import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './AboutUsMenu.scss';


class AboutUsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {


        }
    }

    render() {


        return (
            <div className="aboutusmenu-container">
                {/* <div className="right-block-title">nói về chúng tôi
                <span className="span-right-title">{this.props.group}</span>
                </div> */}
                <div className="right-block-content">
                    <span className="span-right-content">{this.props.nameMenu}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsMenu);
