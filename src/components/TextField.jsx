import React from "react";

const TextField = ({handleBlur, handleChange, value, name, touched, error, title, type}) => {
  return (
    <>
      <p className="text">{title}</p>
      <input
        type={type || "text"}
        className="inputs"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {touched && error && <p>{error}</p>}
    </>
  );
};

export default TextField;
