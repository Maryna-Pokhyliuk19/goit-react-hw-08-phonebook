import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filtr } from './Filtr/Filtr';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  const formSubmitHandler = (name, number) => {
    const normalizedName = name.toLowerCase();
    const findName = contacts.some(contact => contact.name === normalizedName);
    if (findName) {
      return alert(`${name} is already in contacts`);
    }
    const contact = { id: nanoid(), name, number };

    setContacts(contacts => [...contacts, contact]);
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const onDeleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      {getVisibleContacts().length > 0 && (
        <>
          <Filtr value={filter} onChange={changeFilter} />
          <ContactsList
            contacts={getVisibleContacts()}
            onDeleteContact={onDeleteContact}
          />
        </>
      )}
    </div>
  );
};
