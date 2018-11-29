import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Form />
        <TodoList />
      </div>
    );
  }
}

export default App;
