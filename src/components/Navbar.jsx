import React from "react";
import NavStyle from "../styles/NavStyle";

const LOGO = require("../assets/ipl-logo.png");

function Navbar() {
  const style = NavStyle();
  return (
    <nav className={style.navbar}>
      <img className={style.logoImage} src={LOGO.default} alt="ipl-logo" />
      <h1 className={style.navHeading}>INDIAN PREMIRE LEAGUE</h1>
    </nav>
  );
}

export default Navbar;
