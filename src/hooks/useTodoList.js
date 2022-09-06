import { useState, useCallback, useMemo } from 'react';

const useTodoList = (data) => {
  const [filter, setFilter] = useState("all");

  const setFilterHandler = useCallback((e) => setFilter(e.target.id), []);

  const activeAmount = useMemo(() => data.reduce((amount, todo) => amount += todo.completed ? 0 : 1, 0), [data]);
  const filteredData = useMemo(() => filter === "all" ? data : data.filter(todo => filter === "completed" ? todo.completed : !todo.completed), [data, filter]);

  return { filter, setFilterHandler, activeAmount, filteredData };
}

export default useTodoList;