
export default class Card {
  constructor(name, link, cardSelector, { handleCardClick }) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardImgImg = this._element.querySelector(".element__image");
    this._cardImgName = this._element.querySelector(".element__name");
    this._cardDelete = this._element.querySelector(".element__trash");
    this._cardLike = this._element.querySelector(".element__like-btn");
  }

  _getTemplate() {
    return (
      document
        .querySelector(this._cardSelector)
        .content
        .cloneNode(true)
        .children[0]
    );
  }

  _deleteHandler() {
    return this._element.remove();
  }

  _likeHandler() {
    return this._cardLike.classList.toggle("element__like-btn_active");
  }


  _setListeners() {
    this._cardDelete.addEventListener("click", () => {
      this._deleteHandler();
    });
    this._cardLike.addEventListener("click", () => {
      this._likeHandler();
    });
    this._cardImgImg.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._cardImgName.textContent = this._name;
    this._cardImgImg.alt = this._name;
    this._cardImgImg.src = this._link;

    this._setListeners();

    return this._element;
  }
}
