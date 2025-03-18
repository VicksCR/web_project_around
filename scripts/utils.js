import { validationSettings, FormValidator } from "./FormValidator.js";
export {
  popupEditProfile,
  formProfileName,
  formProfileAboutMe,
  formAddCard,
  popupOpenAddCard,
  popupLargeImage,
};
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__aboutme");

const popupEditProfile = document.querySelector("#popup-edit-profile");

const formInputName = document.querySelector("#first-name");
const formInputAboutMe = document.querySelector("#about-me");
const formProfileName = document.querySelector("#popup-form-edit");
const formProfileAboutMe = document.querySelector("#popup-form-edit");

const popupOpenAddCard = document.querySelector("#popup-add-card");
const formAddCard = document.querySelector("#form-popup-add-card");

// popup image
const popupLargeImage = document.querySelector("#popup-image");
const popupImageElement = document.querySelector("#popup-large-image");
const popupImageTitle = document.querySelector("#popup-big-image-title");

//Instancias de FormValidator
const profileFormValidator = new FormValidator(
  validationSettings,
  formProfileAboutMe
);
const addCardFormValidator = new FormValidator(validationSettings, formAddCard);

profileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

export function handleOpenPopup() {
  popupEditProfile.classList.add("popup__opened");
  formProfileName.reset();
  formProfileAboutMe.reset();
  profileFormValidator.resetValidations();
}

export function ClosePopUp() {
  popupEditProfile.classList.remove("popup__opened");
  profileFormValidator.enableValidation();
}

export function handleOpenPopupAdd() {
  popupOpenAddCard.classList.add("popup__opened");
  formAddCard.reset();
  addCardFormValidator.resetValidations();
}

export function ClosePopupAdd() {
  popupOpenAddCard.classList.remove("popup__opened");
  addCardFormValidator.enableValidation();
}

export function openLargeImage(card) {
  popupImageElement.src = card.link;
  popupImageElement.alt = card.name;
  popupImageTitle.textContent = card.name;
  popupLargeImage.classList.add("popup__opened");
}

export function closeLargeImage() {
  popupLargeImage.classList.remove("popup__opened");
}

export function handleOverlayClickEditProfile(evt) {
  if (evt.target.classList.contains("popup")) {
    ClosePopUp();
  }
}

export function handleOverlayClickAddCard(evt) {
  if (evt.target.classList.contains("popup")) {
    ClosePopupAdd();
  }
}

export function handleOverlayClickLargeImage(evt) {
  if (evt.target.classList.contains("popup")) {
    closeLargeImage();
  }
}

export function handleEscapeKeyEditProfile(evt) {
  if (evt.key === "Escape") {
    ClosePopUp();
  }
}

export function handleEscapeKeyAddCard(evt) {
  if (evt.key === "Escape") {
    ClosePopupAdd();
  }
}

export function handleEscapeKeyLargeImage(evt) {
  if (evt.key === "Escape") {
    closeLargeImage();
  }
}

export function handleChangeFirstName(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  ClosePopUp();
}

export function handleChangeAboutMe(evt) {
  evt.preventDefault();
  profileAboutMe.textContent = formInputAboutMe.value;
  ClosePopUp();
}
