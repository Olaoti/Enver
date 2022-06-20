import React from "react";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";

const Project = () => {
  return (
    <div className="project">
      <div className="headWord">Our Awesome Portfolio</div>
      <div className="images">
        <div>
          <img src={img1} alt="one of the portfolio " />
        </div>
        <div>
          <img src={img2} alt="one of the portfolio " />
        </div>
        <div>
          <img src={img3} alt="one of the portfolio " />
        </div>
      </div>
    </div>
  );
};

export default Project;
