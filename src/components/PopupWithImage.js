import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector(".modal__preview-image");
    this._description = this._popupElement.querySelector(
      ".modal__preview-text"
    );
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._description.textContent = name;
    super.open();
  }
}
