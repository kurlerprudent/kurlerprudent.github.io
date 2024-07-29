import React, { useState } from 'react';

import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [number, setNumber] = useState('');

  

  const handleSubmit = (e) => {

    e.preventDefault();
    
    console.log({ name, email, password, number });
  };

  return (
    <div className="registration-container">

      <form className="registration-form" onSubmit={handleSubmit}>

        <h2 className='reg'>Register</h2>
        
        <div className="form-group">

          <label>Name</label>

          <input className='input'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input className='input'

            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        </div>

        <div className="form-group">
          <label>Phone Number</label>

          <input className='input'
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />

        </div>


        <div className="form-group">
          <label >Password</label>
          <input className='input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">

          <label>Confirm Password</label>
          <input className='input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Link to='/dashboard' style={{textDecoration:'none', color:'inherit'}}><button type="submit">Confirm Registration</button></Link>
      </form>
    </div>
  );
};

export default Register;