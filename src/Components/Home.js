import React from "react";
import himg from "../Assets/himg.png";
import bimg from "../Assets/bimg.png";
const Home = () => {
  return (
    <div className="home">
      <div className="homeTop">
        <div className="left">
          <div className="head c-cwb fw-fw700">Build Your Awesome Platform</div>
          <div className="word c-cwl f-f21 fw-fw400">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </div>
          <div className="btn c-cwb">
            Our Services{" "}
            <span>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 1.5C2 0.947715 2.44772 0.5 3 0.5L11 0.500001C11.5523 0.500001 12 0.947716 12 1.5V9.5C12 10.0523 11.5523 10.5 11 10.5C10.4477 10.5 10 10.0523 10 9.5V3.91421L1.70711 12.2071C1.31658 12.5976 0.683417 12.5976 0.292893 12.2071C-0.0976311 11.8166 -0.0976311 11.1834 0.292893 10.7929L8.58579 2.5L3 2.5C2.44772 2.5 2 2.05228 2 1.5Z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="first"></div>
          <div className="second"></div>
          <img src={himg} alt="" />
        </div>
      </div>
      <div className="homeButt">
        <div className="grid">
          <div className="left headWord">Why Enver Is The Best Choice?</div>
          <div className="word fw-fw400 c-cwl">
            Watch this one minute video so you understand why you should use our
            services!
          </div>
        </div>
        <div className="play">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.74 10.565L0.766135 0.0652675C0.60735 -0.0226937 0.412567 -0.0216833 0.254751 0.0679202C0.0969347 0.157524 -9.82103e-05 0.322198 7.4594e-08 0.500257V21.4997C-9.82103e-05 21.6778 0.0969347 21.8425 0.254751 21.9321C0.412567 22.0217 0.60735 22.0227 0.766135 21.9347L19.74 11.435C19.9007 11.3462 20 11.1801 20 11C20 10.8199 19.9007 10.6538 19.74 10.565Z" />
          </svg>
        </div>
        <img src={bimg} alt="" />
      </div>
    </div>
  );
};

export default Home;
