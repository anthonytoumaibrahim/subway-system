import React from "react";
import Input from "../RegisterInput";
import "./style.css";

const Login = ({
  credentials,
  validateRegistration,
  setIsLogin,
  error,
  errorMessage,
  handleInputChange,
  handleSwitch,
}) => {
  return (
    <div
      id="popup-container"
      className="flex center popup-container"
      onMouseDown={(e) => {
        if (e.target.id === "popup-container") {
          setIsLogin(false);
        }
      }}
    >
      <div className="flex column align-center popup-wrapper bg-gray-col">
        <h1 className="white">Login</h1>

        <Input
          id="email"
          placeholder={"john@hmail.com"}
          label={"Email"}
          handleInputChange={handleInputChange}
          field={"email"}
          error={error.email ? true : false}
          value={credentials.email}
        />

        <div className="error-div">
          <Input
            id="password"
            placeholder={"*******"}
            label={"Password"}
            handleInputChange={handleInputChange}
            field={"password"}
            error={error.password ? true : false}
            value={credentials.password}
          />
          {errorMessage && <p className="error-col">{errorMessage}</p>}
        </div>

        <button
          className="login-btn bg-primary font-bold white"
          onClick={validateRegistration}
        >
          Login
        </button>

        <p className="white">
          Don't have an account?
          <span
            className="reg-switch text-primary font-bold"
            onClick={handleSwitch}
          >
            {" "}
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
