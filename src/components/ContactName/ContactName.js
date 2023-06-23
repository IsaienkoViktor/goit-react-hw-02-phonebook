import React from 'react';
import PropTypes from 'prop-types';

export const ContactName = ({}) => {
  return (
    <>
      <form>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit" name="Add">
            Add contact
          </button>
        </label>
      </form>
      <h2>Contacts</h2>
    </>
  );
};

// ContactName.propTypes = {
//   name: PropTypes.string.isRequired
//   id: PropTypes.func.isRequired,
// };
