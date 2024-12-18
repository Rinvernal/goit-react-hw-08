import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"

const List = () => {
  return (
    <div>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  )
}

export default List