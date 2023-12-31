import React, { Component } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const nameExists = contacts.find(contact => contact.name === name);
    console.log(contacts);
    if (nameExists) {
      alert(`${name} is already in contacts`);
      this.setState({ name: '', number: '' });
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log('39', newContact);
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  filterSuchContact = () => {
    const { contacts, filter } = this.state;
    const valueToLowerCase = filter.toLowerCase().trim();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(valueToLowerCase)
    );
    return filteredContacts;
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterSuchContact();
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className={css.title}>Contact List</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts || contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
