import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(submitForm, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector(".popup__container");
    this._inputList = this._popupForm.querySelectorAll(".popup__field");

  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;
  }

  setSubmitAction(action) {
    this._submitForm = action
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener("submit", evt => {
      evt.preventDefault();
      
      this._submitForm(this._getInputValues());
    });
  }


  close() {
    super.close();
    this._popup.reset();
  }
}
