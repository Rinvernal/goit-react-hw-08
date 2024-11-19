import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css"

const Contact = ({handleDeleteContact, contact}) => {
  return (
    <div className={s.boxContact}>
      <div className={s.wrapper}>
        <h2 className={s.item}><IoMdPerson className={s.icon}/>{contact.name}</h2>
        <h2 className={s.item}><FaPhone className={s.icon}/>{contact.number}</h2>
      </div>
      <button className={s.button} onClick={() => {handleDeleteContact(contact.id)}}>Delete</button>
    </div>
  )
}

export default Contact