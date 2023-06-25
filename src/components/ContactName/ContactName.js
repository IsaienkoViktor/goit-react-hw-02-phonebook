import React from 'react';

export const ContactName = ({
  contacts,
  title,
  onChangeData,
  inputValue,
  onAddItem,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    onAddItem(inputValue);
    onChangeData('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => onChangeData(e.target.value)}
            value={inputValue}
          />
          <button>Add contact</button>
        </label>
      </form>
      <h2>{title}</h2>
      <ul>
        {contacts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
