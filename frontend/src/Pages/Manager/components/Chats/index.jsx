import React from "react";
import "../../manager.css"
import Sidebar from '../Sidebar';
import '../../station.css';


const Chats = ()=>{
    return(
        <>
        <div className='chat-container flex '>
        
            <Sidebar/>
            <div className='station-info-section flex column gap-50'>
                <h4 className='station-name text-center text-primary'>Station name</h4>
                <div className="chat-info">
                    <div className="passenger's-list">
                        <div className="chat-layout">
                        <h4>Passengers in station:</h4>
                        <ul>
                            <li>passenger name</li>
                            <li>passenger name</li>
                            <li>passenger name</li>
                            <li>passenger name</li>
                            <li>passenger name</li>
                        </ul>
                        <div>
                        

                        </div>
                        


                    </div>
                        </div>
                </div>
                
            </div>
        </div>

        </>
    )

}
    
export default Chats;