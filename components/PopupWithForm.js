import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputItems = this._popupForm.querySelector(".modal__input");
  }
  close() {
    this._popupForm.reset();
    super.close();
  }

  _getInputValues() {
    const inputValues = [];
    this._inputItems.forEach((item) => {
      inputValues[inputItems.name] = inputItems.value;
    });
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
