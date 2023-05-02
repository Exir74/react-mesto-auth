import logo from "../image/logo.svg";
import React from "react";

function Header() {
  return (<header className="header">
    <a href="src/components/App#">
      <img className="header__logo hover" src={logo} alt="лого"/>
    </a>
  </header>)
}

export default Header