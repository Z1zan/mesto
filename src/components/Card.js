export default class Card {
  constructor(data, cardSelector, handleDeleteButtonClick, handleLikeClick, handleUnlikeClick, { handleCardClick }, myId) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._myId = myId;
    this._cardSelector = cardSelector;
    this._handleDeleteButtonClick = handleDeleteButtonClick.bind(this);
    this._handleLikeClick = handleLikeClick.bind(this);
    this._handleUnlikeClick = handleUnlikeClick.bind(this);
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

  getId() {
    return this._cardId;
  }

  deleteHandler() {
    console.log(this._element);
    this._element.remove();

  }

  _likeHandler(likeItem) {
    if (!likeItem.classList.contains("element__like-btn_active")) {
      this._handleLikeClick()
    } else {
      this._handleUnlikeClick()
    }
  }

  _setLikes(card) {
    card.querySelector(".element__like-number").textContent = this._likes.length;
    if (this._likes.some((i) => i._id === this._myId)) {
      card.querySelector(".element__like-btn").classList.add("element__like-btn_active");
    }
  }


  _setListeners() {
    // this._cardDelete.addEventListener("click", () => {
    //   this.deleteHandler();
    // });  //старый

    this._ownerId === this._myId
      ? this._cardDelete.addEventListener("click", this._handleDeleteButtonClick)
      : this._cardDelete.style.display = "none";

    this._cardLike.addEventListener("click", () => {
      this._likeHandler(this._cardLike, this._element);
    });


    this._cardImgImg.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._cardImgName.textContent = this._name;
    this._cardImgImg.alt = this._name;
    this._cardImgImg.src = this._link;

    this._element.id = this._cardId;

    this._setListeners(this._element);

    this._setLikes(this._element);

    return this._element;
  }
}
