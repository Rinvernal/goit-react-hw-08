import s from "./SearchBox.module.css"
const SearchBox = ({search, handleChange}) => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Find contacts by name</p>
      <input type="text" value = {search} onChange={handleChange} className={s.input}/>
    </div>
  )
}

export default SearchBox