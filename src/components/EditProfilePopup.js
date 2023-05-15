import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(isOpen, onClose){
  const a = isOpen
  const b = onClose
return(
  <PopupWithForm title={"Редактировать профиль"} name={"profile-form"} buttonText={"Сохранить"}
                 isOpen={a}
                 onClose={b}

  >

    <input
      className="popup__input popup__input_type_name"
      name="popup-name"
      id="name-input"
      placeholder="Имя"
      type="text"
      defaultValue=""
      required=""
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
      className="popup__input popup__input_type_subtitle"
      name="popup-subtitle"
      id="subtitle-input"
      placeholder="Вид деятельности"
      type="text"
      defaultValue=""
      required=""
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

  </PopupWithForm>
)
}
export default EditProfilePopup