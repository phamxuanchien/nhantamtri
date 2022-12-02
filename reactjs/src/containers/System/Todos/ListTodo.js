import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo);

        this.setState({
            listTodos: [...this.state.listTodos, todo],
            // listTodos: currentListTodo
        })

        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delele succeed!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo succeed!")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })


    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.time = event.target.value;
        editTodoCopy.location = event.target.value;
        editTodoCopy.title = event.target.value;
        editTodoCopy.result = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object: ', isEmptyObj)
        console.log('>>> check listTodos: ', listTodos)
        console.log('>>> check editTodo: ', editTodo)
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">

                    <div className="todo-child">


                        <table id="TableManageUser">
                            <tbody>
                                <tr>
                                    <th>STT</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                    <th>Title</th>
                                    <th>result</th>
                                    <th>action</th>
                                </tr>

                                {listTodos && listTodos.length > 0 &&
                                    listTodos.map((item, index) => {
                                        return (

                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.time}</td>
                                                <td>{item.location}</td>
                                                <td>{item.title}</td>
                                                <td>{item.result}</td>
                                                <td>
                                                    <button className="edit"
                                                        onClick={() => this.handleEditTodo(item)}
                                                    >
                                                        {isEmptyObj === false && editTodo.id === item.id ?
                                                            'Save' : 'Edit'
                                                        }

                                                    </button>
                                                    <button className="delete"
                                                        onClick={() => this.handleDeleteTodo(item)}

                                                    >Delete</button>
                                                </td>
                                                {/* {isEmptyObj === true ?

                                                    <tr key={item.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.time}</td>
                                                        <td>{item.location}</td>
                                                        <td>{item.title}</td>
                                                        <td>{item.result}</td>

                                                    </tr>
                                                    :
                                                    <>
                                                        {editTodo.id === item.id ?
                                                            <tr key={item.id}>
                                                                <td>{index + 1}</td>
                                                                <td>{item.time}</td>
                                                                <td>{item.location}</td>
                                                                <td>{item.title}</td>
                                                                <td>{item.result}</td>
                                                            </tr>
                                                            :
                                                            <tr key={item.id}>
                                                                <td>{index + 1}</td>
                                                                <td>{item.time}</td>
                                                                <td>{item.location}</td>
                                                                <td>{item.title}</td>
                                                                <td>{item.result}</td>
                                                            </tr>
                                                        }
                                                    </>
                                                } */}
                                            </tr>

                                        )
                                    })


                                }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        )
    }
}

export default ListTodo;