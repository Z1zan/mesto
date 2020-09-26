const popupEdit = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-btn');
const closePopupEditButton = document.querySelector('.popup-edit__close-btn');

let formElement = document.querySelector('.form-field');
const submitButton = document.querySelector('.submit-edit-btn');
let nameOutput = document.querySelector('.profile__name');
let jobOutput = document.querySelector('.profile__job');

let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_job');

const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-btn');
const closePopupAddButton = document.querySelector('.popup-add__close-btn');
const submitAddButton = document.querySelector('.submit-add-btn');

const cardContainer = document.querySelector('.elements');

const popupImage = document.querySelector('.popup-img');
const closePopupImgButton = document.querySelector('.popup-img__close-btn');
const popupImagePic = document.querySelector('.popup-img__img');
const popupImageName = document.querySelector('.popup-img__name');



function copyTextContent() {
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
};

function openClosePopupEdit() { 
  popupEdit.classList.toggle('popup_opened'); 
  copyTextContent(); 
};
editButton.addEventListener('click', openClosePopupEdit);
closePopupEditButton.addEventListener('click', openClosePopupEdit);


function openClosePopupAdd() {
  popupAdd.classList.toggle('popup_opened');
};
addButton.addEventListener('click', openClosePopupAdd);
closePopupAddButton.addEventListener('click', openClosePopupAdd);


function openClosePopupImg() {
  popupImage.classList.toggle('popup_opened');
};
closePopupImgButton.addEventListener('click', openClosePopupImg);


const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const templateCards = function() {
  const cardsTemplate = document.querySelector('.card-template').content;
  
  initialCards.forEach(function(item) {
    const cardsElement = cardsTemplate.cloneNode(true);
    cardsElement.querySelector('.element__image').src = item.link;
    cardsElement.querySelector('.element__image').alt = item.name;
    cardsElement.querySelector('.element__name').textContent = item.name;
    cardsElement.querySelector('.element__image').addEventListener('click', function() {
      openClosePopupImg();
      popupImagePic.src = item.link;
      popupImagePic.alt = item.name;
      popupImageName.textContent = item.name;
    });

    const likeButton = cardsElement.querySelector('.element__like-btn')
    likeButton.addEventListener('click', function(evt){
      evt.target.classList.toggle('element__like-btn_active');
    });

      const deleteCard = cardsElement.querySelector('.element__trash');
      const elementCard = cardsElement.querySelector('.element')
      deleteCard.addEventListener('click', function(evt){
        evt.target.closest('.element');
        elementCard.remove();
      });
    cardContainer.append(cardsElement);
  });
};

templateCards();


function formSubmitHandler(evt) {
  evt.preventDefault();

  nameOutput.textContent = nameInput.value; 
  jobOutput.textContent = jobInput.value; 

  openClosePopupEdit();
};
popupEdit.addEventListener('submit', formSubmitHandler);

function addCard(nameValue, linkValue){
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.element__image').alt = nameValue;
  cardElement.querySelector('.element__name').textContent = nameValue;
  cardElement.querySelector('.element__image').src = linkValue;

  cardContainer.prepend(cardElement);
};

submitAddButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  const name = document.querySelector('.popup__field_name-photo');
  const link = document.querySelector('.popup__field_link-photo');

  addCard(name.value, link.value);

  name.value = '';
  link.value = '';

  openClosePopupAdd();
});




