import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const useValidation = (value, validations ,validity) => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLengthError(true)
          } else {
            setMinLengthError(false)
          }
          break;
        case 'isEmpty':
          if (value) {
            setIsEmpty(false)
          } else {
            setIsEmpty(true)
          }
          break;
        case  'isEmail' :
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{3,})$/i;
          if (re.test(String(value).toLowerCase())) {
            setIsEmailError(false)
          } else {
            setIsEmailError(true)
          }
          break;
      }

      if (minLengthError) {
        setErrorMessage(`Длина дожна быть длинее ${validations.minLength} символов `)

      } else if (isEmpty) {
        setErrorMessage('Поле не может быть пустым')

      } else if (isEmailError) {
        setErrorMessage('Введите корректный email')
      }
    }

  }, [value])

  return {
    isEmpty,
    minLengthError,
    isEmailError,
    errorMessage,
    validity
  }
}


const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)
  const [validity, setValidity] =useState(true)
  //ниже строка для вызова хука, но я и так в хуке ВОПРОСЫ!!!
  const valid =
    useValidation(value, validations, validity)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onBlur = (e) => {
    setIsDirty(true)
    setValidity(e.target.validity.valid)

  }


  return {
    value,
    onChange,
    onBlur,
    ...valid,
    isDirty,
    errorMessage: valid.errorMessage
  }
}


function Login({setIsLoginPage, isLoginPage, handleLogin}) {


  const email = useInput('', {
    isEmpty: true,
    minLength: 3,
    isEmail: true
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

  // useEffect(()=>{
  //   console.log(emailError)
  // },)

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
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          // className="authorization__input authorization__input_type_error"
          className={`authorization__input ${(email.isDirty && (email.isEmpty || email.minLengthError || email.isEmailError))
            ? 'authorization__input_type_error'
            : ''}`}
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
            className={`popup__error-message ${(email.isDirty && (email.isEmpty 
              || email.minLengthError || email.isEmailError))
              ? 'popup__error_visible'
              : ''}`}
            id="name-input-error"
          >
            {emailError}
          </label>
        </div>
        <input
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
          className={`authorization__input ${(password.isDirty && (password.isEmpty || password.minLengthError))
            ? 'authorization__input_type_error'
            : ''}`}
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
              : ''}`}
            id="subtitle-input-error"
          >
            {passwordError}
          </label>
        </div>
        <button type="submit" className={`authorization__button ${(!email.validity||!password.validity) ? 'popup__button_disabled':''}`} >
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