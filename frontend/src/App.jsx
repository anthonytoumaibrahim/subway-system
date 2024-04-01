// React stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";

// components
import UserLayout from "./pages/users/UserLayout";
import Home from "./pages/users/Home";
import MyRides from "./pages/users/MyRides";
import Coins from "./pages/users/Coins";
import Chat from "./pages/users/Chat";

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
        <Route path="/" element={<UserLayout/>}>
          <Route index element={<Home/>} />
          <Route path="my-rides" element={<MyRides/>} />
          <Route path="coins" element={<Coins/>} />
          <Route path="chat" element={<Chat/>} />
        </Route>
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
