class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
    this._inactiveButtonClass = settings._inputErrorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._errorClass = settings._errorClass;

    this._form = formEl;
  }

  _toggleButtonState(submitButton, { inactiveButtonClass }) {
    if (hasInvalidInput(this._inputEls)) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
      return;
    }

    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }

  _setEventListeners() {
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(this._form, inputEl);
        toggleButtonState(this._submitButton);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, options);
  }
}

const editFormValidator = new FormValidator();
editFormValidator.enableValidation();
