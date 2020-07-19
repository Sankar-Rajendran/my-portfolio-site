import React from "react";
import { SocialMediaIcons } from "./../Utilities";
import { ThemeContext } from "../../Theme";
import "./Contact.scss";

const Contact = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div id="contact" className="contact-container">
      <div
        style={{ backgroundColor: theme.color, color: theme.backgroundColor }}
        className="heading-container"
      >
        <h1 className="heading-title">Contact Me</h1>
      </div>
      <div className="contact-content">
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default Contact;
