import { ContactName } from "./ContactName/ContactName";


export default class App = () => {
  state = {
  contacts: [],
  name: ''
  }
  

  render() {
    return (
      <>
        <ContactName/>
        
      </>
    )
  };
};

