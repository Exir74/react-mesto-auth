import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";
import * as auth from "../utils/auth";
import {useNavigate} from "react-router-dom";

function Register({setIsLoginPage, isLoginPage, handleRegister}) {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({})

  React.useEffect(() => {
    setIsLoginPage(false)
  }, [])
  const handleChange = (event) => {
    const {name, value} = event.target
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values.password, values.email)
  }


  return (
    <PageWithAuthorization formName='Регистрация' isLoginPage={isLoginPage}
                           handleChange={handleChange}
                           handleSubmit={handleSubmit}
                           email={values.email}
                           password={values.password}
    />

  )
}

export default Register