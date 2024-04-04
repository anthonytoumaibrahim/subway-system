// React stuff
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";

// User Pages
import Home from "./pages/users/Home";
import MyRides from "./pages/users/MyRides";
import Coins from "./pages/users/Coins";
import Chat from "./pages/users/Chat";
import Station from "./pages/users/Station";
import Profile from "./pages/users/Profile";

// Admin Pages
import Overview from "./pages/admin/Overview";
import ManageBranches from "./pages/admin/ManageBranches";
import CoinRequests from "./pages/admin/CoinRequests";

// Layouts
import AdminLayout from "./pages/admin/AdminLayout";
import UserLayout from "./pages/users/UserLayout";

// Context
import { AuthContext } from "./core/contexts/AuthContext";
import ProtectedRoute from "./core/routes/ProtectedRoute";

// Tools
import { getLocalUser } from "./core/tools/local/user";
import Manager from "./pages/Manager";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const localUser = getLocalUser();
  const [user, setUser] = useState({
    token: localUser.token ?? "",
    role_id: localUser.role_id ?? null,
    avatar: localUser.avatar ?? null,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="my-rides" element={<MyRides />} />
            <Route path="station/:id" element={<Station />} />
            <Route path="coins" element={<Coins />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute role={3}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<Overview />} />
            <Route path="manage-branches" element={<ManageBranches />} />
            <Route path="coin-requests" element={<CoinRequests />} />
          </Route>

          <Route path="/manager" element={<Manager />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
