import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";
function Register() {
  return (
    <PageWithAuthorization formName='Регистрация' buttonText='Зарегистрироваться' isLoginPage={false}/>
  )
}

export default Register