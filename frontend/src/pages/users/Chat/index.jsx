// React stuff
import { useState } from "react";
import { sendRequest } from "../../../core/tools/remote/request";

// styles
import "./style.css";

const Chat = () => {
  return (
    <div className="user-container">
      <section className="chat">
        <div className="chat-users">
          <div className="card card-active">
            <h4 className="name">Station Name</h4>
            <h4 className="role">Manager</h4>
          </div>

          <div className="card">
            <h4 className="name">Station Name</h4>
            <h4 className="role">Manager</h4>
          </div>
        </div>

        <div className="chat-messages">
          <div className="date">12/1/2024</div>
          <div className="message sent-message">
            Hello there! Please help :D
            <span className="time">01:10</span>
          </div>

          <div className="message received-message">
            Hi there! What can I help you with?
            <span className="time">01:12</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
