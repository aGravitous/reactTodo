import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        //call up to the TodoList to delete the current Todo
        this.props.triggerDelete();
    }

    handleEdit(evt) {
        // Call up to Todolist to render edit form.
        this.props.triggerEdit();
    }

    render() {
        return (
            <li key={this.props.id}>
                <div>
                    <div>{this.props.currTask}</div>
                    <button onClick={this.handleClick}>X</button>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            </li>
        )
    }

}

export default Todo;