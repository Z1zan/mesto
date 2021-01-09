import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(selector, submitForm) {
    this._selector = selector;
    this.submitForm = submitForm;
  }

  _getInputValues(evt) {
    evt.preventDefault();

    nameInput.value = nameOutput.textContent;
    jobInput.value = jobOutput.textContent;

    this.close(popup);
  }

  setEventListeners(popup) {
    popup.addEventListener("submit", this._getInputValues);

    if (
      evt.target.classList.contains("popup__close-btn") ||
      evt.target.classList.contains("popup__overlay")
    ) {
      this.close(popup);
    }
  }
}
