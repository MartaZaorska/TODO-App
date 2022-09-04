import { useSelector } from 'react-redux';
import { List } from './styles';

import Todo from './Todo';

function TodoList() {
  const data = useSelector(state => state);
  //const todos = useMemo(() => filter === "all" ? data : data.filter(todo => filter === "completed" ? todo.completed : !todo.completed), [data, filter]);

  return (
    <List>
      {data.map(todo => <Todo key={todo.id} {...todo} />)}
    </List>
  )
}

export default TodoList