import React from "react";

function Card(props) {
  return (<div className="cards__item card">
    <button type="button" className="card__trash hover"></button>
    <button type="button" className="card__button">
      <img className="card__image" src={props.card.link} alt={props.card.name}/>
    </button>
    <div className="card__footer">
      <h2 className="card__caption">{props.card.name}</h2>
      <div className="card__like-wrapper">
        <button type="button" className="card__like"></button>
        <p className="card__like-quantity">{props.card.likes.length}</p>
      </div>
    </div>
  </div>)
}

export default Card