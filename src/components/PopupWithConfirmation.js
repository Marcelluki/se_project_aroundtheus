import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this.popupForm = this._popupElement.querySelector(".modal__form");
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
    // listen for submit on this.popupForm
  }
}
