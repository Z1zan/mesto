let Popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.close-icon');

function openPopup() {
  Popup.classList.add('popup_opened');
}

function closePopup() {
  Popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.form-field');
let submitButton = document.querySelector('.block-popup__submit-btn');
let nameOutput = document.querySelector('.info__name');
let jobOutput = document.querySelector('.info__job');


function formSubmitHandler() {

  let nameInput = document.querySelector('.form-name__field');
  let jobInput = document.querySelector('.form-job__field');

  nameOutput.textContent = nameInput.value;
  jobOutput.textContent = jobInput.value;

  closePopup();
}

submitButton.addEventListener('click', formSubmitHandler);







//let form = document.querySelector('.block-popup');

//block-popup.addEventListener('keydown', formSubmitHandler);



