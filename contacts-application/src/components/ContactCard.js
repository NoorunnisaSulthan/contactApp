import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const ContactCard = (props) => {
  

  const { id, name, email } = props.contact;

  return (
    <div className="contactCard" >
      {/* image retrival */}
      
      <img className="userImage" src={user} alt="user" />
      <div className="content">
        {/* 
        when u click on name and email go to contact page which is unique */}
        <Link to={`/contacts/${id}`}  state={props.contact} >
        <div className="nheader">{name}</div>
        <div>{email}</div>
        </Link>
      </div>
      <div className="icon">
      <Link to={`/edit/${id}`}  state={props.contact} >
      <AiFillEdit className="editIcon" />
      </Link>
      <FaTrash className="trashIcon" onClick={() => props.clickHandler(id)} />
     
      </div>
    </div>
    
  );
};

export default ContactCard;
