import React, { Component } from 'react';
import { connect } from "react-redux";
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';


class ListNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSliderNewsEvents: {}
        }
    }
    async componentDidMount() {
        this.props.getAllNewseventsStart()
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (prevProps.allNewsevents !== this.props.allNewsevents) {
            let dataSliderNewsEvents = this.props.allNewsevents;
            this.setState({
                dataNewsevents: dataSliderNewsEvents.data,

            })
        }
    }

    listDetail = (dataNewsevents) => {
        this.setState({
            dataNewsevents: this.props.dataNewsevents.id
        })
    }
    render() {
        let { dataNewsevents } = this.state;
        let { language } = this.props;
        console.log('check render listnews :', dataNewsevents)
        return (
            <>
                {dataNewsevents && dataNewsevents.length > 0 && dataNewsevents.map((item, index) => {
                    return (
                        <div className="list-container" key={index} onClick={(dataDetail) => this.props.listDetail(item)}>
                            <button type="button" className="btn btn-link" >{item.title}</button>
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
        allNewsevents: state.admin.newsevents,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllNewseventsStart: () => dispatch(actions.fetchAllNewseventsStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListNews);
