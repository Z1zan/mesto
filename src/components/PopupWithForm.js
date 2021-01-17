import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;

    this._popupForm = this._popupSelector.querySelector(".popup__container");

  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__field");
    this._formValues = {};
  
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;

  }

  setEventListeners() {
    super.setEventListeners();

    this._popupSelector.addEventListener("submit", evt => {
      evt.preventDefault();
      
      this._submitForm(this._getInputValues());
    });
  }


  close() {
    super.close();
    this._popupSelector.reset();
  }
}
