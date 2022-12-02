import React, { Component } from 'react';
import { connect } from "react-redux";
import './ListMenuImage.scss';
import huongdan from '../../../assets/benefactor/huong dan.png';
import vinhdanh from '../../../assets/benefactor/vinh danh.png';
import duan from '../../../assets/benefactor/du an.png';
import hoancanh from '../../../assets/benefactor/hoan canh.png';
import congkhai from '../../../assets/benefactor/cong khai.png';
import tintuc from '../../../assets/benefactor/tin tuc.png';
import { Link } from 'react-router-dom';

class ListMenuImage extends Component {
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
            <div className="listmenu-image-container">
                <div className="shortcut-donations">
                    <Link to={`/honorbenefactors`}><img className="image-donations" src={vinhdanh} /></Link>
                    <Link to={`/donation`}><img className="image-donations" src={huongdan} /></Link>
                    <Link to={`/humanneedhelp`}><img className="image-donations" src={hoancanh} /></Link>
                    <Link to={`/projectneedhelp`}><img className="image-donations" src={duan} /></Link>
                    <Link to={`/publicactivity`}><img className="image-donations" src={congkhai} /></Link>
                    <Link to={`/newsevents`}><img className="image-donations" src={tintuc} /></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListMenuImage);
