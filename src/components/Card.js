import React from 'react';

function Card ({card, onCardClick}) {

    const handleCardClick = () => {
        onCardClick(card);
    }

    return (
        <div className="item elements__item">
            <button className="item__delete-button"></button>                          
            <div className="item__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleCardClick} />              
            <div className="item__info">
              <p className="item__title">{card.name}</p>  
              <div className="item__likebutton-wrap">
                <button className="item__like-button"></button>
                <p className="item__like-counter">{card.likes.length}</p>
              </div>
            </div>              
          </div>
    )
}

export default Card;