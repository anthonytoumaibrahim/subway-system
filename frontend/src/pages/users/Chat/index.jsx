// React stuff
import React, { useEffect, useState, useRef } from "react";
import { sendRequest } from "../../../core/tools/remote/request";
import { toast } from "react-toastify";

// styles
import "./style.css";

const Chat = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [stations, setStations] = useState([]);
  const [chatLog, setChatLog] = useState({});
  const [inputMessage, setInputMessage] = useState("");

  const getStations = () => {
    sendRequest("GET", "/chat/get-stations")
      .then((response) => {
        const { stations } = response.data;
        if (!stations) {
          toast.error("Couldn't get stations.");
          return;
        }
        setStations(stations);
      })
      .catch((error) => {
        toast.error("Couldn't get stations.");
      });
  };

  const getChats = (station_id) => {
    sendRequest("POST", "/chat/get-chats", {
      station_id: station_id,
    })
      .then((response) => {
        setChatLog(response.data.chats);
      })
      .catch((error) => {
        toast.error("Sorry, couldn't get chats for this station.");
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    btnRef.current.disabled = true;
    sendRequest("POST", "/chat/send-message", {
      message: inputMessage,
      station_id: selectedStation,
    })
      .then((response) => {
        const { success, message, chat } = response.data;
        if (success) {
          getChats(selectedStation);
          setInputMessage("");
          toast.success(message);
        }
      })
      .catch((error) => {
        const { message } = error.response.data;
        toast.error(message ?? "Sorry, your message could not be sent.");
      })
      .finally(() => {
        btnRef.current.disabled = false;
      });
  };

  const btnRef = useRef(null);

  useEffect(() => {
    getStations();
  }, []);

  useEffect(() => {
    if (selectedStation !== null) {
      getChats(selectedStation);
    }
  }, [selectedStation]);
  return (
    <div className="user-container">
      <section className="chat">
        <div className="chat-users">
          {stations.map((station) => {
            const { id, name, manager } = station;
            return (
              <div
                className={`card ${
                  selectedStation === id ? "card-active" : ""
                }`}
                onClick={() => setSelectedStation(id)}
                key={id}
              >
                <h4 className="name">{name}</h4>
                <h4 className="role">{manager.username}</h4>
              </div>
            );
          })}
        </div>

        <div className="chat-messages">
          {Object.keys(chatLog).length === 0 && (
            <p>You have no chats with this station. Send a message now!</p>
          )}
          {Object.keys(chatLog).map((date) => {
            const messages = chatLog[date];
            return (
              <React.Fragment key={date}>
                <div className="date">{date}</div>
                {messages.map((message) => {
                  return (
                    <div
                      className={`message ${
                        message.reply ? "received-message" : "sent-message"
                      }`}
                      key={message.id}
                    >
                      {message.message}
                      <span className="time">{message.time}</span>
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}

          <form action="" className="message-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="message-input"
              placeholder="Enter your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button className="admin-button admin-button-primary" ref={btnRef}>
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Chat;
