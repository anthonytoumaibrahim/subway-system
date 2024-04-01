// React stuff
import { Link, useLocation } from "react-router-dom";

// Styles
import "./styles.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="admin-aside">
      <div className="intro">
        <h1 className="text-primary">MetroHub</h1>
        <p>Hello, Admin!</p>
      </div>
      <nav className="admin-nav">
        <Link
          to="/admin"
          className={`nav-link ${
            location.pathname === "/admin" ? "active" : ""
          }`}
        >
          Subway System
        </Link>
        <Link
          to="/admin/manage-branches"
          className={`nav-link ${
            location.pathname === "/admin/manage-branches" ? "active" : ""
          }`}
        >
          Manage Branches
        </Link>
        <Link
          to="/admin/coin-requests"
          className={`nav-link ${
            location.pathname === "/admin/coin-requests" ? "active" : ""
          }`}
        >
          Coin Requests
        </Link>
        <Link to="" className="admin-button admin-button-primary">
          Logout
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
