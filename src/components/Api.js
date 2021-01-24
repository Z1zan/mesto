export default class Api {
  constructor({baseUrl, token}) {
    this.baseUrl = baseUrl;
    this._token = token;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(response => response.ok ? response.json() : Promise.reject(`Ошибка загрузки карточек: ${response.status}`))
  }

  createCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    // .then(result => result.ok ? result.json() : Promise.reject(`Ошибка создания карточки: ${result.status}`))
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._token
      }
    })
  }

    setUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me `, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
        avatar: data.avatar
      })
    })
  }

  setAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link.avatar
      })
    })
  }

  removeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
    // .then(result => result.ok ? result.json() : Promise.reject(`Ошибка удаления карточка: ${result.status}`))
  }

  likeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
  }

  unLikeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      }
    })
  }

}

// const api = new Api({
//   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
//   headers: {
//     authorization: '264a260c-a5ff-4494-a8c2-9dd802b24892',
//     'Content-Type': 'application/json'
//   }
// }); 