import React,{useState} from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {
  //react hook
  const [contacts, setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    console.log("FROM APP.JS")
    console.log(contact);
    setContacts([...contacts, contact])
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
