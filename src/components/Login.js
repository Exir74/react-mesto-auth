import React from "react";
import closeIcon from "../image/Close-Icon.svg";

function Login() {
  return (
    <div className='login'>
      <form
        onSubmit={'onSubmit'}
        method="get"
        name={'name'}
        className="login__form"
      >
        <h3 className="login__title">{'Вход'}</h3>
        <input
          onChange={'handleChange'}
          className="login__input popup__input_type_name"
          name="name"
          id="name-input"
          placeholder="Имя"
          type="text"
          // value={values.name ?? ''}
          required
          minLength={2}
          maxLength={40}
        />
        <div className="popup__error-wrapper">
          <label
            htmlFor="name-input"
            className="popup__error-message"
            id="name-input-error"
          />
        </div>
        <input
          onChange={'handleChange'}
          className="login__input popup__input_type_subtitle"
          name="description"
          id="subtitle-input"
          placeholder="Вид деятельности"
          type="text"
          // value={values.description ?? ''}
          required
          minLength={2}
          maxLength={200}
        />
        <div className="popup__error-wrapper">
          <label
            htmlFor="subtitle-input"
            className="popup__error-message"
            id="subtitle-input-error"
          />
        </div>
        <button type="submit" className="popup__button">
          {'buttonText'}
        </button>
      </form>

    </div>
  )
}

export default Login