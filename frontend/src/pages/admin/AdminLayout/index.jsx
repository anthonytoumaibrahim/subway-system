import { Outlet } from "react-router-dom";

// Components
import Sidebar from "../components/Sidebar";

// Styles
import "../styles/admin.css";

const AdminLayout = () => {
  return (
    <>
      <main className="admin-layout">
        <Sidebar />
        <section className="container">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
