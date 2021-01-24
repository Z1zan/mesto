import "./index.css";

import * as data from "../utils/constants.js";

import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

// const api = new Api({
//   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
//   headers: {
//     authorization: '264a260c-a5ff-4494-a8c2-9dd802b24892',
//     'Content-Type': 'application/json'
//   }
// });

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-19",
  token: "264a260c-a5ff-4494-a8c2-9dd802b24892",
});

const popupWithImg = new PopupWithImage(
  data.popupImage,
  data.popupImageImg,
  data.popupImageName
);
popupWithImg.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: data.nameOutput,
  jobSelector: data.jobOutput,
  avatarSelector: data.avatarOutput,
});

function createCard(item) {
  const card = new Card(
    item,
    data.template.cardsTemplate,
    () => {
      data.template.formDelete.elements.cardId.value = item._id; //получили id карточки
      deleteCardPopup.open();
    },
    () =>
      api
        .likeCard(item._id)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject(`Ошибка лайка карточки: ${res.status}`)
        )
        .then((item) => {
          const cardElement = document.getElementById(`${item._id}`);
          cardElement.querySelector(".element__like-number").textContent =
            item.likes.length;
          cardElement
            .querySelector(".element__like-btn")
            .classList.add("element__like-btn_active");
        })
        .catch((err) => {
          console.log(err);
        }),
    () =>
      api
        .unLikeCard(item._id)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject(`Ошибка дизлайка карточки: ${res.status}`)
        )
        .then((item) => {
          const cardElement = document.getElementById(`${item._id}`);
          cardElement.querySelector(".element__like-number").textContent =
            item.likes.length;
          cardElement
            .querySelector(".element__like-btn")
            .classList.remove("element__like-btn_active");
        })
        .catch((err) => {
          console.log(err);
        }),
    {
      handleCardClick: () => {
        popupWithImg.open(item.name, item.link);
      },
    },
    data.myUserId
  );

  // const cardItem = card.generateCard();
  return card.generateCard();
}


const addCardHandler = new Section(
  {
    renderer: (item) => {
      addCardHandler.addItemEnd(createCard(item));
    },
  },
  data.template.cardContainer
);

// изменение профиля с последующей отправкой на сервер +++++++++++++
const editPopupForm = new PopupWithForm((formData) => {
  data.editBtn.textContent = "Сохранение...";
  api
    .setUserInfo(formData)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`Ошибка изменения профиля: ${res.status}`)
    )
    .then((data) => {
      userInfo.setUserInfo({
        name: data.name,
        about: data.about,
        avatar: data.avatar,
      });
      editPopupForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => (data.editBtn.textContent = "Сохранить"));
}, data.template.formEdit);

editPopupForm.setEventListeners();

data.editButton.addEventListener("click", () => {
  formValidatorEditProfile.disabledButton();
  editPopupForm.open();

  const profileData = userInfo.getUserInfo();
  data.nameInput.value = profileData.name;
  data.jobInput.value = profileData.about;
});

const formValidatorAvatar = new FormValidation(
  data.allSelectors.formSelectorAvatar,
  data.allSelectors
);
formValidatorAvatar.enableValidation();

// изменение аватара +++++++++++++++
const changeAvatar = new PopupWithForm((formData) => {
  data.avatarBtn.textContent = "Сохранение...";
  api
    .setAvatar(formData)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`Ошибка изменения аватара: ${res.status}`)
    )
    .then((formData) => {
      data.avatarOutput.src = formData.avatar;
      changeAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => (data.avatarBtn.textContent = "Сохранить"));
}, data.template.formAvatar);
changeAvatar.setEventListeners();

data.avatarOverlay.addEventListener("click", () => {
  formValidatorAvatar.disabledButton();
  changeAvatar.open();
});

// было удаление
// submitForm: (data => {
//   api
//     .removeCard(card.getId())
//     .then(() => card.deleteHandler())
//     .catch((err) => console.log('Ошибка удаления карточки'))
// })
// })

//удаление карточки через попап
export const deleteCardPopup = new PopupWithForm(() => {
  const idCard = data.template.formDelete.elements.cardId.value;
  data.delBtn.textContent = "Удаление..."
  api
    .removeCard(idCard)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`Ошибка удаления картинки: ${res.status}`)
    )
    .then(() => {
      const card = document.querySelector("#idCard");
      console.log(card);
      card.deleteHandler();
      deleteCardPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => data.delBtn.textContent = "Да")
}, data.template.formDelete);
deleteCardPopup.setEventListeners();

const formValidatorAddImg = new FormValidation(
  data.allSelectors.formSelectorAddImg,
  data.allSelectors
);
formValidatorAddImg.enableValidation();

//добавление карточки на сервер и на монитор
const popupAddForm = new PopupWithForm((item) => {
  data.addBtn.textContent = "Создание..."
  api
    .createCard(item)
    .then((res) =>
    res.ok
      ? res.json()
      : Promise.reject(`Ошибка удаления картинки: ${res.status}`)
  )
    .then((result) => {
      addCardHandler.rendererItem(item);
    })
    .catch((err) => console.log("Ошибка при создании карточки на сервере"))
    .finally(() => data.addBtn.textContent = "Создать")
  addCardHandler.addItemStart(createCard(item));
  popupAddForm.close();
}, data.template.formAdd);

popupAddForm.setEventListeners();

data.addButton.addEventListener("click", () => {
  formValidatorAddImg.disabledButton();
  popupAddForm.open();
});



const formValidatorEditProfile = new FormValidation(
  data.allSelectors.formSelectorEdit,
  data.allSelectors
);
formValidatorEditProfile.enableValidation();

// получение с сервера информации о профиле ++++++++
api
  .getUserInfo()
  .then((res) =>
    res.ok
      ? res.json()
      : Promise.reject(`Ошибка получения профиля: ${res.status}`)
  )
  .then((data) => {
    userInfo.setUserInfo({
      name: data.name,
      about: data.about,
      avatar: data.avatar,
    });
  })
  .catch((err) => {
    console.log(err);
  });

  // получение карточек с сервера +++++++++
api
  .getInitialCards()
  // .then((res) =>
  //   res.ok
  //     ? res.json()
  //     : Promise.reject(`Ошибка загрузки карточек: ${res.status}`)
  // )
  .then((result) => {
    addCardHandler.rendererItem(result)
  })
  .catch((err) => {
    console.log(err);
  });
