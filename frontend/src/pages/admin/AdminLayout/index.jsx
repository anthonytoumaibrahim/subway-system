// Components
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <main className="admin-layout">
        <Sidebar />
        <section className="container">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
