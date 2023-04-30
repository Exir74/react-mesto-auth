import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

let isEditProfilePopupOpen = false
let isAddPlacePopupOpen = false
let isEditAvatarPopupOpen = false

function App() {
  return (
    <>
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}/>
        <Footer/>
        <PopupWithForm title={"Редактировать профиль"} name={"profile-form"} buttonText={"Сохранить"}>
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
        <PopupWithForm title={"Новое место"} name={"card-form"} buttonText={"Создать"}>
          <input
            className="popup__input popup__input_type_place-name"
            placeholder="Название"
            name="popup-place-name"
            id="place-name-input"
            type="text"
            defaultValue=""
            required=""
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
            defaultValue=""
            required=""
          />
          <div className="popup__error-wrapper">
            <label
              htmlFor="place-url-input"
              className="popup__error-message"
              id="place-url-input-error"
            />
          </div>
        </PopupWithForm>
        <PopupWithForm title={"Обновить аватар"} name={"avatar-form"} buttonText={"Сохранить"}>
          <input
            className="popup__input popup__input_type_avatar-url"
            placeholder="Ссылка на аватар"
            name="popup-avatar-url"
            id="avatar-url-input"
            type="url"
            defaultValue=""
            required=""
          />
          <div className="popup__error-wrapper">
            <label
              htmlFor="avatar-url-input"
              className="popup__error-message"
              id="avatar-url-input-error"
            />
          </div>
        </PopupWithForm>
        <PopupWithForm title={"Вы уверены?"} name={"confirm-form"} buttonText={"Да"}>
        </PopupWithForm>
        <ImagePopup/>
      </div>
      {/*<template id="card-template"/>*/}
    </>

  );
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_profile-form').classList.add('popup_open')
  isEditProfilePopupOpen = true
}

function handleEditAvatarClick() {
  document.querySelector('.popup_type_avatar-form').classList.add('popup_open')
  isAddPlacePopupOpen = true

}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_card-form').classList.add('popup_open')
  isEditAvatarPopupOpen = true

}

export default App;
