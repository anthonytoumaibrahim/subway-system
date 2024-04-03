import { useState, useRef } from "react";
import { sendRequest } from "../../../../../core/tools/remote/request";
// Styles
import "./styles.css";

import { toast } from "react-toastify";

const CoinRequestForm = () => {
  const [amount, setAmount] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    buttonRef.current.disabled = true;
    sendRequest("POST", "/send-coin-request", {
      amount: amount,
    })
      .then((response) => {
        const { success, message } = response.data;
        if (!success) {
          toast.error(message);
          return;
        }
        toast.success("Sent request successfully.");
      })
      .catch((error) => {
        toast.error("Sorry, something went wrong.");
      })
      .finally(() => {
        buttonRef.current.disabled = false;
      });
  };

  const buttonRef = useRef(null);

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input
        type="number"
        placeholder="Amount"
        className="coin-request-input"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="reg-btn bg-primary font-bold white text-center"
        ref={buttonRef}
      >
        Submit
      </button>
    </form>
  );
};

export default CoinRequestForm;
