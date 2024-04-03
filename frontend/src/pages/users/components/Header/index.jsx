import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import "./style.css";

import { useUser } from "../../../../core/hooks/useUser";

// Request
import { sendRequest } from "../../../../core/tools/remote/request";
import { requestMethods } from "../../../../core/enums/requestMethods";

// Context
import { AuthContext } from "../../../../core/contexts/AuthContext";

// Utilities
import { setLocalUser } from "../../../../core/tools/local/user";

import profileImage from "../../../../assets/images/header/profileImage.jpg"


const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { isLoggedIn } = useUser();
  const initialCredentials = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initailtErrors = {
    all: false,
    email: false,
    password: false,
    username: false,
  };

  const location = useLocation();
  const [error, setError] = useState(initailtErrors);
  const [errorMessage, setErrorMessage] = useState(null);
  const [credentials, setcredentials] = useState(initialCredentials);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    resetErrors();
  }, [credentials]);

  const handleInputChange = (value, field) => {
    setcredentials({ ...credentials, [field]: value });
  };

  const resetCredentials = () => {
    setcredentials({ ...initialCredentials });
  };

  const resetErrors = () => {
    setError({ ...initailtErrors });
  };

  const handleSwitch = () => {
    if (isLogin) {
      setIsLogin(false);
      setIsSignup(true);
    } else if (isSignup) {
      setIsLogin(true);
      setIsSignup(false);
    }
    setErrorMessage(null);
    resetErrors();
    resetCredentials();
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const validateRegistration = () => {
    setErrorMessage(null);
    setError(initailtErrors);
    const { username, email, password, confirmPassword } = credentials;
    // Sign up Validation
    if (isSignup) {
      if (username.trim().length < 6) {
        setError({ ...error, username: true });
        setErrorMessage(
          "Please make sure your username is at least 6 characters long."
        );
        return;
      }
      if (password !== confirmPassword) {
        setError({ ...error, password: true });
        setErrorMessage("Passwords does not match.");
        return;
      }
    }
    // Validate email
    if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    ) {
      setError({
        ...error,
        email: true,
      });
      setErrorMessage("Invalid Email.");
      return;
    }
    // Validate password
    if (password.length < 8) {
      setError({
        ...error,
        password: true,
      });
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    auth();
  };

  const auth = () => {
    const authUrl = `/auth/${isLogin ? "login" : "register"}`;
    sendRequest(requestMethods.POST, authUrl, {
      ...credentials,
    })
      .then((response) => {
        const { status } = response.data;
        if (status === "success") {
          const token = response.data.authorization.token;
          const { role_id } = response.data.user;
          const userObject = {
            token: token,
          };
          setUser(userObject);
          setLocalUser(userObject);
          // Redirect if admin or manager
          switch (role_id) {
            case 2:
              navigate("/manager");
              break;
            case 3:
              navigate("/admin");
              break;
            default:
          }
          // Hide login/signup
          setIsLogin(false);
          setIsSignup(false);
        }
      })
      .catch((error) => {
        const { errors, message } = error.response.data;
        setErrorMessage(message ?? "Sorry, something went wrong.");
      });
  };

  return (
    <div className="flex align-center space-between header bg-dark-gray-col">
      {isSignup && (
        <Signup
          credentials={credentials}
          isSignup={isSignup}
          setIsSignup={setIsSignup}
          error={error}
          errorMessage={errorMessage}
          handleInputChange={handleInputChange}
          handleSwitch={handleSwitch}
          validateRegistration={validateRegistration}
        />
      )}
      {isLogin && (
        <Login
          credentials={credentials}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          error={error}
          errorMessage={errorMessage}
          handleInputChange={handleInputChange}
          handleSwitch={handleSwitch}
          validateRegistration={validateRegistration}
        />
      )}

      <h1 className="logo font-bold white">
        Metro<span className="logo text-primary">Hub</span>
      </h1>

      <nav className="flex header-nav">
        <Link to="/" className={`${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>

        <Link
          to="/my-rides"
          className={`${location.pathname === "/my-rides" ? "active" : ""}`}
        >
          My Rides
        </Link>

        <Link
          to="/coins"
          className={`${location.pathname === "/coins" ? "active" : ""}`}
        >
          Coins
        </Link>

        <Link
          to="/chat"
          className={`${location.pathname === "/chat" ? "active" : ""}`}
        >
          Chat
        </Link>
      </nav>

      <div className="flex bold register-btns">
        {isLoggedIn ? (
          <img 
          className="profile-image"
          width={50}
          src={profileImage} 
          alt="profile" />
        ) : (
          <>
            <button
              className="reg-btn bg-primary font-bold white"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              className="reg-btn signup-btn text-primary font-bold"
              onClick={handleSignupClick}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
