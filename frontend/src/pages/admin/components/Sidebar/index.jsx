// React stuff
import { forwardRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../core/contexts/AuthContext";
import { removeLocalUser } from "../../../../core/tools/local/user";
import { toast } from "react-toastify";

// Styles
import "./styles.css";

// Icons
import close_icon from "../../../../assets/icons/admin-icons/close.svg";

const Sidebar = forwardRef((props, ref) => {
  const { user, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    removeLocalUser();
    setUser({
      token: "",
    });
    toast.success("You have been logged out successfully.");
    navigate("/");
  };
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
