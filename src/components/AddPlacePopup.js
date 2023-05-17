import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace, isRequestSent}) {
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  React.useEffect(() => {
      setName('')
      setLink('')
  }, [isOpen, isRequestSent])

  function handleName(e) {
    setName(e.target.value)
  }

  function handleLink(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({name, link})
  }

  return (
    <PopupWithForm title={"Новое место"} name={"card-form"} buttonText={"Создать"}
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_type_place-name"
        placeholder="Название"
        name="popup-place-name"
        id="place-name-input"
        type="text"
        value={name}
        onChange={handleName}
        required
        minLength={2}
        maxLength={30}
      />
      <div className="popup__error-wrapper">
        <label
          htmlFor="place-name-input"
          className="popup__error-message"
          id="place-name-input-error"
        />
      </div>
      <input
        className="popup__input popup__input_type_place-url"
        placeholder="Ссылка на картинку"
        name="popup-place-url"
        id="place-url-input"
        type="url"
        value={link}
        onChange={handleLink}
        required
      />
      <div className="popup__error-wrapper">
        <label
          htmlFor="place-url-input"
          className="popup__error-message"
          id="place-url-input-error"
        />
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup