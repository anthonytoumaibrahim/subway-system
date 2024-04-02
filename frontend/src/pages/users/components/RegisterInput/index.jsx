import React from "react";
import "./style.css";

const Input = ({
  id,
  value,
  field,
  placeholder,
  label,
  error,
  handleInputChange,
}) => {
  return (
    <div className="flex column reg-input-wrapper">
      <label className="white " htmlFor={`${id}`}>{`${label}`}</label>
      <input
        value={value}
        className={`bg-dark-gray-col ${
          error ? "red-border" : "black-border"
        } white`}
        type="text"
        placeholder={`${placeholder}`}
        id={`${id}`}
        onChange={(e) => handleInputChange(e.target.value, field)}
      />
    </div>
  );
};

export default Input;
