import React ,{useRef} from "react";
import{Link} from "react-router-dom"
import ContactCard from "./ContactCard";
import { BiSearchAlt} from "react-icons/bi";


const ContactList = (props) => {

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const inputE1=useRef("");

console.log(props.contacts);
  // ur getting the value of
  const renderContactList = props.contacts.map((contact) => {
  
    return (
      <ContactCard contact={contact}  clickHander={deleteContactHandler} key={contact.id}/>
    );
  });
const getSearchTerm=()=>{
 props.searchKeyword(inputE1.current.value)

}

  return(
    <div className="contactList"  >
       
      <h2 class="cheading"> My Contacts</h2>
      <div className="column">
      <Link to="/add">
          <button className="addContactButton">
           +
          </button>
        </Link>


  <div className="searchbar">
    <input ref={inputE1} type="text" placeholder="   Search contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
    <div className="search"> <BiSearchAlt className="searchIcon"/>

      </div>
  

</div>
</div>
    <div className="ui celled list">{renderContactList} </div>
    </div>
  )
};

export default ContactList;
