import Contact from "../Contact/Contact";
import s from "./ContactList.module.css"
export const ContactList = ({contacts, handleDeleteContact}) => {
  return (
    <ul className={s.box}>
      {contacts.map(contact => (
        <li className={s.contact} key={contact.id}>
          <Contact contact = {contact} handleDeleteContact = {handleDeleteContact}/>
        </li>
      ))}
      
    </ul>
  )
}
{/* <div className={s.box}>
      {filter.map(contact => (
        <section className={s.contact} key={contact.id}>
          <ul className={s.wrapper}>
            <li className={s.item}><IoMdPerson className={s.icon}/>{contact.name}</li>
            <li className={s.item}><FaPhone className={s.icon}/>{contact.number}</li>
          </ul>
          <button className={s.button} onClick={() => {handleDeleteContact(contact.id)}}>Delete</button>
        </section>
      )) }
      
    </div> */}