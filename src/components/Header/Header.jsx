import React from "react";
import logo from "../icon/logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { FormSignIn } from "../FormSignIn/FormSignIn";
import { FormSignUp } from "../FormSignUp/FormSignUp";

import "./Header.css";
import LinkLoginReg from "./LinkLoginReg";

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
            <LinkLoginReg></LinkLoginReg>
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
