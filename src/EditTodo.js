import React, { Component } from 'react';
import './EditTodo.css';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [this.props.prefil],
        }
        this.handleClickX = this.handleClickX.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClickX(evt) {
        //call up to the TodoList to delete the current Todo
        this.props.triggerDelete();
    }

    handleClick(evt) {
        evt.preventDefault();
        console.log(this.state)
        this.props.triggerEdit(this.state.task);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (
            <li key={this.props.id}>
                <div>
                    <div>{this.props.currTask}</div>
                    <button onClick={this.handleClickX}>X</button>
                    <form onSubmit={this.handleClick}>
                        <label htmlFor="task">Edit:</label>
                        <input name="task" id="task"
                            value={this.state.task}
                            onChange={this.handleChange} />
                        <button>Submit changes</button>
                    </form>
                </div>
            </li>
        )
    }
}

export default EditTodo;