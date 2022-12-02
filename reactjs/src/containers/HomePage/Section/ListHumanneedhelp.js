import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../store/actions';


class ListHumanneedhelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHumanneedhelp: [],
        }
    }
    async componentDidMount() {
        this.props.getAllHumanneedhelpStart();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.allHumanneedhelp !== this.props.allHumanneedhelp) {
            let listHumanneedhelp = this.props.allHumanneedhelp;
            this.setState({
                dataHumanneedhelp: listHumanneedhelp.data,

            })
        }
    }
    listDetail = (dataHumanneedhelp) => {
        this.setState({
            dataHumanneedhelp: this.props.dataHumanneedhelp.id
        })
    }

    render() {
        let { dataHumanneedhelp } = this.state;
        let { language } = this.props;
        return (
            <>
                {dataHumanneedhelp && dataHumanneedhelp.length > 0 && dataHumanneedhelp.map((item, index) => {
                    return (
                        <div className="list-container" key={index} onClick={(dataDetail) => this.props.listDetail(item)}>
                            <button type="button" className="btn btn-link" >{item.name}</button>
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
        allHumanneedhelp: state.admin.humanneedhelp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllHumanneedhelpStart: () => dispatch(actions.fetchAllHumanneedhelpStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListHumanneedhelp);
