// React stuff
import { useState, useEffect } from "react";
import { sendRequest } from "../../../core/tools/remote/request";

// Styles
import "./styles.css";

// Components
import AddBranch from "./components/AddBranch";

const ManageBranches = () => {
  const [stations, setStations] = useState([]);
  const [error, setError] = useState(null);

  const getStations = () => {
    sendRequest("GET", "/admin/get-stations").then((response) => {
      const { stations } = response.data;
      setStations(stations);
    });
  };

  const handleDelete = (id) => {
    setError(null);
    sendRequest("POST", "/admin/delete-station", {
      station_id: id,
    })
      .then((response) => {
        const { success } = response.data;
        if (success === true) {
          setStations(stations.filter((station) => station.id !== id));
        }
      })
      .catch((error) => {
        setError("Couldn't delete station.");
        console.log(error);
      });
  };

  useEffect(() => getStations(), []);

  return (
    <>
      <h1>Manage Branches</h1>

      <AddBranch
        updateStations={(station) => setStations([...stations, station])}
      />
      {error && <p className="error-col">{error}</p>}
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
          {stations.map((station) => {
            const { id, name, status, longtitude, latitude, manager } = station;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{status}</td>
                <td>
                  {latitude}, {longtitude}
                </td>
                <td>{manager?.username ?? "Not signed up yet"}</td>
                <td>
                  <button onClick={() => handleDelete(id)}>Remove</button>
                </td>
                <td>
                  <button>Deactivate</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ManageBranches;
