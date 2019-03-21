import React, { Component } from 'react';
import './ToDoList.css';
import uuid from 'uuid/v4';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo) {
        let newTodo = {...todo, id: uuid()};
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }

    deleteTodo(id) {
        this.setState(st => ({
            todos: st.todo.filter(todo => todo.id !== id)
        }));
    }

    renderTodos() {
        const todos = this.state.todos.map(todo => (
            <Todo key={todo.id} currTask={todo.task} />
        ));
        return (
            <ul>
                {todos}
            </ul>
        );
    }

    render () {
        return (
            <div className='ToDoList'>
                <NewTodoForm handleTodo={this.addTodo} />
                {this.renderTodos()}
            </div>
        )
    }
}

export default ToDoList;