import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(submitForm, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popupSelector.querySelector(".popup__container");

  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__field");
    this._formValues = {};
    // console.log(this._inputList);
  
    this._inputList.forEach(input => {
      // console.log(input.name);
      // console.log(input.value);
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupSelector.addEventListener("submit", evt => {
      evt.preventDefault();
      // console.log(this._submitForm);
      
      this._submitForm(this._getInputValues());
    });
  }


  close() {
    super.close();
    this._popupSelector.reset();
  }
}
