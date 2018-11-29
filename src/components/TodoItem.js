import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const TodoItem = props => {
  return (
    <li>
      {props.value}
      <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
    </li>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { deleteTodo }
)(TodoItem);
