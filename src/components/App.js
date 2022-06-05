import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
        
    })
      .catch(err => console.log(err));
}, [])


function handleCardLike (card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.likeCard(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

function handleCardDelete (card) {
   
  api.deleteCard(card._id)
    .then(() => {
      setCards(cards => cards.filter((c) => c._id != card._id));
    });
}

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
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

  function handleAddPlaceSubmit(card) {
    api.addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups ();
      })
  }
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main cards={cards} onEditProfile={editProfile} onAddPlace={addPlace} onEditAvatar={editAvatar} onCardClick={setSelectedCard} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <Footer />
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;