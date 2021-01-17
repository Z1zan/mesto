import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imgSelector, nameSelector) {
    super(popupSelector);
    this._imgLink = imgSelector;
    this._imgName = nameSelector;
  }

  open(namePhoto, linkPhoto) {
    this._imgLink.src = linkPhoto;
    this._imgLink.alt = namePhoto;
    this._imgName.textContent = namePhoto;

    super.open();
  }
}
