import './manager.css';
import React from "react";
import "./components/Rides";
import Sidebar from './components/Sidebar';
import './station.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { sendRequest } from "../../../../../core/tools/remote/request";

const Manager = () =>{
    // const [stationData, setStationData] = useState(null);
    // const ApiURL= 'http://localhost:8000/api/get-stationInfo?id=1';
    // const getStationInfo=async()=>{
    //     try{
    //         const response = await axios.get(ApiURL);
    //         setStationData(response.data);
    //         console.log(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    
    

   return(
    <><div className='Station-container flex '>
        
        <Sidebar/>
        <div className='station-info-section flex column gap-50'>
            <h4 className='station-name text-center text-primary'>Station name</h4>

            <table className="station-table white">
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
                <td><img src="./manager-icons/edit.icon.png" alt="edit" /></td>
            </tbody>
        </table>

        </div>
       
    
        
        </div>
    </>
   )
}


export default Manager;