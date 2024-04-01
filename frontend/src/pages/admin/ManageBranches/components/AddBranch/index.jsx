// React stuff
import { useState } from "react";

// Icons
import location_icon from "../../../../../assets/icons/admin-icons/location.svg";

// Components
import Modal from "../../../components/Modal";
import AdminMap from "../AdminMap";

const AddBranch = () => {
  const [showMap, setShowMap] = useState(false);

  const [branchInfo, setBranchInfo] = useState({
    name: "",
    email: "",
    lat: "",
    long: "",
  });

  const handleBranchInfoUpdate = ({
    name = null,
    email = null,
    lat = null,
    long = null,
  }) => {
    setBranchInfo({
      name: name ? name : branchInfo.name,
      email: email ? email : branchInfo.email,
      lat: lat ? lat : branchInfo.lat,
      long: long ? long : branchInfo.long,
    });
  };

  return (
    <>
      <form action="" className="managers-form">
        <div className="form-inputs-wrapper">
          <input type="text" placeholder="Name" className="admin-input" />
          <input
            type="email"
            placeholder="Manager Email"
            className="admin-input"
          />
        </div>
        <div className="form-inputs-wrapper">
          <div className="location-input-wrapper">
            <input
              type="text"
              placeholder="Longtitude"
              className="admin-input"
              value={branchInfo.long}
              onChange={(e) =>
                handleBranchInfoUpdate({
                  long: e.target.value,
                })
              }
            />
            <img
              src={location_icon}
              alt=""
              className="location-selector"
              onClick={() => setShowMap(!showMap)}
            />
          </div>
          <div className="location-input-wrapper">
            <input
              type="text"
              placeholder="Latitude"
              className="admin-input"
              value={branchInfo.lat}
              onChange={(e) =>
                handleBranchInfoUpdate({
                  lat: e.target.value,
                })
              }
            />
          </div>
        </div>
        <button className="admin-button">Upload Image</button>
        <button className="admin-button admin-button-primary">Add</button>
      </form>

      {showMap && (
        <Modal title="Select Location" handleClose={() => setShowMap(false)}>
          <AdminMap
            markerLatLong={[branchInfo.lat, branchInfo.long]}
            updateCoords={(coords) =>
              handleBranchInfoUpdate({
                lat: coords[0],
                long: coords[1],
              })
            }
          />
        </Modal>
      )}
    </>
  );
};

export default AddBranch;
