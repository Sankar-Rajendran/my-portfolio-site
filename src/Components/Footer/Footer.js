import React from "react";
import { SocialMediaIcons } from "./../Utilities";
import FooterDarkImage from "./../../images/footer-dark.svg";
import FooterLightImage from "./../../images/footer-light.svg";
import { ThemeContext } from "../../Theme";
import "./Footer.scss";

const Footer = () => {
  const { dark, theme } = React.useContext(ThemeContext);

  const bgColor = dark ? theme.color : theme.backgroundColor;
  const color = dark ? theme.backgroundColor : theme.color;
  const containerBgColor = dark ? "unset" : theme.backgroundColor;

  return (
    <div
      style={{ color: color, backgroundColor: containerBgColor }}
      className="footer-container"
    >
      {dark ? (
        <React.Fragment>
          <img src={FooterLightImage} />
          <div
            className="footer-text-container"
            style={{ color: color, backgroundColor: bgColor }}
          >
            <SocialMediaIcons />
            <p>&copy; 2020 Sankar Rajendran</p>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img src={FooterDarkImage} />
          <div
            className="footer-text-container"
            style={{ color: bgColor, backgroundColor: color }}
          >
            <SocialMediaIcons />
            <p>&copy; 2020 Sankar Rajendran</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Footer;
