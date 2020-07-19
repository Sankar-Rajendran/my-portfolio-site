import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { ThemeContext } from "../../Theme";

const Header = () => {
  const { toggle, dark, theme } = React.useContext(ThemeContext);

  return (
    <div>
      <DesktopHeader toggle={toggle} dark={dark} theme={theme} />
      <MobileHeader toggle={toggle} dark={dark} theme={theme} />
    </div>
  );
};

export default Header;
