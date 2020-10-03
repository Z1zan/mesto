const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  const lineError = formElement.querySelector('.popup__field');
  lineError.classList.add('popup__field_active');

  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__form-field-error_active')
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  
  const lineError = formElement.querySelector('.popup__field');
  lineError.classList.remove('popup__field_active');

  errorElement.textContent = '';
  errorElement.classList.remove('popup__form-field-error_active')
};

const getErrorMessage = (inputElement) => {
  return inputElement.validationMessage
}


const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;

  if (isInputNotValid) {
    const errorMessage = getErrorMessage(inputElement);
    showInputError(formElement, inputElement, errorMessage);

  } else {
    hideInputError(formElement, inputElement);

  }
};


const toggleButtonState = (inputList, formElement) => {
  const buttonElement = formElement.querySelector('.popup__submit-btn');
  const hasInvalidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid);
  if (hasInvalidInput) {
    buttonElement.classList.add('popup__submit-btn_inactive');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('popup__submit-btn_inactive');
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
  const buttonElement = formElement.querySelector('.popup__submit-btn');


  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, formElement);
    });
  });
  toggleButtonState(inputList, formElement);
};



const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();