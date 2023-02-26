import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contacts/contacts-operations';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`User with name ${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={event => setPhone(event.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
