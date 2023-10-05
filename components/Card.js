export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }
  _setEventListeners() {
    // LIKE BUTTON
    this._cardElement
      .querySelector(".cards__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    // DELETE BUTTON
    this._cardElement
      .querySelector(".cards__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    //   IMAGE PREVIEW
    this._cardElement
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });
  }
  _handleDeleteCard() {
    this._cardElement.remove();
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".cards__like-button")
      .classList.toggle("cards__like-button_active");
  }

  getView() {
    const node = (this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__list-item")
      .cloneNode(true));

    const cardImageEl = node.querySelector(".cards__image");
    cardImageEl.src = this._link;
    cardImageEl.alt = this._name;

    const cardTitleEl = node.querySelector(".cards__title");
    cardTitleEl.textContent = this._name;

    this._setEventListeners();

    return node;
  }
}
