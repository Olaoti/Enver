import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="middle c-cwl f-f18">
        <div>Support</div>
        <div>Privacy Policy</div>
        <div>Terms and Conditions</div>
      </div>
      <div className="right c-cwl ">© 2020 Enver, All Rights Reserved</div>
    </div>
  );
};

export default Footer;
