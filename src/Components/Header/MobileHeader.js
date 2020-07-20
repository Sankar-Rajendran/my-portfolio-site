import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ThemeToggle } from "../Utilities";
import "./MobileHeader.scss";

const MobileHeader = (props) => {
  const [isSideMenuOpen, setSideMenuToggle] = useState(false);

  const toggleMenu = () => {
    setSideMenuToggle(!isSideMenuOpen);
  };

  return (
    <div>
      <div className="mobile-header">
        <div onClick={toggleMenu} className="hamburger-container">
          <div
            style={{ backgroundColor: props.theme.color }}
            className="hamburger-item"
          ></div>
          <div
            style={{ backgroundColor: props.theme.color }}
            className="hamburger-item"
          ></div>
          <div
            style={{ backgroundColor: props.theme.color }}
            className="hamburger-item"
          ></div>
        </div>
        <div style={{ padding: "10px" }}>
          <ThemeToggle dark={props.dark} toggleTheme={props.toggle} />
        </div>
      </div>
      <SidebarMenu
        theme={props.theme}
        toggleMenu={toggleMenu}
        isSideMenuOpen={isSideMenuOpen}
      />
    </div>
  );
};

export default MobileHeader;

const SidebarMenu = ({ isSideMenuOpen, toggleMenu, theme }) => {
  return (
    <div
      style={{ color: theme.backgroundColor, backgroundColor: theme.color }}
      onClick={toggleMenu}
      className={`sidebar-container ${isSideMenuOpen ? " show" : "hide"}`}
    >
      <div className="side-bar-content">
        <span style={{ color: theme.backgroundColor }} className="close-button">
          X
        </span>
        <ul>
          <Link style={{ color: theme.backgroundColor }} to={{ pathname: "/" }}>
            <li>
              <h3>Home</h3>
            </li>
          </Link>
          <Link
            style={{ color: theme.backgroundColor }}
            to={{ pathname: "/", hash: "#about" }}
          >
            <li>
              <h3>About</h3>
            </li>
          </Link>
          <Link
            style={{ color: theme.backgroundColor }}
            to={{ pathname: "/", hash: "#contact" }}
          >
            <li>
              <h3>Contact</h3>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
