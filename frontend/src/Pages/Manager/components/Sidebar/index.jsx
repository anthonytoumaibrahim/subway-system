import '../Rides';
import React from "react";
import { useNavigate } from 'react-router-dom';


const Sidebar=()=>{
    const navigate = useNavigate();
    const handleRidesClick = () => {
        navigate("../Rides"); 
    }
    const handleChatsClick = () => {
        navigate("./Chats"); 
    }
    const handleReveiwsClick =()=>{
        navigate("../Reviews")
    }




    return(
        <>
        <div className='side-bar flex column space-between '>
            <div className='nav-conatiner flex column space-between gap-50 '>
                <h3 className='greeting flex column text-primary space-between'>MetroHub<span className='white'>Hello, Manager's name</span></h3>
                <div className='nav-list flex column space-between white gap-20'>
                    <p className='bg-primary'>Station Info</p>
                    <p onClick={handleRidesClick}>Rides</p>
                    <p onClick={handleChatsClick}>Chats</p>
                    <p onClick={handleReveiwsClick}>Reveiws</p>
                </div>
            </div>
            <button className='logout bg-primary white '>Logout</button>
        </div>
        
        
        </>
    )
}


export default Sidebar;