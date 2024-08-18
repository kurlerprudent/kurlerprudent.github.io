import React from "react";
import './Home4.css'
import church1 from './church1.jpg'


const Home4 = () => {

    return(
        <div className="contact-section">

        <div className="contact-image">
          <img src={church1} alt="Contact" />

        </div>
        <div className="contact-details">

          <h2>Contact Us</h2>
          <div className="contact-info">

            <div className="address">

              <p>123 Anywhere St.</p>
              <p>Any City, ST 12345</p>
              <p>Ghana</p>

            </div>

            <div className="phone-email">

              <p>Telephone:  (123) 456-7890</p>
              <p>Mobile:  (123) 456-7890</p>
              <p>hello@reallygreatsite.com</p>

            </div>

          </div>

          <div className="social-icons">

            
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href=""><i className="fa fa-instagram"></i></a>

          </div>

        </div>
      </div>
    );
}

export default Home4;