import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";
function Register({onOpenRegister, isLoginPage}) {
  React.useEffect(()=>{
    onOpenRegister(false)
  },[])
  return (
    <PageWithAuthorization formName='Регистрация'  isLoginPage={isLoginPage}/>
  )
}

export default Register