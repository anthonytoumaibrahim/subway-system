// React stuff
import { useEffect, useState } from "react";
import { sendRequest } from "../../../core/tools/remote/request";
import { toast } from "react-toastify";

// styles
import "./style.css";

const Chat = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [stations, setStations] = useState([]);
  const [chatLog, setChatLog] = useState([
    
  ]);

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

  const getChats = (station_id) => {};

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
                <h4 className="role">{manager.name}</h4>
              </div>
            );
          })}
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

          <form action="" className="message-form">
            <input
              type="text"
              className="message-input"
              placeholder="Enter your message..."
            />
            <button className="admin-button admin-button-primary">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Chat;
