import React from 'react';
import { toast } from 'react-toastify';
import ListTodo from './ListTodo';

class AddTodo extends React.Component {
    state = {
        title: '',
        time: '',
        location: '',
        result: '',
    }

    handleOnChangeTitle = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`)
            return;
            //if(undefined/null/empty) => false
        }

        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
            time: this.state.time,
            location: this.state.location,
            result: this.state.result
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: '',
            time: '',
            location: '',
            result: '',
        })
    }
    render() {
        let { title } = this.state;
        let { time } = this.state;
        let { location } = this.state;
        let { result } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={time}
                    onChange={(event) => this.handleOnChangeTitle(event, 'time')}
                />
                <input type="text" value={location}
                    onChange={(event) => this.handleOnChangeTitle(event, 'location')}
                />
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event, 'title')}
                />
                <input type="text" value={result}
                    onChange={(event) => this.handleOnChangeTitle(event, 'result')}
                />
                <button type="button" className="add"
                    onClick={() => this.handleAddTodo()}
                >Add</button>

            </div>
        )
    }

}

export default AddTodo;