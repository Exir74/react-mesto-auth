import logo from "../image/logo.svg";
import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="src/components/App#">
        <img className="header__logo hover" src={logo} alt="лого"/>
      </a>
      <div className='header__user-wrapper'>
        <span className='header__user-email '>email@mail.com</span>
        <a href='#' className='header__user-action hover'>Выйти</a>
      </div>
    </header>)
}

export default Header