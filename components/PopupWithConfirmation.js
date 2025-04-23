import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = this._form
      ? this._form.querySelectorAll(".popup__input")
      : [];
    this._submitButton = this._form
      ? this._form.querySelector(".popup__submit-button")
      : null;

    if (!this._submitButton) {
      console.error(
        `No se activo el boton de envio en el popup: ${popupSelector}`
      );
      return;
    }
    this._submitButtonText = this._submitButton.textContent;
  }

  open(handleConfirm) {
    super.open();
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (this._handleConfirm) {
        this._handleConfirm();
        this.close();
      }
    });
  }
}
