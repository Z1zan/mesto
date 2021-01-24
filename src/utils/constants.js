export const template = {
  cardsTemplate: ".card-template",
  cardContainer: document.querySelector(".elements"),
  formEdit: document.querySelector(".popup-edit"),
  formAdd: document.querySelector(".popup-add"),
  formAvatar: document.querySelector(".popup-avatar"),
  formDelete: document.querySelector(".popup-del")
};

export const allSelectors = {
  formSelectorEdit: ".popup-edit",
  formSelectorAddImg: ".popup-add",
  formSelectorAvatar: ".popup-avatar",
  formSelector: ".popup-form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_inactive",
  inputErrorClass: "popup__field_active",
  errorClass: "popup__form-field-error_active",
};

// export const initialCards = [
//   {
//     name: "Архыз",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link:
//       "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

export const editButton = document.querySelector(".profile__edit-btn");

export const nameOutput = document.querySelector(".profile__name");
export const jobOutput = document.querySelector(".profile__job");

export const nameInput = document.querySelector(".popup__field_name");
export const jobInput = document.querySelector(".popup__field_job");

export const addButton = document.querySelector(".profile__add-btn");

export const popupImage = document.querySelector(".popup-img");
export const popupImageImg = document.querySelector(".popup-img__img");
export const popupImageName = document.querySelector(".popup-img__name");

export const avatarBtn = document.querySelector(".submit-avatar-btn");
export const editBtn = document.querySelector(".submit-edit-btn");
export const delBtn = document.querySelector(".submit-del-btn");
export const addBtn = document.querySelector(".submit-add-btn");

export const avatarOverlay = document.querySelector(".profile__avatar-overlay");
export const avatarInput = document.querySelector(".popup__field_link-avatar");
export const avatarOutput = document.querySelector(".profile__avatar");

export const likeNumber = document.querySelector(".element__like-number");

export const deleteButton = document.querySelector(".element__trash");

export const myUserId = "3427568067ed1de7d777032e";