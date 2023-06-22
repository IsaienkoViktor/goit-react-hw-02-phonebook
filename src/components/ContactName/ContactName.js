import React from 'react';
import PropTypes from 'prop-types';

export const ContactName = ({ inputName }) => {
  return (
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
};
ContactName.propTypes = {
  name: PropTypes.string.isRequired
  id: PropTypes.func.isRequired,
};
