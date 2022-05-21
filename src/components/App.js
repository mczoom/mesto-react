import React from 'react';
//import logo from '../images/logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

//import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <PopupWithForm />
      <ImagePopup />
      <Footer />
  </div>  
  );
}

export default App;
