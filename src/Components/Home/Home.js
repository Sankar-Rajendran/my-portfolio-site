import React from "react";
import { SocialMediaIcons } from "./../Utilities";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-about-part">
        <p className="role-title">Hello there..!!</p>
        <h1>
          I am Sankar Rajendran.<span className="blinker">|</span>
        </h1>
        <p className="role-title">Senior Frontend Developer</p>
        <div className="social-icons-container">
          <SocialMediaIcons />
        </div>
      </div>
      <div className="home-image-part"></div>
    </div>
  );
};

export default Home;
