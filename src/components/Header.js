import logo from "../image/logo.svg";
import React from "react";
import {Link} from "react-router-dom";

function Header({isLoginPage}) {
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo hover" src={logo} alt="лого"/>
      </a>
      <div className='header__user-wrapper'>
        <span className='header__user-email '>email@mail.com</span>
        {isLoginPage ? <Link to='/sign-up' className='header__user-action hover'>Регистрация</Link>:
          <Link to='/sign-in'  className='header__user-action hover'>Войти</Link>}
      </div>
    </header>)
}

export default Header