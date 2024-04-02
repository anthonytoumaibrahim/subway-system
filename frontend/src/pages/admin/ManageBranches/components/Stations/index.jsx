import React, { useEffect, useState } from "react";
import { sendRequest } from "../../../../../core/tools/remote/request";

// Styles
import "./styles.css";

const Stations = () => {
  const [allStations, setAllStations] = useState([]);
  // Get stations
  const getStations = () => {
    sendRequest("GET", "/admin/get-stations").then((response) => {
      const { stations } = response.data;
      setAllStations(stations);
    });
  };
  useEffect(() => getStations(), []);

  return (
    <table className="stations-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Location</th>
          <th>Manager</th>
          <th>Remove</th>
          <th>Deactivate</th>
        </tr>
      </thead>
      <tbody>
        {allStations.map((station) => {
          const { id, name, status, longtitude, latitude, manager_id } =
            station;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{status}</td>
              <td>
                {latitude}, {longtitude}
              </td>
              <td>{manager_id}</td>
              <td>
                <button>Remove</button>
              </td>
              <td>
                <button>Deactivate</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Stations;
