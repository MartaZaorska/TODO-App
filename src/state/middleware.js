import { v4 } from 'uuid';
import { addTodo } from './todoActions';

export const newTodoMiddleware = (store) => (next) => (action) => {
  action.type === addTodo.type ? next({...action, payload: { ...action.payload, id: v4() }}) : next(action);
}