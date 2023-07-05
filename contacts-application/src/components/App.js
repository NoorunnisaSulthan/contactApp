import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "../api/contacts";
import "./App.css";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";

function App() {
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    console.log(response.data);
    return response.data;
  };

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //to filter search term in list
  const [searchResult, setSearchResult] = useState("");

  //contact here has come from addcontacts.
  const addContactHandler = async (contact) => {
    

    // Check if a contact with the same name or email already exists
    const contactExists = contacts.some(
      (c) => c.name === contact.name && c.email === contact.email
    );
 
    if (contactExists) {
      alert("Contact Already Exists");
    } else {
      // Create a request to store data in the JSON server
      const request = {
        id: uuid(),
        ...contact,
      };

      // Add the contact to the server
      const response = await api.post("/contacts", request);
      console.log(response);

      // Update the contacts array with the new contact
      setContacts([...contacts, response.data]);
    }
  };

  const removeContactHandler = async (id) => {
    //delets the contact in the json server
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      //if the contact id is not equal to the id passesd by user then only we return the contact
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  //here the contact has been passed from editContacts
  const updateContactHandler = async (contact) => {
    const contactExists = contacts.some(
      (c) => c.name === contact.name && c.email === contact.email
    );
 
    if (contactExists) {
      alert("Contact Already Exists");
    } else{
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  }
  useEffect(() => {
    // const retrieveItems=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //   if(retrieveItems) setContacts(retrieveItems)
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);
  //we have got all the letters typed in the seaarchbox in contact list page
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };
  return (
    <div className="ui container">
      <Router>
        <Header />

        <Routes>
          <Route
            exact
            path="/add"
            element={<AddContacts addContactHandler={addContactHandler} />}
          />
          <Route
            exact
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route exact path="/contacts/:id" Component={ContactDetails} />
          <Route
            exact
            path="/edit/:id"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />{" "}
          {/* <Route exact path="/add" Component={()=> <AddContacts addContactHandler={addContactHandler} />}/>
      <Route exact path="/" Component={()=><ContactList contacts={contacts} getContactId={removeContactHandler}/>}/> */}
        </Routes>
      </Router>

      {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />  */}
    </div>
  );
}

export default App;
