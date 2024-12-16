import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"
import { selectFilteredContacts, selectIsLoading } from "../../redux/contactSlice";
export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading)
  
  const filteredData = useSelector(selectFilteredContacts)
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      <ul className={s.box}>
      {filteredData.map(contact => (
        <li className={s.contact} key={contact.id}>
          <Contact contact={contact} id={contact.id} />
        </li>
      ))}
      
    </ul>
    </div>
    
  )
}
export default ContactList