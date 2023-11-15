import React from 'react';
import css from './Phonebook.module.css';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
        <form className={css.form} action="">
          <label className={css.label} htmlFor="">
            Name
          </label>
          <input className={css.input} type="text" name="name" required />
          <button className={css.button}>Add contact</button>
        </form>
        <h2 className={css.title}>Contacts</h2>
        <ul className={css.list}>
          <li className={css.item}>Homer Simpson</li>
          <li className={css.item}>Marge Simpson</li>
          <li className={css.item}>Bart Simpson</li>
        </ul>
      </div>
    );
  }
}

export default App;
