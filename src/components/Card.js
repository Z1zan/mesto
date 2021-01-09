import Popup from './Popup.js';

class Card extends Popup {
  constructor(handleCardClick) {
    this._handleCardClick = handleCardClick();
  }

}