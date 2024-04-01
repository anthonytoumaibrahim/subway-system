// React stuff
import { useState } from "react";

// Components
import CoinRequest from "./components/CoinRequest";

// Styles
import "./styles.css";

const CoinRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      username: "Test1",
      amount: 22,
      bank: 1092,
    },
    {
      id: 2,
      username: "Test2",
      amount: 333,
      bank: 11,
    },
    {
      id: 3,
      username: "Test3",
      amount: 10000,
      bank: 8888,
    },
  ]);
  return (
    <>
      <h1>Coin Requests</h1>
      <div className="coin-requests">
        {requests.map((request) => {
          const { id, username, amount, bank } = request;
          return (
            <CoinRequest
              key={id}
              username={username}
              amount={amount}
              bank={bank}
            />
          );
        })}
      </div>
    </>
  );
};

export default CoinRequests;
