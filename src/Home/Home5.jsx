import React from "react";

import './Home5.css';


const Home5 = () => {

    return(
        <div className="schedule-container">

        <h2>Schedule of Events</h2>
        <table className="schedule-table">

          <thead>

            <tr>

              <th>Time</th>
              <th>Session</th>
              <th>Presider</th>

            </tr>

          </thead>

          <tbody>
            <tr>

              <td>9:00 AM</td>
              <td>Morning Service and Fellowship</td>
              <td>Einat Sharon</td>

            </tr>

            <tr>

              <td>10:00 AM</td>
              <td>Session or seminar title</td>
              <td>Name of Speaker</td>

            </tr>

            <tr>

              <td>4:00 PM</td>
              <td>Session or seminar title</td>
              <td>Name of Speaker</td>

            </tr>

            <tr>

              <td>6:00 PM</td>
              <td>Session or seminar title</td>
              <td>Name of Speaker</td>

            </tr>
            
          </tbody>
        </table>
      </div>

    );
};



export default Home5;