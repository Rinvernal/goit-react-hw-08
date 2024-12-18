import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"
import { selectIsLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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