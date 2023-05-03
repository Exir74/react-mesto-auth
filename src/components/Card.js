import React from "react";

function Card({cards, onCardClick}) {
  function handleClick() {
    onCardClick(cards)
  }

  const [card, setCard] = React.useState({})
  React.useEffect(() => {
    setCard(cards.map(card => {
      return (
        <div key={card._id} className="cards__item card">
          <button type="button" className="card__trash hover"></button>
          <button type="button" onClick={handleClick} className="card__button">
            <img className="card__image" src={card.link} alt={card.name}/>
          </button>
          <div className="card__footer">
            <h2 className="card__caption">{card.name}</h2>
            <div className="card__like-wrapper">
              <button type="button" className="card__like"></button>
              <p className="card__like-quantity">{card.likes.length}</p>
            </div>
          </div>
        </div>)

    }))
  }, [])

  // return (
  //   <div className="cards__item card">
  //   <button type="button" className="card__trash hover"></button>
  //   <button type="button" onClick={handleClick} className="card__button">
  //     <img className="card__image" src={card.link} alt={card.name}/>
  //   </button>
  //   <div className="card__footer">
  //     <h2 className="card__caption">{card.name}</h2>
  //     <div className="card__like-wrapper">
  //       <button type="button" className="card__like"></button>
  //       <p className="card__like-quantity">{console.log('ddddddddddddddd',card)}</p>
  //     </div>
  //   </div>
  // </div>
  // )
  return card
}

export default Card