import React, { Component } from 'react';
import './ToDoList.css';
import uuid from 'uuid/v4';
import Todo from './Todo';
import EditTodo from './EditTodo';
import NewTodoForm from './NewTodoForm';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        this.addTodo = this.addTodo.bind(this);
        this.updateEditable = this.updateEditable.bind(this);
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

    // Edit a todo from state by id
    editTodo(id, updated) {
        const updatedTodos = this.state.todos.map( todo => {
            if (todo.id === id) {
                return {...todo, task: updated, editable: false };
            }
            return todo;
        })
        this.setState({ todos: updatedTodos })
        // this.setState(st => ({
        //     todos: st.todos.map(function(todo){
        //         if (todo.id === updatedTodo.id) {
        //             todo['task'] = updatedTodo.task;
        //             return todo;
        //         }
        //     })
        // }));
    }

    updateEditable(id) {
        const updatedTodos = this.state.todos.map( todo => {
            if (todo.id === id) {
                return { ...todo, editable: true };
            }
            return todo;
        })
        this.setState({ todos: updatedTodos });
    }

    render () {
        return (
            <div className='ToDoList'>
                <NewTodoForm handleTodo={this.addTodo} />
                <ul>
                {this.state.todos.map(t => {
                    if(t.editable) {
                       return  <EditTodo key={t.id} currTask={t.task} prefil={t.task}
                            triggerDelete={() => this.deleteTodo(t.id)}
                            triggerEdit={updated => this.editTodo(t.id, updated)} />
                    }
                    else {
                        return <Todo key={t.id} currTask={t.task} 
                            triggerDelete={() => this.deleteTodo(t.id)} 
                            triggerUpdate={() => this.updateEditable(t.id)} />
                    }
                })}
            </ul>
            </div>
        )
    }
}

export default ToDoList;