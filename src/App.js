import React from "react";
import logo from './image/logo.svg'
import './index.css';

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <a href="#">
            <img className="header__logo hover" src={logo} alt={"лого"}/>
          </a>
        </header>
        <main className="main-content">
          <section className="profile">
            <button type="button" className="profile__edit">
              <img className="profile__avatar" alt="Аватар" />
              <div className="profile__avatar-wrapper hover">
                <img
                  className="profile__edit-avatar hover"
                  src="<%=require('../image/editAvatar.png')%>"
                  alt="Аватар"
                />
              </div>
            </button>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__subtitle">Исследователь океана</p>
              <button type="button" className="profile__edit-button hover">
                <img
                  className="profile__edit-image prof"
                  src="<%=require('../image/Edit-Button.svg')%>"
                  alt="изменить"
                />
              </button>
            </div>
            <button type="button" className="profile__add-button hover">
              <picture>
                <source
                  srcSet="<%=require('../image/Add-Button-S.svg')%>"
                  media="(min-width: 708px)"
                />
                <img
                  className="profile__add-image"
                  src="<%=require('../image/Add-Button-L.svg')%>"
                  alt="добавить"
                />
              </picture>
            </button>
          </section>
          <section className="cards" />
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2022 Mesto Russia</p>
        </footer>
        <div className="popup profile-popup">
          <div className="popup__content">
            <button type="button" className="popup__close hover">
              <img
                className="popup__close-icon"
                src="<%=require('../image/Close-Icon.svg')%>"
                alt="закрыть"
              />
            </button>
            <form
              method="get"
              name="profile-form"
              className="popup__form"
              noValidate=""
            >
              <h3 className="popup__title">Редактировать профиль</h3>
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
              <button type="submit" className="popup__button">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup card-popup">
          <div className="popup__content">
            <button type="button" className="popup__close hover">
              <img
                className="popup__close-icon"
                src="<%=require('../image/Close-Icon.svg')%>"
                alt="закрыть"
              />
            </button>
            <form
              noValidate=""
              method="get"
              name="card-form"
              className="popup__form"
            >
              <h3 className="popup__title">Новое место</h3>
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
              <button type="submit" className="popup__button">
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className="popup image-popup">
          <div className="popup__content">
            <button type="button" className="popup__close hover">
              <img
                className="popup__close-icon"
                src="<%=require('../image/Close-Icon.svg')%>"
                alt="закрыть"
              />
            </button>
            <div className="popup__image">
              <img className="popup__full-image" />
            </div>
            <div className="popup__image-name">
              <p className="popup__image-text" />
            </div>
          </div>
        </div>
        <div className="popup confirm-popup">
          <div className="popup__content">
            <button type="button" className="popup__close hover">
              <img
                className="popup__close-icon"
                src="<%=require('../image/Close-Icon.svg')%>"
                alt="закрыть"
              />
            </button>
            <form method="get" name="confirm-form" className="popup__form">
              <h3 className="popup__title">Вы уверены?</h3>
              <button type="submit" className="popup__button">
                Да
              </button>
            </form>
          </div>
        </div>
        <div className="popup avatar-popup">
          <div className="popup__content">
            <button type="button" className="popup__close hover">
              <img
                className="popup__close-icon"
                src="<%=require('../image/Close-Icon.svg')%>"
                alt="закрыть"
              />
            </button>
            <form
              noValidate=""
              method="get"
              name="avatar-form"
              className="popup__form"
            >
              <h3 className="popup__title">Обновить аватар</h3>
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
              <button type="submit" className="popup__button">
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
      <template id="card-template" />
    </>

  );
}

export default App;
