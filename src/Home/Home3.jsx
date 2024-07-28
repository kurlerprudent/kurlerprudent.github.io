import React from "react";
import './Home3.css';
import church4 from './church4.jpg'

const Home3 = () => {
    return(
        <div className="app2">

    <div className="content">

      <h1>Youth Music Ministry launched</h1>

      <p>Describe your project here. You may talk about the problem, the objective, and your idea. Expound a bit on how you solved the challenge and how your work helped your organization.</p>


    </div>
    <div className="image-container">
      <img src={church4} alt="Community" />
    </div>
  </div>


    );


};

export default Home3;