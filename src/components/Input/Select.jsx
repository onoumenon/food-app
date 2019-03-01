import React from "react";

function Select({ name, options, keyName, handleChange }) {
  const propertyName = `${name.replace(/\s/, "-").toLowerCase()}`;

  return (
    <div className="form-group">
      <label htmlFor={propertyName}>{name}</label>
      <select
        onChange={handleChange}
        className="form-control"
        id={propertyName}
        name={keyName}
      >
        <option disabled>Choose One</option>
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
