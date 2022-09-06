import { useId, memo } from 'react';
import { useDispatch } from 'react-redux';

import { TodoListItem, Content, CheckboxWrapper } from "./styles";
import iconCross from '../assets/icon-cross.svg';

function Todo({ id, title, completed }) {
  const inputId = useId();
  const dispatch = useDispatch();

  const removeTodoHandler = async () => {
    const { removeTodo } = await import("../state/todoActions");
    dispatch(removeTodo(id));
  }

  const toggleTodoHandler = async () => {
    const { toggleTodo } = await import("../state/todoActions");
    dispatch(toggleTodo(id));
  }

  return (
    <TodoListItem>
      <Content>
        <CheckboxWrapper>
          <input type="checkbox" id={inputId} defaultChecked={completed} onChange={toggleTodoHandler} />
          <label htmlFor={inputId}></label>
        </CheckboxWrapper>
        <p>{completed ? <s>{title}</s> : title}</p>
        <button aria-label="delete todo" onClick={removeTodoHandler}><img src={iconCross} alt="delete icon" /></button>
      </Content>
    </TodoListItem>
  )
}

export default memo(Todo);