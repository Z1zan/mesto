
export class Popup {
  constructor(selector) {
    this._selector = selector;
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      this.close(openedPopup);
    }
  }

  setEventListeners(popup) {
      if (evt.target.classList.contains('popup__close-btn') || evt.target.classList.contains('popup__overlay')) {
        this.close(popup);
      }
  }

  open(popup) {
    popup.classList.add('popup_opened'); 
    document.addEventListener('keyup', _handleEscClose());
  }

  close(popup) {
    popup.classList.remove('popup_opened'); 
    document.removeEventListener('keyup', _handleEscClose());
  }


}