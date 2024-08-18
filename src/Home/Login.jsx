import React, { useState } from 'react';

import './Login.css';


const Login = () => {

    const [userType, setUserType] = useState('member');
    const [credentials, setCredentials] = useState({ username: '', password: '' });
  
    const handleUserTypeChange = (e) => {

      setUserType(e.target.value);

      setCredentials({ username: '', password: '' });
    };
  
    const handleChange = (e) => {

      const { name, value } = e.target;

      setCredentials({ ...credentials, [name]: value });

    };
  
    const handleSubmit = (e) => {

      e.preventDefault();

      alert(`Logging in as ${userType}\nUsername: ${credentials.username}`);
    };
  
    return (

    <div className='container'>
        <div className="login-container">

<h2>Login</h2>

<div className="user-type-selection">

  <label>

    <input
      type="radio"
      value="member"

      checked={userType === 'member'}
      onChange={handleUserTypeChange}
    />
    Member
  </label>

  <label>
    <input
      type="radio"
      value="staff"
      checked={userType === 'staff'}
      onChange={handleUserTypeChange}
    />
    Staff
  </label>

</div>

<form onSubmit={handleSubmit}>
  <div className="form-group">

    <label>Username:</label>

    <input
      type="text"
      name="username"
      value={credentials.username}
      onChange={handleChange}

      required
    />

  </div>

  <div className="form-group">
    <label>Password:</label>
    <input

      type="password"
      name="password"
      value={credentials.password}
      onChange={handleChange}

      required
    />

  </div>

  <button type="submit">Login</button>
  
</form>
</div>

    </div>
    
    );
};

export default Login;
