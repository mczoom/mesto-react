import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {

  const inputPlaceRef = React.useRef();
  const inputUrlRef = React.useRef();

 
  function handleSubmit(e) {
    e.preventDefault();
      
    onAddPlace({
      name: inputPlaceRef.current.value,
      link: inputUrlRef.current.value,
    });
    inputPlaceRef.current.value = '';
    inputUrlRef.current.value = '';
  }   


return (
    <PopupWithForm title="Новое место" buttonText="Создать" name="add-item" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
          <div className="popup__section">
              <input className="popup__input popup__input_type_place" ref={inputPlaceRef} id="place-input" placeholder="Название" name="name" type="text" minLength="2" maxLength="30" required />
              <span className="popup__input-error place-input-error"></span>
            </div>
          <div className="popup__section">
              <input className="popup__input popup__input_type_link" ref={inputUrlRef} id="url-input" placeholder="Ссылка на картинку" name="link" type="url" required />
              <span className="popup__input-error url-input-error"></span>
          </div>
      </PopupWithForm>
)    
}

export default AddPlacePopup;