import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "./contactsData.json"
// const contactsData = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]

const App = () => {

  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedData = localStorage.getItem('contacts');
    if (savedData !== null) {
      return JSON.parse(savedData)
    }
    contactsData
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const handelAddContact = (newContact) => {
    setContacts(prev => [...prev, newContact])
    console.log(newContact)
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const filter = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handelAddContact = {handelAddContact}/>
      <SearchBox search = {search} handleChange = {handleChange}/>
      <ContactList contacts = {filter} handleDeleteContact = {handleDeleteContact}/>
      
    </div>
      
  )
}

export default App;