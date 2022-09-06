import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Reorder } from 'framer-motion';

import useWidth from '../hooks/useWidth';
import useTodoList from '../hooks/useTodoList';

import { List, Item, Content, FiltersWrapper, SmallText } from './styles';
import Todo from './Todo';
import Filters from './Filters';

function TodoList() {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  
  const { filteredData, filter, setFilterHandler, activeAmount }  = useTodoList(data);
  const width = useWidth();

  const setData = async (updatedData) => {
    const { setTodos } = await import("../state/todoActions");
    dispatch(setTodos(updatedData));
  }

  const clearCompleted = async () => {
    const { removeCompleted } = await import("../state/todoActions");
    dispatch(removeCompleted());
  }

  return (
    <>
      <List cursor={filter === "all" ? "grab" : "auto"}>
        <Reorder.Group axis="y" values={data} onReorder={setData}>
          {filteredData.map((todo) => (
            <Reorder.Item  dragListener={filter === "all"} key={todo.id} value={todo}>
              <Todo {...todo} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <Item>
          <Content>
            <p>{activeAmount} items left</p>
            {width >= 768 && <Filters filter={filter} setFilter={setFilterHandler} />}
            <button onClick={clearCompleted}>Clear Completed</button>
          </Content>
        </Item>
      </List>
      {width < 768 && (
        <FiltersWrapper>
          <Content>
            <Filters filter={filter} setFilter={setFilterHandler} />
          </Content>
        </FiltersWrapper>
      )}
      {filter === "all" && <SmallText>Drag and drop to reorder list</SmallText>}
    </>
  )
}

export default memo(TodoList);