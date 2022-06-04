import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [cards, setCards] = React.useState([]);

    const user = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        api.getInitialCards()
          .then((data) => {
            console.log(data);
            setCards(data);
        })
          .catch(err => console.log(err));
    }, [])

    function handleCardLike (card) {
      const isLiked = card.likes.some(i => i._id === user._id);
      api.likeCard(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete (card) {
       
      api.deleteCard(card._id)
        .then((card) => {
          //const newCards = (cards => cards.filter((c) => c._id != card._id));
          //setCards(newCards);
          console.log(cards);
        });
    }

    
    return (
    <div>
      <section className="profile">
        <div className="profile__user">
          <button className='profile__avatar-edit-button' onClick={onEditAvatar}>
            <div style={{backgroundImage: `url(${user.avatar})`}} className="profile__avatar" />
            <div className="profile__avatar-edit-icon"></div>
          </button>
          <div className="profile__user-info">
            <div className="profile__wrap">
              <h1 className="profile__user-name">{user.name}</h1>
              <button className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__user-occupation">{user.about}</p>
          </div>
        </div>  
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />            
        ))}    
      </section>        
    </div>
    )
}

export default Main;