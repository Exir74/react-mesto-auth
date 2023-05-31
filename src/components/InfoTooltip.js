import React from "react";
import closeIcon from "../image/Close-Icon.svg";
import successRegistration from "../image/successRegistration.png"
import failedRegistration from "../image/failedRegistration.png"

function InfoTooltip({isRegistrationSuccess, onClose, isOpen}) {
  return (
    <div className={`popup image-popup ${isOpen ? 'popup_open' : ''}`}>
      {/*Надо сделать показ попапа при успшной и не успешной регистрации*/}
      <div className="popup__content">
        <button type="button" onClick={onClose} className="popup__close hover">
          <img
            className="popup__close-icon"
            src={closeIcon}
            alt="закрыть"
          />
        </button>
        <div className="popup__success">
          <div className="popup__body">
            <img className='popup__registration-img'
                 alt={isRegistrationSuccess ? 'Вы успешно зарегистрировались!' : `Что-то пошло не так!
              Попробуйте ещё раз.`}
                 src={isRegistrationSuccess ? successRegistration : failedRegistration}/>
            <p className='popup__registration-text'>{isRegistrationSuccess ? 'Вы успешно зарегистрировались!' : `Что-то пошло не так!
              Попробуйте ещё раз.`}</p>
          </div>
          {/*<img className="popup__full-image" src={'card.link'} alt={'card.name'}/>*/}
        </div>
        {/*<div className="popup__image-name">*/}
        {/*  <p className="popup__image-text">{'card.name'}</p>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default InfoTooltip