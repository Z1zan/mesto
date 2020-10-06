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

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const disabledButton = (button) => {
  button.classList.add(allSelectors.inactiveButtonClass);
  button.setAttribute('disabled', true);
}

function unDisabledButton(button) {
  button.classList.remove(allSelectors.inactiveButtonClass);
  button.removeAttribute('disabled');
};

function toggleButtonState(inputList, formElement) {
  const buttonElement = formElement.querySelector(allSelectors.submitButtonSelector);

  if (hasInvalidInput(inputList)){
    disabledButton(buttonElement);

  } else {
    unDisabledButton(buttonElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(allSelectors.inputSelector));
  

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

  const inputList = Array.from(document.querySelectorAll(allSelectors.inputSelector));

  // const buttonElement = document.querySelector(allSelectors.submitButtonSelector);

  formList.forEach((formElement) => {
    // const buttonElement = formElement.querySelector(allSelectors.submitButtonSelector);

    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // unDisabledButton(buttonElement);  // не работает

      toggleButtonState(inputList, formElement); // работает

    });
    setEventListeners(formElement);


  });
};

enableValidation();