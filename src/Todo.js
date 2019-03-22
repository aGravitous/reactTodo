import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleClick(evt) {
        //call up to the TodoList to delete the current Todo
        this.props.triggerDelete();
    }

    handleUpdate(evt) {
        //update the editable state to true on click
        this.props.triggerUpdate();
    }

    render() {
        return (
            <li key={this.props.id}>
                <div>
                    <div>{this.props.currTask}</div>
                    <button onClick={this.handleClick}>X</button>
                    <button onClick={this.handleUpdate}>Edit</button>
                </div>
            </li>
        )
    }

}

export default Todo;