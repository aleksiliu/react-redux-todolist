import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = props => {
  const renderTodos = props.todos.map(todo => (
    <TodoItem key={todo.id} value={todo.title} id={todo.id} />
  ));
  return <ul>{renderTodos}</ul>;
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
