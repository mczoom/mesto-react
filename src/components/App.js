import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      })
      .catch(err => console.log(err));
}, [])

 

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

  function handleUpdateUser(userInfo) {
    api.setUserInfo(userInfo)
        .then((data) => {
          setCurrentUser(data);
          closeAllPopups ();
        })
        .catch(err => console.log(err));
  }

  function handleUpdateAvatar(pic) {
    api.setNewAvatar(pic)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups ();
      })
        .catch(err => console.log(err));
  }
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main onEditProfile={editProfile} onAddPlace={addPlace} onEditAvatar={editAvatar} onCardClick={setSelectedCard} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      
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
      
      <Footer />
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;