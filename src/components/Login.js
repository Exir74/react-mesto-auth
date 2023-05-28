import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";
import {useNavigate} from "react-router-dom";
import * as auth from "../utils/auth";
import {authorize} from "../utils/auth";

function Login({onOpenRegister, isLoginPage, setIsRegistrationSuccess, onOpenInfoTooltip}) {

  const navigate = useNavigate();
  const [values, setValues] = React.useState({})

  React.useEffect(() => {
    onOpenRegister(true)
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
    auth.authorize(values.password, values.email)
      .then((data)=>{
        console.log(data)
        if (data.jwt) {
          console.log('sdsd')
          navigate('/', {replace: true})
        }
        // console.log(res)
      })
      .catch((err)=> console.log(err))
    // auth.register(values.password, values.email)
    //   .then((res) => {
    //     if (res.status === 201) {
    //       onOpenInfoTooltip(true)
    //       setIsRegistrationSuccess(true)
    //       setTimeout(() => onOpenInfoTooltip(false), 2000)
    //       navigate('/sign-in', {replace: true})
    //     } else {
    //       setIsRegistrationSuccess(false)
    //       onOpenInfoTooltip(true)
    //       setTimeout(() => onOpenInfoTooltip(false), 2000)
    //     }
      //})
  }


  return (
    <PageWithAuthorization formName='Войти' isLoginPage={isLoginPage}
                           handleChange={handleChange}
                           handleSubmit={handleSubmit}
                           email={values.email}
                           password={values.password}
    />

  )
}

export default Login