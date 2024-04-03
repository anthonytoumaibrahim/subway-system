// React stuff
import { useState, useRef } from "react";

// Icons
import map_icon from "../../../../../assets/icons/admin-icons/map.svg";

// Styles
import "./styles.css";

// Components
import Modal from "../../../components/Modal";
import AdminMap from "../AdminMap";

// Request
import { sendRequest } from "../../../../../core/tools/remote/request";

// Toastify
import { toast } from "react-toastify";

const AddBranch = ({ updateStations = () => {} }) => {
  const [showMap, setShowMap] = useState(false);
  const [errors, setErrors] = useState({});
  const [branchInfo, setBranchInfo] = useState({
    name: "",
    email: "",
    lat: "",
    long: "",
    image: "",
  });

  const buttonRef = useRef(null);

  const handleBranchInfoUpdate = ({
    name = null,
    email = null,
    lat = null,
    long = null,
    image = null,
  }) => {
    setBranchInfo({
      name: name ? name : branchInfo.name,
      email: email ? email : branchInfo.email,
      lat: lat ? lat : branchInfo.lat,
      long: long ? long : branchInfo.long,
      image: image ? image : branchInfo.image,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setErrors({});
    buttonRef.current.disabled = true;
    const data = new FormData();
    data.append("name", branchInfo.name);
    data.append("email", branchInfo.email);
    data.append("latitude", branchInfo.lat);
    data.append("longtitude", branchInfo.long);
    data.append("image", branchInfo.image);

    sendRequest("POST", "/admin/create-station", data)
      .then((response) => {
        const { success, message, station } = response.data;
        if (success === true) {
          updateStations(station);
        }
      })
      .catch((error) => {
        const { errors, message } = error.response.data;
        if (errors) {
          setErrors(errors);
          return;
        }
        toast.error("Sorry, something went wrong...");
      })
      .finally(() => {
        buttonRef.current.removeAttribute("disabled");
      });
  };

  return (
    <>
      <form action="" className="managers-form" onSubmit={handleSubmitForm}>
        <div className="form-inputs-wrapper">
          <input
            type="text"
            placeholder="Name"
            className="admin-input"
            onChange={(e) => handleBranchInfoUpdate({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Manager Email"
            className="admin-input"
            onChange={(e) => handleBranchInfoUpdate({ email: e.target.value })}
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
              src={map_icon}
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
        <div className="upload-wrapper">
          <label htmlFor="upload_image" className="admin-button">
            Upload Image
          </label>
          <input
            type="file"
            id="upload_image"
            onChange={(e) =>
              handleBranchInfoUpdate({
                image: e.target.files[0],
              })
            }
          />
        </div>
        <button className="admin-button admin-button-primary" ref={buttonRef}>
          Add
        </button>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="error-col">
          <p>
            You have errors in your form, please fix them before submitting.
          </p>
          <ul>
            {Object.keys(errors).map((error, index) => (
              <li key={index}>{errors[error][0]}</li>
            ))}
          </ul>
        </div>
      )}

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
