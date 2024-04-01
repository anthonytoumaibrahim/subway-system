// React stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route path="/managers">
          <Route path="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
