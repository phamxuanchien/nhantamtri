import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions";
import Search from '../../search/Search';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}


class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: [],
            usersList: [],
            total: 0,
            view: 10,
            arr: [],
            filterEmail: '',
            filterName: '',
            keyword: ''
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers,
                total: this.props.listUsers.length,
                usersList: this.props.listUsers.slice(0, this.state.view)
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
                }
            );
        }

    }
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParentkey(user)
    }
    changeView = (index) => {
        var start = (index - 1) * this.state.view;
        var end = index * this.state.view;
        this.setState({
            usersList: this.state.usersRedux.slice(start, end)
        });
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(
            name === 'filterEmail' ? value : this.state.filterEmail,
            name === 'filterName' ? value : this.state.filterName,
        )
        this.setState({
            [name]: value
        });
    }

    render() {
        let arrUsers = this.state.usersList;
        // let arrUsers = this.state.usersRedux;
        let { filterName, filterEmail } = this.state;
        let keyword = this.props.keyword
        if (filterEmail) {
            arrUsers = arrUsers.filter((item) => {
                return item.email.toLowerCase().indexOf(filterEmail.toLowerCase()) !== -1
            });
        }
        if (filterName) {
            arrUsers = arrUsers.filter((item) => {
                return item.firstName.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
            });
        }
        if (keyword) {
            arrUsers = arrUsers.filter((item) => {
                return item.email.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            });
        }
        return (
            <React.Fragment>
                <Search onSearch={this.props.onSearch} onClear={this.props.onClear} />
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
                <table id="TableManageUser">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterEmail"
                                    value={filterEmail}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    value={filterName}
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                        {arrUsers && arrUsers.length > 0 &&
                            arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button
                                                onClick={() => this.handleEditUser(item)}
                                                className="btn-edit"><i className="fas fa-edit"></i></button>
                                            <button
                                                onClick={() => this.handleDeleteUser(item)}
                                                className="btn-delete"><i className="fas fa-trash"></i></button>

                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>

                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
