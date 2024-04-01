// Styles
import "../styles/admin.css";
import "./styles.css";

// Components
import Sidebar from "../components/Sidebar";

const Overview = () => {
  return (
    <main className="admin-layout">
      <Sidebar />
      <section className="container"></section>
    </main>
  );
};

export default Overview;
