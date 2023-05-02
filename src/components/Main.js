import React from "react";
import editAvatarImg from "../image/editAvatar.png"
import editButtonImg from "../image/Edit-Button.svg"
import addButtonS from "../image/Add-Button-S.svg"
import addButtonL from "../image/Add-Button-L.svg"
import {api} from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто')
  const [userDescription, setUserDescription] = React.useState('Иследователь')
  const [userAvatar, setUserAvatar] = React.useState('Иследователь')
  const [cards, setCards] = React.useState([])


  React.useEffect(() => {
    function handleUserInfo() {
      api.getUserInformation().then((res) => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
        .catch((err) => {
          console.log(err)
        })
    }

    handleUserInfo()
  }, [])
  React.useEffect(() => {
    function handleInitialCards() {
      console.log('dd')
      api.getInitialCards().then(res => {
        setCards(
        res.map(card => {
          return(
              <div key={card._id} className="cards__item card">
                <button type="button" className="card__trash hover"></button>
                <button type="button" className="card__button">
                  <img className="card__image" src={card.link} alt={card.name}/>
                </button>
                <div className="card__footer">
                  <h2 className="card__caption">{card.name}</h2>
                  <div className="card__like-wrapper">
                    <button type="button" className="card__like"></button>
                    <p className="card__like-quantity">{card.likes.length}</p>
                  </div>
                </div>
              </div>
            )
        }))
      })
        .catch((err) => {
          console.log(err)
        })
    }

    handleInitialCards()
  }, [])

  return (
    <main className="main-content">
      <section className="profile">
        <button type="button" onClick={props.onEditAvatar} className="profile__edit">
          <img className="profile__avatar" alt="Аватар" src={userAvatar}/>
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
          <p className="profile__subtitle">{userDescription}</p>
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
      <section className="cards">
        {cards}
      </section>
    </main>
  )
}

export default Main
