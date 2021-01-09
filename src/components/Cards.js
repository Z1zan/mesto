import {popupImage, popupImageImg, popupImageName, openPopup} from "../pages/index.js";

class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
  }

  _getTemplate(){
    return document
    .querySelector(this._selector)
    .content
    .cloneNode(true)
    .children[0];
  }

  _deleteHandler() {
    this._element.remove();
  }
  _likeHandler() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active');
  }
  _popupImgHandler() {
    popupImageImg.src = this._element.querySelector('.element__image').src;
    popupImageImg.alt = this._element.querySelector('.element__image').alt;
    popupImageName.textContent = this._element.querySelector('.element__name').textContent;

    openPopup(popupImage);
  }

  _setListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._deleteHandler();
    })
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._likeHandler();
    })
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._popupImgHandler();
    })
  }

  generateCard(){
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    
    this._setListeners();

    return this._element;
  }
}

export default Card;