import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const LinkLoginReg = () => {
  return (
    <>
      <Link className="link sign-in" to="/sign-in">
        SIGN IN
      </Link>
      <Link className="link sign-up" to="/sign-up">
        SIGN UP
      </Link>
    </>
  );
};

export default LinkLoginReg;
