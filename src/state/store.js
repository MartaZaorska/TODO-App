import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';
import { newTodoMiddleware } from './middleware';

const store = configureStore({
  reducer: todoReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newTodoMiddleware)
});

store.subscribe(() => {
  localStorage.setItem("todo-app-data", JSON.stringify(store.getState()))
});

export default store;