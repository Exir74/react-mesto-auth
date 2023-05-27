import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";

function Login() {
  return (
    <PageWithAuthorization formName='Вход' buttonText='Войти' isLoginPage={true}/>
  )
}

export default Login