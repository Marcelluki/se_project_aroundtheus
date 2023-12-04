import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputItems = this._popupForm.querySelectorAll(".modal__input");
    this._popupButton = this._popupElement.querySelector(".modal__button");
    this._popupButtonText = this._popupButton.textContent;
  }
  close() {
    this._popupForm.reset();
    super.close();
  }

  _getInputValues() {
    const inputValues = {};
    this._inputItems.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  setLoading(isLoading) {
    if (isLoading) {
      this._popupButton.textContent = "loading...";
    } else {
      this._popupButton.textContent = this._popupButtonText;
    }
  }
}
