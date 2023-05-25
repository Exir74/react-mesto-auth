
import React from "react";
import PopupWithForm from "./PopupWithForm";

function Confirm({name, isOpen, onClose, title, buttonText, onSubmit, cardForDelete}) {
  function handleSubmit(e){
    e.preventDefault();
    onSubmit(cardForDelete)
  }
  return (
    <PopupWithForm title={title} name={name} buttonText={buttonText} isOpen={isOpen}
             onClose={onClose}
             onSubmit={handleSubmit}/>
  )
}

export default Confirm