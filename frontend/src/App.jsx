// React stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";

// Pages
import Overview from "./pages/admin/Overview";
import ManageBranches from "./pages/admin/ManageBranches";
import CoinRequests from "./pages/admin/CoinRequests";

// Layouts
import AdminLayout from "./pages/admin/AdminLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Overview />} />
          <Route path="manage-branches" element={<ManageBranches />} />
          <Route path="coin-requests" element={<CoinRequests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
