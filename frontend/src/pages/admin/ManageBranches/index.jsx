// React stuff
import { useState, useEffect } from "react";
import { sendRequest } from "../../../core/tools/remote/request";

// Styles
import "./styles.css";

// Components
import AddBranch from "./components/AddBranch";

// Toastify
import { toast } from "react-toastify";

const ManageBranches = () => {
  const [stations, setStations] = useState([]);

  const getStations = () => {
    sendRequest("GET", "/admin/get-stations")
      .then((response) => {
        const { stations } = response.data;
        setStations(stations);
      })
      .catch((error) => {
        toast.error("Sorry, something went wrong, couldn't fetch stations.");
      });
  };

  const handleDelete = (id) => {
    sendRequest("POST", "/admin/delete-station", {
      station_id: id,
    })
      .then((response) => {
        const { success } = response.data;
        if (success === true) {
          setStations(stations.filter((station) => station.id !== id));
          toast.success("Station deleted successfully.");
        } else {
          toast.error("Couldn't delete station.");
        }
      })
      .catch((error) => {
        toast.error("Sorry, something went wrong...");
      });
  };

  const handleActivate = (id, status) => {
    sendRequest("POST", "/admin/activate-station", {
      station_id: id,
      status: status,
    })
      .then((response) => {
        const { success } = response.data;
        if (success === true) {
          setStations(
            stations.map((station) =>
              station.id === id
                ? {
                    ...station,
                    status: status,
                  }
                : station
            )
          );
        } else {
          toast.error("Couldn't update station.");
        }
      })
      .catch((error) => {
        toast.error("Sorry, something went wrong...");
      });
  };

  useEffect(() => getStations(), []);

  return (
    <>
      <h1>Manage Branches</h1>

      <AddBranch
        updateStations={(station) => setStations([...stations, station])}
      />
      <div className="table-container">
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
                    <button
                      onClick={() => handleDelete(id)}
                      className="admin-button action-button action-button-delete"
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    <button
                      className="admin-button action-button"
                      onClick={() =>
                        handleActivate(
                          id,
                          status === "active" ? "not_active" : "active"
                        )
                      }
                    >
                      {status === "active" ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageBranches;
