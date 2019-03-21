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

    render() {
        return (
            <li key={this.props.id}>
                <div>{this.props.currTask}</div>
                <button onClick={this.handleClick}>X</button>
            </li>
        )
    }

}

export default Todo;