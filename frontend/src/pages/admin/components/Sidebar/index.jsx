// React stuff
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../../../core/hooks/useUser";

// Styles
import "./styles.css";

// Icons
import close_icon from "../../../../assets/icons/admin-icons/close.svg";

const Sidebar = forwardRef((props, ref) => {
  const { logout } = useUser();
  const location = useLocation();
  return (
    <aside className="admin-aside slideInLeft" id="admin-sidebar" ref={ref}>
      <img
        src={close_icon}
        alt=""
        className="close-button"
        onClick={() => ref.current.style.removeProperty("display")}
      />

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
        <button
          className="admin-button admin-button-primary"
          onClick={() => logout()}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
});

export default Sidebar;
