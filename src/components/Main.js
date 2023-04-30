import React from "react";
import editAvatarImg from "../image/editAvatar.png"
import editButtonImg from "../image/Edit-Button.svg"
import addButtonS from "../image/Add-Button-S.svg"
import addButtonL from "../image/Add-Button-L.svg"
function Main (){
  return(
    <main className="main-content">
      <section className="profile">
        <button type="button" onClick={handleEditAvatarClick} className="profile__edit">
          <img className="profile__avatar" alt="Аватар" />
          <div className="profile__avatar-wrapper hover">
            <img
              className="profile__edit-avatar hover"
              src={editAvatarImg}
              alt="Аватар"
            />
          </div>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__subtitle">Исследователь океана</p>
          <button type="button" onClick={handleEditProfileClick} className="profile__edit-button hover">
            <img
              className="profile__edit-image prof"
              src={editButtonImg}
              alt="изменить"
            />
          </button>
        </div>
        <button type="button" onClick={handleAddPlaceClick} className="profile__add-button hover">
          <picture>
            <source
              srcSet={addButtonS}
              media="(min-width: 708px)"
            />
            <img
              className="profile__add-image"
              src={addButtonL}
              alt="добавить"
            />
          </picture>
        </button>
      </section>
      <section className="cards" />
    </main>
  )
}
export default Main

function handleEditProfileClick(){
document.querySelector('.profile-popup').classList.add('popup_open')
}
function handleEditAvatarClick(){
  document.querySelector('.avatar-popup').classList.add('popup_open')

}
function handleAddPlaceClick(){
  document.querySelector('.card-popup').classList.add('popup_open')

}