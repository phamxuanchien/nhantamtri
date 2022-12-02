import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../store/actions';


class ListHonorBenefactors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProjectneedhelp: [],
        }
    }
    async componentDidMount() {
        this.props.getAllProjectneedhelpStart();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.allProjectneedhelp !== this.props.allProjectneedhelp) {
            let listProjectneedhelp = this.props.allProjectneedhelp;
            this.setState({
                dataProjectneedhelp: listProjectneedhelp.data,

            })
        }
    }
    listDetail = (dataProjectneedhelp) => {
        this.setState({
            dataProjectneedhelp: this.props.dataProjectneedhelp.id
        })
    }


    render() {
        let { dataProjectneedhelp } = this.state;
        let { language } = this.props;
        console.log('check render dataProjectneedhelp :', dataProjectneedhelp)
        return (
            <>
                {dataProjectneedhelp && dataProjectneedhelp.length > 0 && dataProjectneedhelp.map((item, index) => {
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
        allProjectneedhelp: state.admin.projectneedhelp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProjectneedhelpStart: () => dispatch(actions.fetchAllProjectneedhelpStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListHonorBenefactors);
