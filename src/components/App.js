import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
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
      });
  }

  function handleCardDelete(card) {
    api.deleteUserCard(card._id).then((newCards) => {
      setCards((state) =>
        state.filter((item) => {
          if (item._id != card._id) {
            return item
          }
        }))
    })
  }

  function handleAddPlaceSubmit({name,link}){
    api.addUserCard(name,link)
      .then((newCard)=>{
        setCards([newCard, ...cards])
        closeAllPopups()
      })
  }

  function onUpdateUser({name, about}) {
    api.setUserInformation(name, about)
      .then((user) => {
        setCurrentUser(user)
        closeAllPopups()
      })
  }

  function onUpdateAvatar({avatar}) {
    api.setUserAvatar(avatar)
      .then((user) => {
        console.log(user)
        setCurrentUser(user)
        closeAllPopups()
      })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({})
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
              onCardDelete={handleCardDelete}
              cards={cards}
        />
        <Footer/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={onUpdateUser}/>
        {/*<PopupWithForm title={"Новое место"} name={"card-form"} buttonText={"Создать"}*/}
        {/*               isOpen={isAddPlacePopupOpen}*/}
        {/*               onClose={closeAllPopups}>*/}
        {/*  <input*/}
        {/*    className="popup__input popup__input_type_place-name"*/}
        {/*    placeholder="Название"*/}
        {/*    name="popup-place-name"*/}
        {/*    id="place-name-input"*/}
        {/*    type="text"*/}
        {/*    defaultValue=""*/}
        {/*    required=""*/}
        {/*    minLength={2}*/}
        {/*    maxLength={30}*/}
        {/*  />*/}
        {/*  <div className="popup__error-wrapper">*/}
        {/*    <label*/}
        {/*      htmlFor="place-name-input"*/}
        {/*      className="popup__error-message"*/}
        {/*      id="place-name-input-error"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <input*/}
        {/*    className="popup__input popup__input_type_place-url"*/}
        {/*    placeholder="Ссылка на картинку"*/}
        {/*    name="popup-place-url"*/}
        {/*    id="place-url-input"*/}
        {/*    type="url"*/}
        {/*    defaultValue=""*/}
        {/*    required=""*/}
        {/*  />*/}
        {/*  <div className="popup__error-wrapper">*/}
        {/*    <label*/}
        {/*      htmlFor="place-url-input"*/}
        {/*      className="popup__error-message"*/}
        {/*      id="place-url-input-error"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</PopupWithForm>*/}
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={onUpdateAvatar}/>
        <PopupWithForm title={"Вы уверены?"} name={"confirm-form"} buttonText={"Да"}>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
