export default class Api {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: {
        authorization: this._options.headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: {
        authorization: this._options.headers.authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  updateUserInfo({ name, job }) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._options.headers.authorization,
      },
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  createCard({ name, link }) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._options.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  setUserAvatar() {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._options.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}
// other methods for working with the API
