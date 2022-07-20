import React from "react";
import eyeShow from "./icon/FormIcon/eyeShow.svg";
import eyeNoShow from "./icon/FormIcon/eyeNoShow.svg";
import errorIcon from "./icon/FormIcon/error.svg";

const TextField = ({
  handleBlur,
  handleChange,
  value,
  name,
  touched,
  error,
  title,
  type,
  ChangeType,
}) => {
  return (
    <>
      <p className="text">{title}</p>
      <div className="input_block">
        <input
          type={type}
          className="inputs"
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
        {type === "password" && (
          <img className="icon_eye" src={eyeShow} onClick={ChangeType(name)} />
        )}
        {(name === "password" || name === "confirmPassword") &&
          type === "text" && (
            <img
              className="icon_eye"
              src={eyeNoShow}
              onClick={ChangeType(name)}
            ></img>
          )}
        {touched && error && <p className="error">{error}</p>}
        {touched && error && <img className="error_icon" src={errorIcon} />}
      </div>
    </>
  );
};

export default TextField;
