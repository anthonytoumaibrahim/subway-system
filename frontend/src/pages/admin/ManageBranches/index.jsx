// Styles
import "./styles.css";

// Components
import AddBranch from "./components/AddBranch";
import Stations from "./components/Stations";

const ManageBranches = () => {
  return (
    <>
      <h1>Manage Branches</h1>

      <AddBranch />

      <Stations />
    </>
  );
};

export default ManageBranches;
