import React from 'react';
import css from '../Phonebook.module.css';

const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => (
  <form className={css.form} onSubmit={onSubmit}>
    <label className={css.label} htmlFor="name">
      Name:
    </label>
    <input
      className={css.input}
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={onNameChange}
      required
    />
    <label className={css.label} htmlFor="number">
      Number:
    </label>
    <input
      className={css.input}
      type="tel"
      name="number"
      value={number}
      onChange={onNumberChange}
      required
    />
    <button className={css.button} type="submit">
      Add Contact
    </button>
  </form>
);

export default ContactForm;
