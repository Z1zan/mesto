class FormValidation {
  constructor (formSelector, allSelectors) {
    this._formSelector = formSelector;
    this._formElement = document.querySelector(formSelector);
    this._inputSelector = allSelectors.inputSelector;
    this._submitButtonSelector = allSelectors.submitButtonSelector;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._formList = Array.from(document.querySelectorAll(this._formSelector));
    this._button = this._formElement.querySelector(this._submitButtonSelector);
    this._inactiveButtonClass = allSelectors.inactiveButtonClass;
    this._inputErrorClass = allSelectors.inputErrorClass;
    this._errorClass = allSelectors.errorClass;
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  
    const lineError = this._formElement.querySelector(`#${inputElement.id}`);
    lineError.classList.add(this._inputErrorClass);
  
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };
  
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
    const lineError = this._formElement.querySelector(`#${inputElement.id}`);
    lineError.classList.remove(this._inputErrorClass);
  
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  };
  
  _getErrorMessage(inputElement) {
    return inputElement.validationMessage;
  };
  
  
  _checkInputValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
  
    if (isInputNotValid) {
      const errorMessage = this._getErrorMessage(inputElement);
      this._showInputError(inputElement, errorMessage);
  
    } else {
      this._hideInputError(inputElement);
  
    }
  };
  
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  disabledButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.setAttribute('disabled', true);
  }
  
  unDisabledButton() {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.removeAttribute('disabled');
  };
  
  _toggleButtonState() {
    if (this._hasInvalidInput()){
      this.disabledButton();
  
    } else {
      this.unDisabledButton();
    }
  };
  
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
  

  
  enableValidation() {
    this._formList.forEach(() => {
      const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this.disabledButton(buttonElement);
      });
      this._setEventListeners();
    });
  };
}
export default FormValidation;