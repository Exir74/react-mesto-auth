import closeIcon from "../image/Close-Icon.svg";
import React from "react";
import { useForm } from "react-hook-form";

function PopupWithForm({name, isOpen, onClose, title, buttonText, children, onSubmit, handleSubmit}) {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors }
  // } = useForm();
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_open' : ''}`}>
      <div className="popup__content">
        <button type="button" onClick={onClose} className="popup__close hover">
          <img
            className="popup__close-icon"
            src={closeIcon}
            alt="закрыть"
          />
        </button>
        <form
          onSubmit={handleSubmit}
          method="get"
          name={name}
          className="popup__form"
        >
          <h3 className="popup__title">{title}</h3>
          {children}
          <button type="submit" className="popup__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm