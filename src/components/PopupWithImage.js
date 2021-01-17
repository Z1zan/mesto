import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imgSelector, nameSelector) {
    super(popupSelector);
    this._imgLink = imgSelector;
    this._imgName = nameSelector;
  }

  open(name, link) {
    this._imgLink.src = link;
    this._imgLink.alt = name;
    this._imgName.textContent = name;

    super.open();
  }
}
