
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "../store/actions/userActions";
import './../styles/App.css';

const App = () => {
  const { name, email } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleNameChange} 
      />
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={handleEmailChange} 
      />
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  )
}

export default App
