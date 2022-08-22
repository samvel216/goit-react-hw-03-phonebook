import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactsForm/ContactForm';
import { Filter } from './Filt/Filter';
import { ContactList } from './ContactList/ContactList';
const LOCAL_STORAGE_KEY = 'contacts';
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
  componentDidMount() {
    const contactslocaolStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parseContactslocaolStorage = JSON.parse(contactslocaolStorage);

    if (parseContactslocaolStorage) {
      this.setState({ contacts: parseContactslocaolStorage });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }
  chancheContact = ({ name, number }) => {
    const { contacts } = this.state;
    const isFindCopyContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isFindCopyContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const Contact = { id: nanoid(), name, number };

    this.setState(({ contacts }) => ({
      contacts: [Contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  renderFilter() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  }

  render() {
    const { filter, contacts } = this.state;
    const filterMassive = this.renderFilter();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.chancheContact} constacts={contacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList
          data={filterMassive}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
