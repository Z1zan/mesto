import './index.css';

import Card from '../components/Cards.js';
import {initialCards} from '../components/initialCards.js';
import FormValidation from '../components/formValidation.js';
import allSelectors from '../components/allSelectors.js';

const template = {
  cardsTemplate: '.card-template',
  cardContainer: document.querySelector('.elements'),
  formAdd: document.querySelector('.popup-add'),
};


const popupEdit = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-btn');

const nameOutput = document.querySelector('.profile__name');
const jobOutput = document.querySelector('.profile__job');

const nameInput = document.querySelector('.popup__field_name');
const jobInput = document.querySelector('.popup__field_job');

const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-btn');

export const popupImage = document.querySelector('.popup-img');
export const popupImageImg = document.querySelector('.popup-img__img');
export const popupImageName = document.querySelector('.popup-img__name');

const formInputName = document.querySelector('.popup__field_name-photo');
const formInputLink = document.querySelector('.popup__field_link-photo');


function copyTextContent() {
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
};

function keyHandler(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


export function openPopup(popup) {
  popup.classList.add('popup_opened'); 
  document.addEventListener('keyup', keyHandler);
}

function openPopupAdd() {
  formInputName.value = "";
  formInputLink.value = "";
  openPopup(popupAdd);
}

addButton.addEventListener('click', () => {openPopupAdd()});


function openEditForm() {
  openPopup(popupEdit);
  copyTextContent(); 
}

editButton.addEventListener('click', openEditForm);



function closePopup(popup) {
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keyup', keyHandler);
}

popupEdit.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-edit__close-btn') || evt.target.classList.contains('overlay-edit')) {
    closePopup(popupEdit);
  }
});

popupAdd.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-add__close-btn') || evt.target.classList.contains('overlay-add')) {
    closePopup(popupAdd);
  }
});

popupImage.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-img__close-btn') || evt.target.classList.contains('overlay-img')) {
    closePopup(popupImage);
  }
});



function formSubmitHandler(evt) {
  evt.preventDefault();

  nameOutput.textContent = nameInput.value; 
  jobOutput.textContent = jobInput.value; 

  closePopup(popupEdit);
};
popupEdit.addEventListener('submit', formSubmitHandler);


function createCard(item, container) {
  const card = new Card(item, container);
  const element = card.generateCard();
  template.cardContainer.prepend(element);

}

const addCardHandler = (evt => {
  evt.preventDefault();
  const cardsValue = {
    name: formInputName.value,
    link: formInputLink.value
  }
  createCard(cardsValue, template.cardsTemplate);
  closePopup(popupAdd);
})

popupAdd.addEventListener('submit', addCardHandler);


initialCards.forEach( (item) => {
  createCard(item, template.cardsTemplate);
})

const formValidator = new FormValidation(allSelectors.formSelectorEdit, allSelectors);
formValidator.enableValidation();

const formValidatorAddImg = new FormValidation(allSelectors.formSelectorAddImg, allSelectors);
formValidatorAddImg.enableValidation();