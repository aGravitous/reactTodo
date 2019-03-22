import React, { Component } from 'react';
import './ToDoList.css';
import uuid from 'uuid/v4';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo) {
        let newTodo = {...todo, editable: false, id: uuid()};
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }

    // Delete a todo from state by id.
    deleteTodo(id) {
        this.setState(st => ({
            todos: st.todos.filter(todo => todo.id !== id)
        }));
    }

    // Displays list of existing todos.
    renderTodos() {
        //Take care of mapping here to keep return html clean.
        const todos = this.state.todos.map(todo => (
            <Todo key={todo.id} currTask={todo.task} 
                    triggerDelete={() => this.deleteTodo(todo.id)}
                    triggerEdit={() => this.editTodo(todo.id)} />
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