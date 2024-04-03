// React stuff
import { useEffect, useState } from "react";

// Components
import CoinRequest from "./components/CoinRequest";

// Styles
import "./styles.css";

import { sendRequest } from "../../../core/tools/remote/request";
import { toast } from "react-toastify";

const CoinRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCoinRequests = () => {
    sendRequest("GET", "/admin/get-coin-requests")
      .then((response) => {
        const { success, coin_requests } = response.data;
        if (success === true) {
          setRequests(coin_requests);
          return;
        }
        toast.error("Sorry, couldn't get coin requests.");
      })
      .catch((error) => {
        toast.error("Sorry, something went wrong.");
      })
      .finally(() => setLoading(false));
  };

  const updateCoinRequest = (id, status = "accept") => {
    sendRequest("POST", "/admin/update-coin-request", {
      request_id: id,
      status: status,
    })
      .then((response) => {
        const { success, message } = response.data;
        if (success === true) {
          setRequests(requests.filter((request) => request.id !== id));
          return toast.success(message);
        }
        toast.error(message);
      })
      .catch((error) => {
        toast.error(
          "Sorry, something went wrong. Couldn't update coin request."
        );
      });
  };

  useEffect(() => {
    getCoinRequests();
  }, []);
  return (
    <>
      <h1>Coin Requests</h1>
      <div className="coin-requests">
        {loading && <p>Please wait, loading...</p>}
        {requests.length === 0 && !loading && <p>No coin requests to show.</p>}
        {requests.map((request) => {
          const { id, amount, user } = request;
          return (
            <CoinRequest
              key={id}
              username={user.username}
              amount={amount}
              bank={user.bank}
              handleRequest={(status) => updateCoinRequest(id, status)}
            />
          );
        })}
      </div>
    </>
  );
};

export default CoinRequests;
