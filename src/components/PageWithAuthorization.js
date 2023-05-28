import React from "react";
import {Link, useNavigate} from "react-router-dom";
import * as auth from '../utils/auth'

function PageWithAuthorization({
                                 formName,
                                 isLoginPage,
                                 handleChange,
                                 handleSubmit,
                                 email,
                                 password
                               }) {
  // const navigate = useNavigate();
  // const [values, setValues] = React.useState({})
  //
  // const handleChange = (event) => {
  //   const {name, value} = event.target
  //   setValues((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   auth.register(values.password, values.email)
  //     .then((res) => {
  //       if (res.status === 201) {
  //         onOpenInfoTooltip(true)
  //         setIsRegistrationSuccess(true)
  //         setTimeout(()=>onOpenInfoTooltip(false), 2000)
  //         navigate('/sign-in', {replace: true})
  //       } else {
  //         setIsRegistrationSuccess(false)
  //         onOpenInfoTooltip(true)
  //         setTimeout(()=>onOpenInfoTooltip(false), 2000)
  //       }
  //     })
  // }
  return (
    <div className='authorization'>
      <form
        onSubmit={handleSubmit}
        method="get"
        name={'name'}
        className="authorization__form"
      >
        <h3 className="authorization__title">{formName}</h3>
        <input
          onChange={handleChange}
          className="authorization__input popup__input_type_email"
          name="email"
          id="email-input"
          placeholder="Email"
          autoComplete='email'
          type="email"
          value={email ?? ''}
          required
        />
        <div className="popup__error-wrapper">
          <label
            htmlFor="name-input"
            className="popup__error-message"
            id="name-input-error"
          />
        </div>
        <input
          onChange={handleChange}
          className="authorization__input popup__input_type_password"
          name="password"
          id="password-input"
          placeholder="Пароль"
          autoComplete='current-password'
          type="password"
          value={password ?? ''}
          required
          minLength={6}
          maxLength={10}
        />
        <div className="popup__error-wrapper">
          <label
            htmlFor="subtitle-input"
            className="popup__error-message"
            id="subtitle-input-error"
          />
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

export default PageWithAuthorization