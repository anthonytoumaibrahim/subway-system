import { useState, useEffect } from "react";
import "./style.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import UserMap from "./components/Map";
import Guidline from "./components/Guidlines";
import Reviews from "./components/Reviews";
import NearestStations from "./components/NearestStations";

import { sendRequest } from "../../../core/tools/remote/request";

const Home = () => {
  const [stations, setStations] = useState([]);

  const getStations = () => {
    sendRequest("GET", "/get-stations")
      .then((response) => {
        const data = response.data;
        if (data.status === "success") {
          setStations(data.stations);
        }
      })
      .catch((error) => {
        console.error("Error fetching stations:", error);
      });
  };

  useEffect(() => {
    getStations();
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <div className="separator-div"></div>
      <NearestStations stations={stations} />
      <UserMap stations={stations} />

      <Guidline />
      {/* <Reviews/> */}
    </div>
  );
};

export default Home;
