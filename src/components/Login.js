import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const useValidation =(value, validations)=>{
  const [isEmpty, setIsEmpty] =useState(true)
  const [minLengthError, setMinLengthError] = useState(false)

  useEffect(()=>{
    for (const validation in validations) {
      switch (validation){
        case 'minLength':
          value.length<validations[validation] ? (setMinLengthError(true)) : setMinLengthError(false)
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break;
      }
    }
  })
  return{
    isEmpty,
    minLengthError
  }
}


const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  //ниже строка для вызова хука, но я и так в хуке ВОПРОСЫ!!!
  const valid = useValidation(value, validations, errorMessage)
  const onChange = (e) => {
    setValue(e.target.value)
    setErrorMessage(e.target.validationMessage)
  }
  const onBlur = (e) => {
    setIsDirty(true)
  }
  return {
    value,
    onChange,
    onBlur,
    ...valid,
    isDirty,
    errorMessage: errorMessage
  }
}


function Login({setIsLoginPage, isLoginPage, handleLogin}) {
  const email = useInput('', {
    isEmpty: true,
    minLength: 3
  })
  const password = useInput('', {
    isEmpty: true,
    minLength: 6
  })

  const emailError = email.errorMessage
  const passwordError = password.errorMessage

  // const [values, setValues] = React.useState({})
  //
  // React.useEffect(() => {
  //   setIsLoginPage(true)
  // }, [])
  // const handleChange = (event) => {
  //   const {name, value} = event.target
  //   setValues((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleLogin(values.password, values.email)
  // }

  React.useEffect(() => {
    setIsLoginPage(true)
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(password.value, email.value)
  }

  return (
    <div className='authorization'>
      <form
        onSubmit={handleSubmit}
        method="get"
        name='sign-in'
        className="authorization__form"
      >
        <h3 className="authorization__title">Войти</h3>
        <input
          onChange={e=> email.onChange(e)}
          onBlur={e=>email.onBlur(e)}
          className="authorization__input popup__input_type_email"
          name="email"
          id="email-input"
          placeholder="Email"
          autoComplete='email'
          type="email"
          value={email.value}
          required
        />
        <div className={`popup__error-wrapper`}>
          <label
            htmlFor="name-input"
            className={`popup__error-message ${(email.isDirty && (email.isEmpty || email.minLengthError))
              ? 'popup__error_visible'
              : '' }`}
            id="name-input-error"
          >
            {emailError}
          </label>
        </div>
        <input
          onChange={e=> password.onChange(e)}
          onBlur={e=>password.onBlur(e)}
          className="authorization__input popup__input_type_password"
          name="password"
          id="password-input"
          placeholder="Пароль"
          autoComplete='current-password'
          type="password"
          value={password.value}
          required
          minLength={6}
          maxLength={10}
        />
        <div className="popup__error-wrapper">
          <label
            htmlFor="subtitle-input"
            className={`popup__error-message ${(password.isDirty && (password.isEmpty || password.minLengthError))
              ? 'popup__error_visible'
              : '' }`}
            id="subtitle-input-error"
          >
            {passwordError}
          </label>
        </div>
        <button type="submit" className="authorization__button">
          {`${isLoginPage ? 'Войти' : 'Зарегистрироваться'}`}
        </button>
      </form>
      <Link to='/sign-in' className={`authorization__sign-in ${isLoginPage ? 'authorization__sign-in_disabled' : ''}`}
            href='#'>Уже
        зарегистрированы? Войти</Link>
    </div>
  )
}

export default Login