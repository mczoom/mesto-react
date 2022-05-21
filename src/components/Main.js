import React from 'react';

function Main() {

  React.useEffect(() => {
    function handleEditAvatarClick () {
      const avatarPopup = document.querySelector('.popup-edit-avatar');
      avatarPopup.classList.add('popup_opened');
    };
    document.querySelector('.profile__avatar-edit-button').addEventListener('click', handleEditAvatarClick);
});


React.useEffect(() => {
    function handleEditProfileClick () {
      const avatarPopup = document.querySelector('.popup-edit-profile');
      avatarPopup.classList.add('popup_opened');
    };
    document.querySelector('.profile__edit-button').addEventListener('click', handleEditProfileClick);
});


React.useEffect(() => {
    function handleAddPlaceClick () {
      const avatarPopup = document.querySelector('.popup-add-item');
      avatarPopup.classList.add('popup_opened');
    };
    document.querySelector('.profile__add-button').addEventListener('click', handleAddPlaceClick);
});




    return (
        <main>
      <section className="profile">
        <div className="profile__user">
          <button className='profile__avatar-edit-button'>
            <img src=" " className="profile__avatar" alt="аватара пользователя" />
            <div className="profile__avatar-edit-icon"></div>
          </button>
          <div className="profile__user-info">
            <div className="profile__wrap">
              <h1 className="profile__user-name"></h1>
              <button className="profile__edit-button"></button>
            </div>
            <p className="profile__user-occupation"></p>
          </div>
        </div>  
        <button className="profile__add-button"></button>
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
      <div className="popup popup-edit-profile">
        <div className="popup__container popup-edit-profile__container">
          <button className="popup__close-button popup-edit-profile__close-button"></button>
          <form className="form popup__form" name="edit-profile" method="post" noValidate>          
            <p className="popup__title">Редактировать профиль</p>
            <div className="popup__section">
              <input className="popup__input popup__input_type_name" id="username-input" placeholder="Введите имя" name="username" type="text" minLength="2" maxLength="40" required />
              <span className="popup__input-error username-input-error"></span>
            </div>
            <div className="popup__section">
              <input className="popup__input popup__input_type_occupation" id="occupation-input" placeholder="Введите информацию о себе" name="useroccupation" type="text" minLength="2" maxLength="200" required />
              <span className="popup__input-error occupation-input-error"></span>
            </div>
            <button className="popup__submit-button submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup-add-item">        
        <div className="popup__container popup-add-item__container">
          <button className="popup__close-button popup-add-item__close-button"></button>
          <form className="form popup-add-item__form" name="add-new-item" method="post" noValidate>          
            <p className="popup-add-item__title">Новое место</p>
            <div className="popup__section">
              <input className="popup__input popup__input_type_place" id="place-input" placeholder="Название" name="name" type="text" minLength="2" maxLength="30" required />
              <span className="popup__input-error place-input-error"></span>
            </div>
            <div className="popup__section">
              <input className="popup__input popup__input_type_link" id="url-input" placeholder="Ссылка на картинку" name="link" type="url" required />
              <span className="popup__input-error url-input-error"></span>
            </div>
            <button className="popup-add-item__submit-button submit-button" type="submit">Создать</button>
          </form>
        </div>
      </div>
      
      <div className="popup popup-confirm">        
        <div className="popup__container popup-confirm__container">
          <button className="popup__close-button popup-confirm__close-button"></button>
          <form className="form popup__form" name="delete-confirmation" method="post" noValidate>          
            <p className="popup__title popup-confirm__title">Вы уверены?</p>            
            <button className="submit-button popup-confirm__submit-button" type="submit">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup-edit-avatar">        
        <div className="popup__container popup-edit-avatar__container">
          <button className="popup__close-button"></button>
          <form className="form popup__form popup-edit-avatar__form" name="load-avatar" method="post" noValidate>          
            <p className="popup__title popup-edit-avatar__title">Обновить аватар</p>
            <div className="popup-edit-avatar__section">
              <input className="popup__input popup__input_type_url" id="link-input" placeholder="Ссылка на аватар" name="avatar" type="url" required />
              <span className="popup__input-error link-input-error"></span>
            </div>    
            <button className="submit-button popup-edit-avatar__submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
    </main>
    )
}

export default Main;