import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);
  

  function editProfile () {
    setEditProfilePopupState(!isEditProfilePopupOpen);
  }

  function addPlace () {
    setAddPlacePopupState(!isAddPlacePopupOpen);
  }

  function editAvatar () {
    setEditAvatarPopupState(!isEditAvatarPopupOpen);
  }

  function closeAllPopups () {
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
    setEditAvatarPopupState(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={editProfile} onAddPlace={addPlace} onEditAvatar={editAvatar} onCardClick={setSelectedCard} />

      <PopupWithForm title="Редактировать профиль" buttonText="Сохранить" name="edit-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <div className="popup__section">
            <input className="popup__input popup__input_type_name" id="username-input" placeholder="Введите имя" name="username" type="text" minLength="2" maxLength="40" required />
            <span className="popup__input-error username-input-error"></span>
          </div>
          <div className="popup__section">
            <input className="popup__input popup__input_type_occupation" id="occupation-input" placeholder="Введите информацию о себе" name="useroccupation" type="text" minLength="2" maxLength="200" required />
            <span className="popup__input-error occupation-input-error"></span>
          </div>
      </PopupWithForm>
      <PopupWithForm title="Новое место" buttonText="Создать" name="add-item" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <div className="popup__section">
              <input className="popup__input popup__input_type_place" id="place-input" placeholder="Название" name="name" type="text" minLength="2" maxLength="30" required />
              <span className="popup__input-error place-input-error"></span>
            </div>
          <div className="popup__section">
              <input className="popup__input popup__input_type_link" id="url-input" placeholder="Ссылка на картинку" name="link" type="url" required />
              <span className="popup__input-error url-input-error"></span>
          </div>
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" buttonText="Сохранить" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <div className="popup-edit-avatar__section">
              <input className="popup__input popup__input_type_url" id="link-input" placeholder="Ссылка на аватар" name="avatar" type="url" required />
              <span className="popup__input-error link-input-error"></span>
          </div>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
  </div>  
  );
}

export default App;