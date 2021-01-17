
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;

    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);

  }

  open() {
    this._popupSelector.classList.add('popup_opened'); 
    document.addEventListener('keyup', this._handleEscClose);

  }

  close() {
    this._popupSelector.classList.remove('popup_opened'); 
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
      this._popupSelector.querySelector(".popup__close-btn").addEventListener('click', () => {
        this.close();
      })
      this._popupSelector.querySelector('.popup__overlay').addEventListener('click', () => {
        this.close();
      })
  }
}