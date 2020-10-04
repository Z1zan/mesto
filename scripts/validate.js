const allSelectors = {
  formSelector: '.popup-form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__field_active',
  errorClass: 'popup__form-field-error_active'
};


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  const lineError = formElement.querySelector(`#${inputElement.id}`);
  lineError.classList.add(allSelectors.inputErrorClass);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(allSelectors.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  
  const lineError = formElement.querySelector(`#${inputElement.id}`);
  lineError.classList.remove(allSelectors.inputErrorClass);

  errorElement.textContent = '';
  errorElement.classList.remove(allSelectors.errorClass);
};

const getErrorMessage = (inputElement) => {
  return inputElement.validationMessage;
};


const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;

  if (isInputNotValid) {
    const errorMessage = getErrorMessage(inputElement);
    showInputError(formElement, inputElement, errorMessage);

  } else {
    hideInputError(formElement, inputElement);

  }
};

function toggleButtonState(inputList, formElement) {
  const buttonElement = formElement.querySelector(allSelectors.submitButtonSelector);

  if (hasInvalidInput(inputList)){
    buttonElement.classList.add(allSelectors.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);

  } else {
    buttonElement.classList.remove(allSelectors.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');

  }
};


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(allSelectors.inputSelector));
  const buttonElement = formElement.querySelector(allSelectors.submitButtonSelector);


  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, formElement);
    });
  });
  toggleButtonState(inputList, formElement);
};



const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(allSelectors.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();