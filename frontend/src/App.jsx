// React stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />

        <Route path="/managers">
          <Route path="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
