const popupEdit = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-btn');
const closePopupEditButton = document.querySelector('.close-edit-btn');

let formElement = document.querySelector('.form-field');
const submitButton = document.querySelector('.submit-edit-btn');
let nameOutput = document.querySelector('.profile__name');
let jobOutput = document.querySelector('.profile__job');

let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_job');

const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-btn');
const closePopupAddButton = document.querySelector('.close-add-btn');
const submitAddButton = document.querySelector('.submit-add-btn');

const cardContainer = document.querySelector('.elements');

function copyTextContent() {
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
};

function openPopupEdit() { 
  popupEdit.classList.toggle('popup_opened'); 
  copyTextContent(); 
};

function closePopupEdit() { 
  popupEdit.classList.toggle('popup_opened'); 
};


editButton.addEventListener('click', openPopupEdit);
closePopupEditButton.addEventListener('click', closePopupEdit);


function formSubmitHandler(evt) {
  evt.preventDefault();

  nameOutput.textContent = nameInput.value; 
  jobOutput.textContent = jobInput.value; 

  closePopupEdit();
};

popupEdit.addEventListener('submit', formSubmitHandler);

function openPopupAdd() {
  popupAdd.classList.toggle('popup_opened');
};

function closePopupAdd() {
  popupAdd.classList.toggle('popup_opened');
};

addButton.addEventListener('click', openPopupAdd);
closePopupAddButton.addEventListener('click', closePopupAdd);

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

  closePopupAdd();
});

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

/*const templateCardss = function(){

  const cardsTemplate = document.querySelector('.card-template').content;
  const cardsElement = cardsTemplate.cloneNode(true);

  for(let i = 0; i < initialCards.length; i += 1){
    cardsElement.querySelector('.element__name').textContent = initialCards[i].name;
    cardsElement.querySelector('.element__image').src = initialCards[i].link;
    cardsElement.querySelector('.element__image').alt = initialCards[i].name;

    cardContainer.append(cardsElement);
  }
}; */


const templateCards = function() {
  const cardsTemplate = document.querySelector('.card-template').content;
  

  initialCards.forEach(function(item) {
    const cardsElement = cardsTemplate.cloneNode(true);
    cardsElement.querySelector('.element__image').src = item.link;
    cardsElement.querySelector('.element__image').alt = item.name;
    cardsElement.querySelector('.element__name').textContent = item.name;
    const likeButton = cardsElement.querySelector('.element__like-btn')
    likeButton.addEventListener('click', function(evt){
      evt.target.classList.toggle('element__like-btn_active');
    });

    cardContainer.append(cardsElement);
  });
};

templateCards();