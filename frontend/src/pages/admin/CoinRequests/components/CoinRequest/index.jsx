// Styles
import "./styles.css";

const CoinRequest = ({ username, amount, bank }) => {
  return (
    <div className="coin-request">
      <div className="details">
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Amount:</strong> {amount}
        </p>
        <p>
          <strong>Bank:</strong> {bank}
        </p>
      </div>
      <div className="actions">
        <button className="admin-button admin-button-primary">Accept</button>
        <button className="admin-button">Reject</button>
      </div>
    </div>
  );
};

export default CoinRequest;
