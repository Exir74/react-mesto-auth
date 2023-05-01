import React from "react";
import editAvatarImg from "../image/editAvatar.png"
import editButtonImg from "../image/Edit-Button.svg"
import addButtonS from "../image/Add-Button-S.svg"
import addButtonL from "../image/Add-Button-L.svg"
import {api} from "../utils/api";
function Main (props){
  const [userName, setUserName] = React.useState('')
  React.useEffect(()=>{
    function handleUserName (){
      setUserName(api.getUserInformation.name)
    }
  })

  console.log(userName)

  return(
    <main className="main-content">
      <section className="profile">
        <button type="button" onClick={props.onEditAvatar} className="profile__edit">
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
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__subtitle">Исследователь океана</p>
          <button type="button" onClick={props.onEditProfile} className="profile__edit-button hover">
            <img
              className="profile__edit-image prof"
              src={editButtonImg}
              alt="изменить"
            />
          </button>
        </div>
        <button type="button" onClick={props.onAddPlace} className="profile__add-button hover">
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
