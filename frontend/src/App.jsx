// React stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./Pages/Manager";
import Manager from "./Pages/Manager";
import './Pages/Manager/manager.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Landing Page</>} />

        <Route path="/manager" element={<Manager/>}/>
          
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
