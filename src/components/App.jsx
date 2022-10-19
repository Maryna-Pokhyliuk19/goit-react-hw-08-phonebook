import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filtr } from './Filtr/Filtr';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const findName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (findName) {
      return alert(`${name} is already in contacts`);
    }
    const contact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filtr value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={this.onVisibleContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
