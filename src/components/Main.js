import React from 'react';
import api from '../utils/Api';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

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
    })


    React.useEffect(() => {
        api.getInitialCards()
          .then((data) => {
            setCards(data);
        })
          .catch(err => console.log(err));
    }, [])

    console.log(cards);

    return (
    <div>
      <section className="profile">
        <div className="profile__user">
          <button className='profile__avatar-edit-button' onClick={onEditAvatar}>
            <img src={userAvatar} className="profile__avatar" alt="аватара пользователя" />
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
          <div key={card._id} className="item elements__item">
            <button className="item__delete-button"></button>                          
            <img className="item__image" src={card.link} alt="" />              
            <div className="item__info">
              <p className="item__title">{card.name}</p>  
              <div className="item__likebutton-wrap">
                <button className="item__like-button"></button>
                <p className="item__like-counter">{card.likes.length}</p>
              </div>
            </div>              
          </div>
        ))}    
      </section>        
    </div>
    )
}

export default Main;