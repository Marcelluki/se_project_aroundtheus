export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleLikeClick
  ) {
    this._name = name;
    this._link = link;
    this.id = _id;
    this.isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__list-item")
      .cloneNode(true);
    this.setLikeButtonState();

  }
  _setEventListeners() {
    // LIKE BUTTON
    this._cardElement
      .querySelector(".cards__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick(this);
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
        this._handleImageClick(this._name, this._link);
      });
  }

  setLikeButtonState() {
    if (this.isLiked) {
      this.likeCard();
    } else {
      this.disLikeCard();
    }
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  likeCard() {
    this._cardElement
      .querySelector(".cards__like-button")
      .classList.add("cards__like-button_active");
  }

  disLikeCard() {
    this._cardElement
      .querySelector(".cards__like-button")
      .classList.remove("cards__like-button_active");
  }

  _handleLikeIcon() {
    this._handleLikeClick({ id: this._id, isLiked: this._isLiked });
    this._cardElement
      .querySelector(".cards__like-button")
      .classList.toggle("cards__like-button_active");
  }

  getView() {
    // this._cardElement = document
    //   .querySelector(this._cardSelector)
    //   .content.querySelector(".cards__list-item")
    //   .cloneNode(true);

    const cardImageEl = this._cardElement.querySelector(".cards__image");
    cardImageEl.src = this._link;
    cardImageEl.alt = this._name;

    const cardTitleEl = this._cardElement.querySelector(".cards__title");
    cardTitleEl.textContent = this._name;

    // by default you need to check the isLiked field and set like button to the active/passive state based on isLiked

    this._setEventListeners();

    return this._cardElement;
  }
}
