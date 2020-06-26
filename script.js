let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-btn');

let formElement = document.querySelector('.form-field');
let submitButton = document.querySelector('.popup__submit-btn');
let nameOutput = document.querySelector('.profile__name');
let jobOutput = document.querySelector('.profile__job');

let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_job');


function copyTextContent() {
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
}

function openPopup() {
  popup.classList.toggle('popup_opened');
  copyTextContent();
}

function closePopup() {
  popup.classList.toggle('popup_opened');
  copyTextContent();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


function formSubmitHandler() {
  nameOutput.textContent = nameInput.value;
  jobOutput.textContent = jobInput.value;

  closePopup();
}

submitButton.addEventListener('click', formSubmitHandler);



