import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar, onClose}) {


    return (
    <div>
      <section className="profile">
        <div className="profile__user">
          <button className='profile__avatar-edit-button' onClick={onEditAvatar}>
            <img src=" " className="profile__avatar" alt="аватара пользователя" />
            <div className="profile__avatar-edit-icon"></div>
          </button>
          <div className="profile__user-info">
            <div className="profile__wrap">
              <h1 className="profile__user-name"></h1>
              <button className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__user-occupation"></p>
          </div>
        </div>  
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
        <section className="elements">          
        </section>
        <template id="item">
          <div className="item elements__item">
            <button className="item__delete-button"></button>                          
            <img className="item__image" src="#" alt="" />              
            <div className="item__info">
              <p className="item__title"></p>  
              <div className="item__likebutton-wrap">
                <button className="item__like-button"></button>
                <p className="item__like-counter"></p>
            </div>
            </div>              
          </div>
        </template>
    </div>
    )
}

export default Main;