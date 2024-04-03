// React stuff
import { useState } from "react";

// Components
import Button from "../../../components/Button";

// Styles
import "./styles.css";

import profileImage from "../../../assets/images/header/profileImage.jpg";

const Profile = () => {
  return (
    <div className="user-container user-coin-container flex">
      <div className="user-info">
        <img
          className="profile-image"
          width={200}
          src={profileImage}
          alt="profile"
        />
        <h1>username</h1>
        <h4>johndoe@email.com</h4>
        <Button name="Upload Image" />
      </div>

      <div className="coin-requests">
        <div className="coin-info">
          <div className="coin-balance bg-dark-gray-col">
            <h3>Balance</h3>
            <h1 className="text-primary">1234 Coins</h1>
          </div>

          <div className="coin-form bg-dark-gray-col">
            <h3>Request Coins</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
