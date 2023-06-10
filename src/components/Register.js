import React from "react";
import {Link} from "react-router-dom";
import useInput from "../utils/hooks/useInput";


function Register({setIsLoginPage, isLoginPage, handleRegister}) {
  // const [values, setValues] = React.useState({})
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

  React.useEffect(() => {
    setIsLoginPage(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(password.value, email.value)
  }

  return (
    <div className='authorization'>
      <form
        onSubmit={handleSubmit}
        method="get"
        name='sign-up'
        className="authorization__form"
      >
        <h3 className="authorization__title">Регистрация</h3>
        <input
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
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
        <div className="authorization__error-wrapper">
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
        <div className="authorization__error-wrapper">
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

export default Register