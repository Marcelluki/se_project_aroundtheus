export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this_popupElement.classList.add("modal_opened");
  }
  close() {
    this_popupElement.classList.remove("modal_opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const closeBtn = document.querySelector(".modal__close");
    closeBtn.addEventListener("click", () => {
      this._close();
    });
  }
}
