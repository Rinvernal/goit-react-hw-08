import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "./contactsData.json"

const App = () => {

  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedData = localStorage.getItem('contacts');
    if (savedData !== null) {
      return JSON.parse(savedData)
    }
    return contactsData;
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