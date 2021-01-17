export const template = {
  cardsTemplate: ".card-template",
  cardContainer: document.querySelector(".elements"),
  formEdit: document.querySelector(".popup-edit"),
  formAdd: document.querySelector(".popup-add")
};

export const allSelectors = {
  formSelectorEdit: ".popup-edit",
  formSelectorAddImg: ".popup-add",
  formSelector: ".popup-form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_inactive",
  inputErrorClass: "popup__field_active",
  errorClass: "popup__form-field-error_active",
};

export const initialCards = [
  {
    namePhoto: "Архыз",
    linkPhoto:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    namePhoto: "Челябинская область",
    linkPhoto:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    namePhoto: "Иваново",
    linkPhoto:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    namePhoto: "Камчатка",
    linkPhoto:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    namePhoto: "Холмогорский район",
    linkPhoto:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    namePhoto: "Байкал",
    linkPhoto:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const editButton = document.querySelector(".profile__edit-btn");

export const nameOutput = document.querySelector(".profile__name");
export const jobOutput = document.querySelector(".profile__job");

export const nameInput = document.querySelector(".popup__field_name");
export const jobInput = document.querySelector(".popup__field_job");

export const addButton = document.querySelector(".profile__add-btn");

export const popupImage = document.querySelector(".popup-img");
export const popupImageImg = document.querySelector(".popup-img__img");
export const popupImageName = document.querySelector(".popup-img__name");

