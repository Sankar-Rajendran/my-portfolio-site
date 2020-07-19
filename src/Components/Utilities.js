import React from "react";
import GithubIcon from "../images/github.svg";
import TwitterIcon from "../images/twitter.svg";
import LinkedInIcon from "../images/linkedin.svg";
import "./Utilities.scss";

export const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">         
      <a href="https://github.com/Sankar-Rajendran" target="_blank">
        <img src={GithubIcon} />
      </a>
      <a href="https://twitter.com/sankar_rajmen" target="_blank">
        <img src={TwitterIcon} />
      </a>
      <a href="https://www.linkedin.com/in/sankar-rajendran-36248b49/" target="_blank">
        <img src={LinkedInIcon} />
      </a>
    </div>
  );
};
