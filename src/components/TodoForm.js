import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, CheckboxWrapper } from './styles';

function TodoForm() {
  const dispatch = useDispatch();

  const addTodoHandler = async e => {
    e.preventDefault();
    const { completed, title } = e.target.elements;
    if(!title || title.value === "") return;

    const { addTodo } = await import('../state/todoActions');
    dispatch(addTodo({title: title.value, completed: completed.checked}));
    e.target.reset();
  }

  return (
    <Form onSubmit={addTodoHandler}>
      <CheckboxWrapper>
        <input type="checkbox" name="completed" id="completed-todo" />
        <label htmlFor="completed-todo"></label>
      </CheckboxWrapper>
      <Input type="text" name="title" placeholder='Create a new todo...' />
    </Form>
  )
}

export default memo(TodoForm);