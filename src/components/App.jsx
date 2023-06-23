import { Component } from 'react';
import { ContactName } from './ContactName/ContactName';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddContact = evt => {
    console.log('add');
    evt.preventDefault();

    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: crypto.randomUUID(),
          name: this.state.name,
        },
      ],
    });
  };

  render() {
    const { contact, name } = this.state;
    return (
      <>
        <ContactName onclick={this.handleAddContact} />
      </>
    );
  }
}
