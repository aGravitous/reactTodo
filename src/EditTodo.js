import React, { Component } from 'react';
import './editTodo.css';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''

        }
        this.handleSubmit = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.handleTodo(this.state);
        this.setState({ [evt.target.editable]:  })
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="editTask">Edit me!</label>
                <input name="editTask" id="editTask"
                    value={this.state.task}
                    onChange={this.handleChange} />
                <button>Submit changes</button>
            </form>
        )
    }
}

export default EditTodo;