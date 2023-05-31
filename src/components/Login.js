import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";
import {useNavigate} from "react-router-dom";
import * as auth from "../utils/auth";

function Login({setIsLoginPage, isLoginPage, handleLogin}) {

  const navigate = useNavigate();
  const [values, setValues] = React.useState({})

  React.useEffect(() => {
    setIsLoginPage(true)
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
      .then(data=>{
        if (data) {
          setValues({email: '', password: ''})
          handleLogin()
          navigate('/', {replace: true})
        }
      })
      .catch((err)=>{
        console.log(err)
      })
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