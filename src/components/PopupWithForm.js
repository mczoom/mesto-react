import React from 'react';

function PopupWithForm (props) {
    return(
      <div className={`popup popup-${props.name}`}>
        <div className="popup__container popup-edit-profile__container">
          <button className="popup__close-button popup-edit-profile__close-button"></button>
          <form className="form popup__form" name={props.title} method="post" noValidate>          
            <p className="popup__title">{props.title}</p>
            {props.children}
            <button className="popup__submit-button submit-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

    )
}

export default PopupWithForm;