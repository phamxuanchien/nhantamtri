import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableAllcode.scss';
import * as actions from "../../../store/actions";


class TableAllcode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allcodesRedux: [],
            usersList: [],
            total: 0,
            view: 10,
            arr: []
        }
    }

    componentDidMount() {
        this.props.fetchAllcodeRedux();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listAllcodes !== this.props.listAllcodes) {
            this.setState({
                allcodesRedux: this.props.listAllcodes.data,
                total: this.props.listAllcodes.data.length,
                allcodesList: this.props.listAllcodes.data.slice(0, this.state.view)
            },
                () => {
                    var arr = [];
                    for (
                        var i = 1;
                        i <= Math.ceil(this.state.total / this.state.view);
                        i++
                    ) {
                        arr.push(i);
                    }
                    this.setState({ arr: arr });
                    console.log('check arr :', arr);

                }
            );

        }
    }
    handleDeleteAllcode = (allcode) => {
        this.props.deleteAAllcodeRedux(allcode.id);
    }

    handleEditAllcode = (allcode) => {
        this.props.handleEditAllcodeFromParent(allcode)
    }
    changeView = (index) => {
        var start = (index - 1) * this.state.view;
        var end = index * this.state.view;
        this.setState({
            allcodesList: this.state.allcodesRedux.slice(start, end)
        });
    }

    render() {
        let arrAllcodes = this.state.allcodesList;
        return (
            <React.Fragment>
                <div className="paging">
                    <span className="preview">PREVIEW</span>
                    {this.state.arr.map((item, index) => {
                        return (
                            <div className="pagination" key={index}
                                onClick={() => { this.changeView(item); }}
                            >
                                <button className="btn">{item}</button>
                            </div>
                        )
                    })}
                    <span className="next">NEXT</span>
                </div>
                <table id="TableAllcode">
                    <tbody>
                        <tr>
                            <th>keyMap</th>
                            <th>type</th>
                            <th>valueEn</th>
                            <th>valueVi</th>
                            <th>Actions</th>
                        </tr>
                        {arrAllcodes && arrAllcodes.length > 0 &&
                            arrAllcodes.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.keyMap}</td>
                                        <td>{item.type}</td>
                                        <td>{item.valueEn}</td>
                                        <td>{item.valueVi}</td>
                                        <td>
                                            <button
                                                onClick={() => this.handleEditAllcode(item)}
                                                className="btn-edit"><i className="fas fa-edit"></i></button>
                                            <button
                                                onClick={() => this.handleDeleteAllcode(item)}
                                                className="btn-delete"><i className="fas fa-trash"></i></button>

                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        listAllcodes: state.admin.allcodes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllcodeRedux: () => dispatch(actions.fetchAllAllcodesStart()),
        deleteAAllcodeRedux: (id) => dispatch(actions.deleteAAllcode(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableAllcode);
