import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
          .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
          })
          .catch(err => console.log(err));
    }, [])


    React.useEffect(() => {
        api.getInitialCards()
          .then((data) => {
            setCards(data);
        })
          .catch(err => console.log(err));
    }, [])

    
    return (
    <div>
      <section className="profile">
        <div className="profile__user">
          <button className='profile__avatar-edit-button' onClick={onEditAvatar}>
            <div style={{backgroundImage: `url(${userAvatar})`}} className="profile__avatar" />
            <div className="profile__avatar-edit-icon"></div>
          </button>
          <div className="profile__user-info">
            <div className="profile__wrap">
              <h1 className="profile__user-name">{userName}</h1>
              <button className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__user-occupation">{userDescription}</p>
          </div>
        </div>  
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card, i) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />            
        ))}    
      </section>        
    </div>
    )
}

export default Main;