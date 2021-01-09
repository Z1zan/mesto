import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(selector) {
    this._selector = selector;
  }

  open(popup) {
    popupImageImg.src = this._element.querySelector('.element__image').src;
    popupImageImg.alt = this._element.querySelector('.element__image').alt;
    popupImageName.textContent = this._element.querySelector('.element__name').textContent;

    popup.classList.add('popup_opened'); 
    document.addEventListener('keyup', _handleEscClose());
  }
}