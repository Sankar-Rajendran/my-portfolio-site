import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import avatar from "../../images/my-avatar.png";
import { ThemeToggle } from "../Utilities";
import "./Header.scss";

const DesktopHeader = (props) => {
  return (
    <div className="desktop-header-container">
      <div className="logo-name-container">
        <img src={avatar} alt="avatar image" />
        <p className="logo-text">Sankar Rajendran</p>
      </div>
      <div className="menu-container">
        <p className="active">Home</p>
        <Link
          smooth
          style={{ color: props.theme.color }}
          to={{ pathname: "/", hash: "#about" }}
        >
          <p>About Me</p>
        </Link>
        <Link
          smooth
          style={{ color: props.theme.color }}
          to={{ pathname: "/", hash: "#contact" }}
        >
          <p>Contact</p>
        </Link>
        <ThemeToggle dark={props.dark} toggleTheme={props.toggle} />
      </div>
    </div>
  );
};

export default DesktopHeader;
