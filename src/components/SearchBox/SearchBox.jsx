import { useDispatch, useSelector } from "react-redux"
import s from "./SearchBox.module.css"
import {selectNameFilter} from '../../redux/filters/selectors.js'
import {changeFilter} from '../../redux/filters/slice.js'
const SearchBox = () => {
  const dispatch = useDispatch()
  const filterValue = useSelector(selectNameFilter)
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Find contacts by name</p>
      <input type="text" value={filterValue} onChange={e => dispatch(changeFilter(e.target.value))} className={s.input}/>
    </div>
  )
}

export default SearchBox