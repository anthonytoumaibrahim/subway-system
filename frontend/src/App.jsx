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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
