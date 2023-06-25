import { Component } from 'react';
import { ContactName } from './ContactName/ContactName';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChangeInputDate = title => {
    this.setState({ name: title });
    console.log(title);
  };
  handleAddItem = title => {
    console.log(title);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: title, id: crypto.randomUUID() },
      ],
    }));
  };
  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <header>
          <div>Logo</div>
        </header>
        <ContactName
          onAddItem={this.handleAddItem}
          inputValue={name}
          onChangeData={this.handleChangeInputDate}
          contacts={contacts}
          title="Contacts"
        />
      </>
    );
  }
}

// const wrapper = styled.div`
//   padding: 15px 40px;
// `;
