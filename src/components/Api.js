export default class Api {
  constructor(options, headers) {
    this._options = options;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: this._options.headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  getUserInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  updateUserInfo({ name, job }) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  createCard({ name, link }) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  setUserAvatar(link) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  likeCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._options.headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  dislikeCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._options.headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._options.headers,
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.error(err);
      });
  }
}

// other methods for working with the API
