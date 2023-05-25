import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import ImagePopup from "./ImagePopup";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Confirm from "./Confirm";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])
  const [saveText, setSaveText] = React.useState('Сохранить')
  const [isRequestSent, setIsRequestSent] = React.useState(false)
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = React.useState(false)
  const [cardForDelete, setCardForDelete] = React.useState({})
  const [confirmText, setConfirmText] = React.useState('Да')

  function handlePopupWithFormOpen(card) {
    setIsPopupWithFormOpen(true)
    setCardForDelete(card)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsRequestSent(false)
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsRequestSent(false)
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleCardDelete(card) {
    setConfirmText('Удаление...')
    api.deleteUserCard(card._id).then(() => {
      setCards((state) =>
        state.filter(item => item._id !== card._id)
      )
      setIsPopupWithFormOpen(false)
    })
      .catch((err) => {
        console.log(err)
      })
      .finally(()=>{
        setConfirmText('Да')
      })
  }

  function handleAddPlaceSubmit({name, link}) {
    api.addUserCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards])
        setIsRequestSent(true)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function onUpdateUser({name, about}) {
    setSaveText('Сохранение...')
    api.setUserInformation(name, about)
      .then((user) => {
        setCurrentUser(user)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setSaveText('Сохранить')
      })
  }

  function onUpdateAvatar({avatar}) {
    setSaveText('Сохранение...')
    api.setUserAvatar(avatar)
      .then((user) => {
        setCurrentUser(user)
        closeAllPopups()
        setIsRequestSent(true)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setSaveText('Сохранить'))
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({})
    setIsPopupWithFormOpen(false)
  }

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res)
    })
      .catch((err) => {
        console.log(err)
      })
    api.getUserInformation().then((res) => {
      setCurrentUser(res)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handlePopupWithFormOpen}
              cards={cards}
        />
        <Footer/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={onUpdateUser}
                          buttonText={saveText}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}
                       isRequestSent={isRequestSent}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={onUpdateAvatar}
                         buttonText={saveText}
                         isRequestSent={isRequestSent}/>
        <Confirm title={"Вы уверены?"} name={"confirm-form"} buttonText={confirmText} isOpen={isPopupWithFormOpen}
                       onClose={closeAllPopups}
                       onSubmit={handleCardDelete}
        cardForDelete={cardForDelete}>
        </Confirm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
