import './manager.css';
import React from "react";
import "./components/Rides";
import Sidebar from './components/Sidebar';
import './station.css';



const Manager = () =>{
   return(
    <><div className='Station-container flex '>
        
        <Sidebar/>
        <div className='station-info-section flex column gap-20'>
            <h4 className='station-name text-center text-primary'>Station name</h4>

            <table class="station-table white">
          <thead>
            <tr>
              <th>Opening time</th>
              <th>Closing time</th>
              <th>Facilities</th>
              <th>Service status</th>
              <th>Edit</th>
              
            </tr>
          </thead>
          <tbody className='station-data'>
            <td>11:00 AM</td>
            <td>20:00 PM</td>
            <td>Wifi access</td>
            <td>Active</td>
            <td>edit</td>
          </tbody>
        </table>

        </div>
       
    
        
        </div>
    </>
   )
}


export default Manager;