import '../Rides';
import '../Chats/index';
import '../ManagerReviews';
import React from "react";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



const Sidebar=()=>{

    const [activeLink, setActiveLink] = useState('Station Info');

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    }

    return(
        <>
        <div className='side-bar flex column space-between '>
            <div className='nav-conatiner flex column space-between gap-50 '>
                <h3 className='greeting flex column text-primary space-between'>MetroHub<span className='white'>Hello Manager !</span></h3>
                <div className='nav-list flex column space-between white gap-20'>
                    <NavLink to= "/manager" className={` ${activeLink === 'Station Info' ? 'active' : ''}`} onClick={() => handleNavLinkClick('Station Info')}>Station Info</NavLink>
                    <NavLink to="/manager/Rides" className={` ${activeLink === 'Rides' ? 'active' : ''}`} onClick={() => handleNavLinkClick('Rides')}>Rides</NavLink>
                    <NavLink to="/manager/Chats" className={` ${activeLink === 'Chats' ? 'active' : ''}`} onClick={() => handleNavLinkClick('Chats')}>Chats</NavLink>
                    <NavLink to="/manager/ManagerReviews" className={` ${activeLink === 'ManagerReviews' ? 'active' : ''}`} onClick={() => handleNavLinkClick('ManagerReviews')}>Reviews</NavLink>
                </div>
            </div>
            <button className='logout bg-primary white '>Logout</button>
        </div>
        
        
        </>
    )
}


export default Sidebar;