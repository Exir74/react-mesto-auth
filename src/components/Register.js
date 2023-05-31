import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";
import * as auth from "../utils/auth";
import {useNavigate} from "react-router-dom";

function Register({setIsLoginPage, isLoginPage, setIsRegistrationSuccess, onOpenInfoTooltip}) {
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
    auth.register(values.password, values.email)
      .then((res) => {
        if (res.status === 201) {
          onOpenInfoTooltip(true)
          setIsRegistrationSuccess(true)
          setTimeout(()=>onOpenInfoTooltip(false), 2000)
          navigate('/sign-in', {replace: true})
        } else {
          setIsRegistrationSuccess(false)
          onOpenInfoTooltip(true)
          setTimeout(()=>onOpenInfoTooltip(false), 2000)
        }
      })
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