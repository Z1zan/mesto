const popupEdit = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-btn');
const closePopupEditButton = document.querySelector('.close-edit-btn');

let formElement = document.querySelector('.form-field');
const submitButton = document.querySelector('.popup__submit-btn');
let nameOutput = document.querySelector('.profile__name');
let jobOutput = document.querySelector('.profile__job');

let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_job');

const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-btn');
const closePopupAddButton = document.querySelector('.close-add-btn');

function copyTextContent() {
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
}

function openPopupEdit() { 
  popupEdit.classList.toggle('popup_opened'); 
  copyTextContent(); 
} 

function closePopupEdit() { 
  popupEdit.classList.toggle('popup_opened'); 
} 


editButton.addEventListener('click', openPopupEdit);
closePopupEditButton.addEventListener('click', closePopupEdit);


function formSubmitHandler(evt) {
  evt.preventDefault();

  nameOutput.textContent = nameInput.value; 
  jobOutput.textContent = jobInput.value; 

  closePopupEdit();
}

popupEdit.addEventListener('submit', formSubmitHandler);

function openPopupAdd() {
  popupAdd.classList.toggle('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.toggle('popup_opened');
}

addButton.addEventListener('click', openPopupAdd);
closePopupAddButton.addEventListener('click', closePopupAdd);