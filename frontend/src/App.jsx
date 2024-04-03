// React stuff
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";

// components
import UserLayout from "./pages/users/UserLayout";
import Home from "./pages/users/Home";
import MyRides from "./pages/users/Station";
import Coins from "./pages/users/Coins";
import Chat from "./pages/users/Chat";
import Station from "./pages/users/Station";
// import Rides from "./pages/Manager/components/Rides";

// Pages
import Overview from "./pages/admin/Overview";
import ManageBranches from "./pages/admin/ManageBranches";
import CoinRequests from "./pages/admin/CoinRequests";

// Layouts
import AdminLayout from "./pages/admin/AdminLayout";

// Context
import { AuthContext } from "./core/contexts/AuthContext";
import ProtectedRoute from "./core/routes/ProtectedRoute";

// Tools
import { getLocalUser } from "./core/tools/local/user";
import Manager from "./pages/Manager";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rides from "./pages/Manager/components/Rides";

const App = () => {
  const localUser = getLocalUser();
  const [user, setUser] = useState({
    token: localUser.token ?? "",
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
            <Route path="station" element={<Station />} />
            <Route path="coins" element={<Coins />} />
            <Route path="chat" element={<Chat />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute user={user}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<Overview />} />
            <Route path="manage-branches" element={<ManageBranches />} />
            <Route path="coin-requests" element={<CoinRequests />} />
          </Route>

          <Route path="/manager" >
            <Route index element={<Manager/>}/>
            <Route path='Rides' element={<Rides/>}/>
             
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
