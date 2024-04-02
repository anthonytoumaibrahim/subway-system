import React from "react";
import '../manager.css';
import Sidebar from '../Sidebar';
import '../station.css';

const Rides = () => {
   return ( 
     <div className='Station-container flex'>
       <Sidebar /> 
       <div className='station-info-section flex column'>
         <h4 className='station-name text-center text-primary'>Station name</h4>
         <div className="ride-inputs flex">
           <div className="ride-info flex column">
             <input type="text" name="destination" placeholder="Destination" />
             <input type="text" name="price" placeholder="Price" />
           </div>
           <div className="Departure flex column">
             <input type="date" name="departure date" placeholder="Departure date" />
             <input type="time" name="departure time" placeholder="Departure time" />
           </div>
           <div className="Arrival flex column">
             <input type="date" name="arrival date" placeholder="Arrival date" />
             <input type="time" name="arrival time" placeholder="Arrival time" />
           </div>
           <button type="submit">Add</button>
         </div>
         <table className="ride-table white">
           <thead>
             <tr>
               <th>Ride number</th>
               <th>Ride start</th>
               <th>Ride end</th>
               <th>Edit</th>
             </tr>
           </thead>
           <tbody className='station-data'>
             <tr>
               <td>46</td>
               <td>11:00 AM</td>
               <td>20:00 PM</td>
               <td><img src="./manager-icons/edit.icon.png" alt="edit" /></td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   );
 }
 export default Rides;