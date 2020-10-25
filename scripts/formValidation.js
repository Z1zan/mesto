import allSelectors from './allSelectors.js';

class FormValidation {
  constructor (formSelector, allSelectors) {
    this._formSelector = formSelector
    this._formElement = document.querySelector(formSelector);
    this._inputSelector = allSelectors.inputSelector
    this._submitButtonSelector = allSelectors.submitButtonSelector
    this._inactiveButtonClass = allSelectors.inactiveButtonClass
    this._inputErrorClass = allSelectors.inputErrorClass
    this._errorClass = allSelectors.errorClass
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
  
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  _disabledButton(button) {
    button.classList.add(this._inactiveButtonClass);
    button.setAttribute('disabled', true);
  }
  
  _unDisabledButton(button) {
    button.classList.remove(this._inactiveButtonClass);
    button.removeAttribute('disabled');
  };
  
  _toggleButtonState(inputList) {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  
    if (this._hasInvalidInput(inputList)){
      this._disabledButton(buttonElement);
  
    } else {
      this._unDisabledButton(buttonElement);
    }
  };
  
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList);
      });
    });
    this._toggleButtonState(inputList);
  };
  

  
  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
  
    formList.forEach(() => {
      const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._disabledButton(buttonElement);
      });
      this._setEventListeners();
    });
  };
}
export default FormValidation;