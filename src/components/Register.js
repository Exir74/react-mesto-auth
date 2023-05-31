import React from "react";
import PageWithAuthorization from "./PageWithAuthorization";


function Register({setIsLoginPage, isLoginPage, handleRegister}) {
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