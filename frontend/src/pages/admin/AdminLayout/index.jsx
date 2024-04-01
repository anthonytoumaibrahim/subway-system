// React stuff
import { useRef } from "react";
import { Outlet } from "react-router-dom";

// Components
import Sidebar from "../components/Sidebar";

// Styles
import "../styles/admin.css";
import "../styles/animations.css";

// Icons
import sidebar_hamburger from "../../../assets/icons/admin-icons/sidebar-hamburger.svg";

const AdminLayout = () => {
  const sidebarRef = useRef(null);

  return (
    <>
      <main className="admin-layout">
        <button className="sidebar-hamburger">
          <img
            src={sidebar_hamburger}
            alt="Toggle Sidebar"
            onClick={() => (sidebarRef.current.style.display = "flex")}
          />
        </button>
        <Sidebar ref={sidebarRef} />
        <section className="container">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
