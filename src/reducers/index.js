import { combineReducers } from 'redux';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      const todoId = action.payload;
      return state.filter(todo => todo.id !== todoId);
  }
  return state;
};

export default combineReducers({
  todos: todoReducer
});
