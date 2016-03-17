import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
  render() {
    const { todo, deleteTodo } = this.props;
    return (
      <li>
        <div className="view">
          <label>
            {todo.text}
          </label>
          <button
            className="destroy"
            onClick={() => deleteTodo(todo.id)}
          >delete</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
