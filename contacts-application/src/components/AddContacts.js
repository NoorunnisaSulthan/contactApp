
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContacts = ({ addContactHandler }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('All fields are mandatory');
      return;
    }
// passing to App.js
    addContactHandler({ name, email });
    setName('');
    setEmail('');
    navigate('/');
  };

  return (
    <div className="addContacts" style={{ marginTop: '70px' }}>
      <h2 className='head'>Add Contact</h2>
      <form className="myform" onSubmit={add}>
        <div className='fname'>
          <label className='label'>Name</label>
          <input className='inputBox'
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='fname'>
          <label  className='label'>Email</label>
          <input className='inputBox'
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="addButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContacts;

