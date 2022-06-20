import React from "react";
import logo from "../Assets/logo.png";
import "./Component.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <div className="logoName c-cwb ">Enver</div>
    </div>
  );
};
export default Logo;
