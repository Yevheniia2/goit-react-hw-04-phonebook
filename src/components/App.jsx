import { useState, useEffect } from 'react';
import shortid from "shortid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { AppContainer } from "./App.styled";

const initValue = () => {
  const contactsLocalStorage = localStorage.getItem('contacts');
    if (contactsLocalStorage === '' || JSON.parse(contactsLocalStorage) === null) {
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
    }
  return JSON.parse(contactsLocalStorage);
};

export function App() {
  const [contacts, setContacts] = useState(initValue);
  const [filter, setFilter] = useState('');
  const filteredContacts = filterContacts();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleSetFilterValue(e) {
    const { target: { value }, } = e;
    setFilter(value);
  }

  function handleAddContact(name, number) {
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      { id: shortid.generate(), name, number },
      ...prevContacts,
    ]);
  }

  function filterContacts() {
    const filterValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterValue)
    );
  }

  function handleDeleteContact(e) {
    setContacts(contacts.filter(contact => contact.id !== e.target.id));
  }
  
  return (
    <>
      <AppContainer>
        <ContactForm handleAddContact={ handleAddContact } />
        <Filter handleSetFilterValue={ handleSetFilterValue } />
        <ContactList contacts={ filteredContacts } handleDeleteContact={ handleDeleteContact } />
      </AppContainer>
    </>
  );
}