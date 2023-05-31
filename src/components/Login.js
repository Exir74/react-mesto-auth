import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";

function Login({setIsLoginPage, isLoginPage, handleLogin }) {
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
    handleLogin(values.password, values.email)
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