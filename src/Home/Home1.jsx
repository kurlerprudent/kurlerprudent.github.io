import React from "react";
import church2 from './church2.jpg'
import { Link } from "react-router-dom"; 

import './Home1.css';
const Home1 = () => {

return(
<div className="app">

<div className="content">

  <h1>Christ Commonwealth Community</h1>

  <h2>Parish Community Center <span>Opens</span></h2>

  <p>Add a supporting line that complements your statement above.</p>

  <div className="buttons">

        <Link to='/Log in'>
            <button className="signin">Sign in</button>
        </Link>

        <Link to='/Register'>
             <button className="register">Register</button>
        </Link>
   
  </div>

</div>
<div className="image-container">
  <img src={church2} alt="Community" />

</div>



</div>

);


};


export default Home1;