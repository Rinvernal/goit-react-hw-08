import Contact from "../Contact/Contact";
export const ContactList = ({contacts, handleDeleteContact}) => {
  return (
    <div>
      <Contact filter = {contacts} handleDeleteContact = {handleDeleteContact}/>
    </div>
  )
}
