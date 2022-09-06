import { memo } from 'react'
import { FiltersContent } from './styles';

function Filters({filter, setFilter}) {
  return (
    <FiltersContent>
      {["all", "active", "completed"].map(option => (
        <span key={option}>
          <input type="radio" checked={filter === option} onChange={setFilter} id={option} value={option} name="filter" />
          <label htmlFor={option}>{option}</label>
        </span>
      ))}
    </FiltersContent>
  )
}

export default memo(Filters)