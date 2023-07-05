// import React, { useState} from 'react';

// const AddContact = ({ addContactHandler }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const add = (e) => {
//     e.preventDefault();
//     if (name === "" || email === "") {
//       alert("All fields mandatory");
//       return;
//     }
  
//     addContactHandler({ name, email });
//     //it will reset ur value in input field to empty after u submit
//     
//   };



//   return (
//     <div className="ui main" style={{ marginTop: '70px' }}>
//       <h2>Add Contact</h2>
//       <form className="ui form" onSubmit={add}>
//         <div className="field">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="field">
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button className="ui button blue">Add</button>
//       </form>
//     </div>
//   );
// };

// export default AddContact;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import{ useLocation} from "react-router-dom"

const EditContact = ({ updateContactHandler }) => {
    const loc=useLocation()
    console.log(loc);
    const [id, setId] = useState(loc.state.id);
    const [name, setName] = useState(loc.state.name);
    const [email, setEmail] = useState(loc.state.email);

    const navigate = useNavigate();

  const  update = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('All fields are mandatory');
      return;
    }
// passing to App.js
    updateContactHandler({ id,name, email });
    setName('');
    setEmail('');
    navigate('/');
  };

  return (
    <div className="ui main" style={{ marginTop: '70px' }}>
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContact;

