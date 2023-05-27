import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";

function Login({onOpenLogin, isLoginPage}) {
  React.useEffect(()=>{
    onOpenLogin(true)
  },[])
  return (
    <PageWithAuthorization formName='Вход' isLoginPage={isLoginPage}/>
  )
}

export default Login