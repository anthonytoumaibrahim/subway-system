// Styles
import "./styles.css";

const Modal = ({ title = "", children, handleClose = () => {} }) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={handleClose}></div>
      
      <div className="content">
        <h1 className="title">{title}</h1>
        {children}

        <div className="actions">
          <button className="admin-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
