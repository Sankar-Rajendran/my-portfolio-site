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
      <a
        href="https://www.linkedin.com/in/sankar-rajendran-36248b49/"
        target="_blank"
      >
        <img src={LinkedInIcon} />
      </a>
    </div>
  );
};

export const ThemeToggle = (props) => {
  const LightThemeButton = () => (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
      <path d="M12.727 3.722A.736.736 0 0011.996 3a.734.734 0 00-.723.722v1.742c0 .39.332.721.723.721a.736.736 0 00.731-.721V3.722zm3.376 3.16a.735.735 0 000 1.02.726.726 0 001.031 0l1.239-1.236a.73.73 0 000-1.028.73.73 0 00-1.015 0l-1.255 1.244zm-9.245 1.02a.724.724 0 001.022 0c.283-.265.283-.746.009-1.02l-1.24-1.244a.748.748 0 00-1.022 0 .743.743 0 00-.008 1.02l1.239 1.244zm5.138-.132c-2.32 0-4.24 1.916-4.24 4.23 0 2.314 1.92 4.239 4.24 4.239 2.311 0 4.232-1.925 4.232-4.239s-1.92-4.23-4.232-4.23zm8.272 4.952c.4 0 .732-.332.732-.722a.736.736 0 00-.732-.722h-1.737a.734.734 0 00-.724.722c0 .39.333.722.724.722h1.737zM3.723 11.278A.734.734 0 003 12c0 .39.333.722.723.722h1.738c.399 0 .732-.332.732-.722a.736.736 0 00-.732-.722H3.723zm13.403 4.828a.74.74 0 00-1.023 0 .735.735 0 000 1.02l1.255 1.244a.73.73 0 001.015-.008.72.72 0 000-1.02l-1.247-1.236zM5.619 17.334a.743.743 0 00-.008 1.02.75.75 0 001.03.008l1.24-1.236a.727.727 0 00.008-1.02.75.75 0 00-1.031 0l-1.24 1.228zm7.108 1.202a.736.736 0 00-.731-.721.734.734 0 00-.723.721v1.742c0 .39.332.722.723.722a.736.736 0 00.731-.722v-1.742z"></path>
    </svg>
  );

  const DarkThemeButton = () => (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="black">
      <path d="M15.977 14.456c-3.839 0-6.294-2.393-6.294-6.217 0-.79.192-1.92.447-2.505a.9.9 0 00.078-.332A.401.401 0 009.79 5c-.078 0-.249.021-.405.078C6.76 6.122 5 8.93 5 11.888 5 16.035 8.179 19 12.337 19c3.058 0 5.705-1.842 6.585-4.142.064-.162.078-.332.078-.395a.437.437 0 00-.419-.438.98.98 0 00-.305.064 7.979 7.979 0 01-2.299.367z"></path>
    </svg>
  );

  return (
    <div style={{ cursor: "pointer" }} onClick={props.toggleTheme}>
      {props.dark ? <LightThemeButton /> : <DarkThemeButton />}
    </div>
  );
};
