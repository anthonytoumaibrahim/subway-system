// React stuff
import { useContext, useEffect, useState } from "react";
import { sendRequest } from "../../../core/tools/remote/request";
import { toast } from "react-toastify";

// Components
import CoinRequestForm from "./components/CoinRequestForm";

// Styles
import "./styles.css";

import profileImage from "../../../assets/icons/admin-icons/subway.svg";
import { setLocalUser } from "../../../core/tools/local/user";
import { AuthContext } from "../../../core/contexts/AuthContext";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    email: "",
    image_url: "",
    bank: 0,
    last_coin_request: {},
  });

  const getProfile = () => {
    sendRequest("GET", "/get-profile")
      .then((response) => {
        const { success, user } = response.data;
        if (!success) {
          throw new Error("Failed to fetch profile.");
        }
        const { username, email, bank, image_url } = user;
        setProfileInfo({
          username: username,
          email: email,
          bank: bank,
          image_url: image_url,
        });
      })
      .catch((error) => {
        toast.error("Sorry, something went wrong: " + error);
      });
  };

  const handleImageUpload = (file) => {
    const data = new FormData();
    data.append("image", file);
    sendRequest("POST", "/upload-pfp", data)
      .then((response) => {
        const { success, image } = response.data;
        if (!success) {
          throw new Error("Failed to upload image.");
        }
        setProfileInfo({
          ...profileInfo,
          image_url: image,
        });
        setUser({
          ...user,
          avatar: image,
        });
        setLocalUser({
          ...user,
          avatar: image,
        });
      })
      .catch((error) => {
        toast.error("Sorry, something went wrong: " + error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="user-container user-coin-container flex">
      <div className="user-info">
        <img
          className="profile-image-full"
          src={profileInfo.image_url ?? profileImage}
          alt="profile"
        />
        <h1>{profileInfo.username}</h1>
        <h4>{profileInfo.email}</h4>
        <div className="pfp-upload-wrapper">
          <label
            htmlFor="upload_image"
            className="reg-btn bg-primary font-bold white text-center"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="upload_image"
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
        </div>
      </div>

      <div className="coin-requests">
        <div className="coin-info">
          <div className="coin-balance bg-dark-gray-col">
            <h3>Balance</h3>
            <h1 className="text-primary">{profileInfo.bank} Coins</h1>
          </div>

          <div className="coin-form bg-dark-gray-col">
            <h3>Request Coins</h3>
            <CoinRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
