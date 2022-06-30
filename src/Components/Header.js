import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuClick, setMenuClick] = useState(false);
  return (
    <div className="header">
      <div className="phonehead">
        <div className="left">
          <Logo />
        </div>
        <div
          className={menuClick ? "rightnope" : "rightside"}
          onClick={() => {
            setMenuClick(!menuClick);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        className={
          menuClick
            ? "middle show f-fw400 f-f18 c-cwl"
            : "middle none f-fw400 f-f18 c-cwl"
        }
      >
        <div>Home</div>
        <div>Services</div>
        <div>Our project</div>
        <div>About us</div>
        <div className="phone c-cwb">Contact us</div>
      </div>

      <div className="right pc c-cwb">Contact us</div>
    </div>
  );
};

export default Header;
