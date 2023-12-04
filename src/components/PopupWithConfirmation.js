import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this.popupForm = this._popupElement.querySelector(".modal__form");
    this._popupButton = this._popupElement.querySelector(".modal__button");
    this.setEventListeners();
  }

  setSubmitAction(submitHandler) {
    this._handleFormSubmit = submitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      return this._handleFormSubmit().then(() => {
        this.close();
      });
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
