import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.contacts.filter)
  const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <ul className={s.box}>
      {filteredData.map(contact => (
        <li className={s.contact} key={contact.id}>
          <Contact contact={contact} id={contact.id} />
        </li>
      ))}
      
    </ul>
  )
}
export default ContactList