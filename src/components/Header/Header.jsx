import React from "react";
import logo from "../icon/logo.svg";
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import { FormSignIn } from "../FormSignIn/FormSignIn";
import { FormSignUp } from "../FormSignUp/FormSignUp";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="contain">
          <div>
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="nav">
            <Link className="link sign-in" to="/sign-in">
              SIGN IN
            </Link>
            <Link className="link sign-up" to="/sign-up">
              SIGN UP
            </Link>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<FormSignIn />} />
        <Route path="/sign-up" element={<FormSignUp />} />
      </Routes>
    </>
  );
};

export default Header;
