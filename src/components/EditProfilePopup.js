import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, buttonText}) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen, currentUser]);


  function handleName(e) {
    setName(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    })
  }

  return (
    <PopupWithForm title={"Редактировать профиль"} name={"profile-form"} buttonText={buttonText}
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}
    >

      <input
        onChange={handleName}
        className="popup__input popup__input_type_name"
        name="popup-name"
        id="name-input"
        placeholder="Имя"
        type="text"
        value={name ?? ''}
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
        onChange={handleDescription}
        className="popup__input popup__input_type_subtitle"
        name="popup-subtitle"
        id="subtitle-input"
        placeholder="Вид деятельности"
        type="text"
        value={description ?? ''}
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

    </PopupWithForm>
  )
}

export default EditProfilePopup