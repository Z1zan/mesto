const popupEdit = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-btn');
const closePopupEditButton = document.querySelector('.popup-edit__close-btn');

const nameOutput = document.querySelector('.profile__name');
const jobOutput = document.querySelector('.profile__job');

const nameInput = document.querySelector('.popup__field_name');
const jobInput = document.querySelector('.popup__field_job');

const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-btn');
const closePopupAddButton = document.querySelector('.popup-add__close-btn');
const submitAddButton = document.querySelector('.submit-add-btn');

const cardContainer = document.querySelector('.elements');

const popupImage = document.querySelector('.popup-img');
const closePopupImgButton = document.querySelector('.popup-img__close-btn');
const popupImagePic = document.querySelector('.popup-img__img');
const popupImageName = document.querySelector('.popup-img__name');

const name = document.querySelector('.popup__field_name-photo');
const link = document.querySelector('.popup__field_link-photo');

const popupOverlayEdit = document.querySelector('.overlay-edit');
const popupOverlayAdd = document.querySelector('.overlay-add');
const popupOverlayImg = document.querySelector('.overlay-img');




function copyTextContent() {
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
};

function keyHandler(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    openedPopup.classList.remove('popup_opened');
  }
}

function togglePopupEdit() { 
  popupEdit.classList.toggle('popup_opened'); 
  copyTextContent(); 
  document.addEventListener('keydown', keyHandler);
};
editButton.addEventListener('click', togglePopupEdit);
closePopupEditButton.addEventListener('click', togglePopupEdit);
popupOverlayEdit.addEventListener('click', togglePopupEdit);


function togglePopupAdd() {
  popupAdd.classList.toggle('popup_opened');
  document.addEventListener('keydown', keyHandler);
};
addButton.addEventListener('click', togglePopupAdd);
closePopupAddButton.addEventListener('click', togglePopupAdd);
popupOverlayAdd.addEventListener('click', togglePopupAdd);



function togglePopupImg() {
  popupImage.classList.toggle('popup_opened');
  document.addEventListener('keydown', keyHandler);
};
closePopupImgButton.addEventListener('click', togglePopupImg);
popupOverlayImg.addEventListener('click', togglePopupImg);


function formSubmitHandler(evt) {
  evt.preventDefault();

  nameOutput.textContent = nameInput.value; 
  jobOutput.textContent = jobInput.value; 

  togglePopupEdit();
};
popupEdit.addEventListener('submit', formSubmitHandler);


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


function createCard(name, link){
  const cardsTemplate = document.querySelector('.card-template').content;
  const cardsElement = cardsTemplate.cloneNode(true);
  const elementImage = cardsElement.querySelector('.element__image');
  const elementName = cardsElement.querySelector('.element__name');

  elementImage.alt = name;
  elementName.textContent = name;
  elementImage.src = link;

  elementImage.addEventListener('click', function(){
    togglePopupImg();
    
    popupImagePic.src = link;
    popupImagePic.alt = name;
    popupImageName.textContent = name;
  });

  const likeButton = cardsElement.querySelector('.element__like-btn');
  likeButton.addEventListener('click', function(evt){
    evt.target.classList.toggle('element__like-btn_active');
  });

  const deleteCard = cardsElement.querySelector('.element__trash');
  const elementCard = cardsElement.querySelector('.element');
  deleteCard.addEventListener('click', function(evt){
    evt.target.closest('.element');
    elementCard.remove();
  });
  return elementCard;
};

function addCard(cardContainer, elementCard) {
  cardContainer.prepend(elementCard);
}

initialCards.forEach(function(item) {
  addCard(cardContainer, createCard(item.name, item.link));
});

submitAddButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  addCard(cardContainer, createCard(name.value, link.value));

  name.value = '';
  link.value = '';

  togglePopupAdd();
});

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

/*const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('.popup__submit-btn_inactive');
  } else {
    buttonElement.classList.remove('.popup__submit-btn_inactive');
  }
}*/

