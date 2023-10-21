import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupElement;
    this._handleFormSubmit = handleFormSubmit;
  }
}
