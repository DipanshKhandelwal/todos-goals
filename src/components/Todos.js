import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '../actions/todos'

class Todos extends React.Component {

  addItem = (e) => {
    e.preventDefault()
    const name = this.input.value
    this.props.dispatch(handleAddTodo(
      name,
      () => this.input.value = ''
    ))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id))
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Add Todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)