import React from "react";
import church3 from './church3.jpg'
import './Home2.css'

const Home2 = () => {

   return(
    <div className="app1">
    <div className="left-side">
      <h1>New community center envisioned to bring congregation closer together</h1>
      <img src={church3} alt="Community" />
    </div>
    <div className="right-side">
      <p>
        paragraph1
      </p>
      <p>
       Paragraph2
      </p>
    </div>
  </div>
   );



};


export default Home2;
