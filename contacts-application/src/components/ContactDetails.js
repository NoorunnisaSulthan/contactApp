import React from "react";
import user from "../images/user.png";
import{Link, useLocation} from "react-router-dom"


const ContactDetails = () => {
    const loc=useLocation()

const name=loc.state.name;

const email=loc.state.email;




  return (
    
    <div className="main" >
      <div className="ui card centered" style={{marginTop:"100px"}}>
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
