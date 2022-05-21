import React from 'react';

function ImagePopup () {
    return(
        <div className="popup image-popup">
        <figure className="image-popup__container">
          <button className="popup__close-button image-popup__close-button"></button>
          <img className="image-popup__image" src="#" alt="" />
          <figcaption className="image-popup__title"></figcaption>
        </figure>
      </div>
    )
}

export default ImagePopup;