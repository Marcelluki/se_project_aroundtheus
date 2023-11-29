export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleLikeClick
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;

    console.log(_id);
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
        this._handleImageClick(this._name, this._link);
      });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  _handleLikeIcon() {
    this._handleLikeClick({ id: this._id, isLiked: this._isLiked });
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

    // by default you need to check the isLiked field and set like button to the active/passive state based on isLiked

    this._setEventListeners();

    return node;
  }
}
