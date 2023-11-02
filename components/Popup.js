export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    const closeBtn = this._popupElement.querySelector(".modal__close");
    closeBtn.addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("keydown", this._handleEscClose);

    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
