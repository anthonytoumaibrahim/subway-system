// Styles
import "../styles/admin.css";
import "./styles.css";

// Components

const ManageBranches = () => {
  return (
    <>
      <h1>Manage Branches</h1>
      <form action="" className="managers-form">
        <div className="form-inputs-wrapper">
          <input type="text" placeholder="Name" className="admin-input" />
          <input
            type="email"
            placeholder="Manager Email"
            className="admin-input"
          />
        </div>
        <div className="form-inputs-wrapper">
          <input type="text" placeholder="Longtitude" className="admin-input" />
          <input type="text" placeholder="Latitude" className="admin-input" />
        </div>
        <button className="admin-button">Upload Image</button>
        <button className="admin-button admin-button-primary">Add</button>
      </form>
    </>
  );
};

export default ManageBranches;
