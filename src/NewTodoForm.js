import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    // Takes in form data and sends it to parent function.
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.handleTodo(this.state);
        this.setState({
            task: ''
        })
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Add To Do:</label>
                <input name="task" id="task" value={this.state.task}
                        onChange={this.handleChange} />
                <button>Add Todo!</button>
            </form>
        )
    }
}

export default NewTodoForm;