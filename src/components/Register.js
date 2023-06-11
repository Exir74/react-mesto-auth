import React from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";

function Register({setIsLoginPage, isLoginPage, handleRegister}) {

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    mode: "onChange"
  });

  React.useEffect(() => {
    setIsLoginPage(false)
  }, [])

  const onSubmit = (data) => {
    handleRegister(data.password, data.email)
  }

  return (
    <div className='authorization'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="get"
        name='sign-up'
        className="authorization__form"
      >
        <h3 className="authorization__title">Регистрация</h3>
        <input
          className={`authorization__input ${errors.email ? 'authorization__input_type_error':''}`}
          name="email"
          id="email-input"
          placeholder="Email"
          autoComplete='email'
          type="email"
          {...register("email", {
            required: "Заполните это поле",
            minLength: {
              value: 3,
              message: 'Длина поля менее 3 символов'
            }, maxLength: {
              value: 50,
              message: 'Длина не более 50 символов'
            }, pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Введите корректный email'
            }
          })}
        />
        <div className={`authorization__error-wrapper`}>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({message}) => <label
              className={'popup__error-message popup__error_visible'}
            >{message}</label>}/>
        </div>

        <input

          className={`authorization__input ${errors.password ? 'authorization__input_type_error':''}`}
          name="password"
          id="password-input"
          placeholder="Пароль"
          autoComplete='current-password'
          type="password"
          {...register("password", {
            required: "Заполните это поле",
            minLength: {
              value: 6,
              message: 'Длина поля менее 6 символов'
            }, maxLength: {
              value: 12,
              message: 'Длина не более 12 символов'
            },
          })}
        />
        <div className={`authorization__error-wrapper`}>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({message}) => <label
              className={'popup__error-message popup__error_visible'}
            >{message}</label>}/>
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