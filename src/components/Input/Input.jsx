import React from "react";

function Input({ name, type, handleChange }) {
  const propertyName = `${name.replace(/\s/, "-").toLowerCase}`;

  const camelCased = propertyName.replace(/-([a-z])/g, g => {
    return g[1].toUpperCase();
  });

  return (
    <div className="form-group justify-content-middle">
      <label htmlFor={propertyName}>{name}</label>
      <input
        className="form-control"
        onChange={handleChange}
        type={type}
        id={propertyName}
        name={camelCased}
      />
    </div>
  );
}

export default Input;
