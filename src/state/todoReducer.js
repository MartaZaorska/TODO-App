import { createReducer } from '@reduxjs/toolkit';

import { placeholderData } from '../data/constants';
import { addTodo, removeTodo, toggleTodo, removeCompleted } from './todoActions';

function getInitialState(){
  const localData = localStorage.getItem("todo-app-data");
  return localData ? JSON.parse(localData) : placeholderData;
}

const todoReducer = createReducer(getInitialState, (builder) => {
  builder
    .addCase(addTodo.type, (state, action) => { 
      state.push(action.payload); 
    })
    .addCase(removeTodo.type, (state, action) => state.filter(todo => todo.id !== action.payload))
    .addCase(toggleTodo.type, (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      if(index >= 0) state[index].completed = !state[index].completed;
    })
    .addCase(removeCompleted.type, (state) => state.filter(todo => !todo.completed));
});

export default todoReducer;