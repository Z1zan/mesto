import "./index.css";

import * as data from "../utils/constants.js";

import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const popupWithImg = new PopupWithImage(
  data.popupImage,
  data.popupImageImg,
  data.popupImageName
);
popupWithImg.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: data.nameOutput,
  jobSelector: data.jobOutput,
});

const createCard = (item) => {
  const card = new Card(item.namePhoto, item.linkPhoto, data.template.cardsTemplate, {
    handleCardClick: () => {
      popupWithImg.open(item.name, item.link);
      console.log("handleCard");
    },
  });

  const cardItem = card.generateCard();
  return cardItem;
};

const addCardHandler = new Section(
  {
    items: data.initialCards,
    renderer: (item) => {
      addCardHandler.addItem(createCard(item));
    },
  },
  data.template.cardContainer
);
addCardHandler.rendererItem();



const formValidatorEditProfile = new FormValidation(
  data.allSelectors.formSelectorEdit,
  data.allSelectors
);
formValidatorEditProfile.enableValidation();

const editPopupForm = new PopupWithForm(data.template.formEdit, {
  submitForm: (formData) => {
    userInfo.setUserInfo(formData);
    editPopupForm.close();
  }
});

editPopupForm.setEventListeners();


data.editButton.addEventListener("click", () => {
  formValidatorEditProfile.disabledButton();
  editPopupForm.open();

  const profileData = userInfo.getUserInfo();
  data.nameInput.value = profileData.name;
  data.jobInput.value = profileData.job;
});


const formValidatorAddImg = new FormValidation(
  data.allSelectors.formSelectorAddImg,
  data.allSelectors
);
formValidatorAddImg.enableValidation();

const popupAddForm = new PopupWithForm(data.template.formAdd, {
  submitForm: (item) => {
    addCardHandler.addItem(createCard(item));
    console.log(item);
    popupAddForm.close();
  },
});

popupAddForm.setEventListeners();

data.addButton.addEventListener("click", () => {
  formValidatorAddImg.disabledButton();
  popupAddForm.open();
});
