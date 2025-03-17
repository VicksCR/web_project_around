import { validationSettings, FormValidator } from "./FormValidator.js";
import Card from "./Card.js";

const popupButtonEditProfile = document.querySelector("#button-edit-profile");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__aboutme");

const popupEditProfile = document.querySelector("#popup-edit-profile");
const popUpClosedEditButton = document.querySelector(
  "#popup-close-edit-profile"
);
const formInputName = document.querySelector("#first-name");
const formInputAboutMe = document.querySelector("#about-me");
const formProfileName = document.querySelector("#popup-form-edit");
const formProfileAboutMe = document.querySelector("#popup-form-edit");

//Tarjeta con arreglo
const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
];

const CardsContainer = document.querySelector("#elements-container-cards");
const popupButtonAddCard = document.querySelector("#button-add-card");
const popupOpenAddCard = document.querySelector("#popup-add-card");
const popupClosedAddCard = document.querySelector("#popup-add-card-close");

const inputCardTitle = document.querySelector("#card-title");
const inputCardUrlImage = document.querySelector("#card-link-to-image");
const formAddCard = document.querySelector("#form-popup-add-card");

// popup image
const popupLargeImage = document.querySelector("#popup-image");
const popupImageElement = document.querySelector("#popup-large-image");
const popupImageTitle = document.querySelector("#popup-big-image-title");
const popupClosedLargeImage = document.querySelector(
  "#popup-large-image-close"
);

//Instancias de FormValidator
const profileFormValidator = new FormValidator(
  validationSettings,
  formProfileAboutMe
);
const addCardFormValidator = new FormValidator(validationSettings, formAddCard);

profileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// Functions Edit rofile
function handleOpenPopup() {
  popupEditProfile.classList.add("popup__opened");
  formProfileName.reset();
  formProfileAboutMe.reset();
  profileFormValidator.resetValidations();
}

function ClosePopUp() {
  popupEditProfile.classList.remove("popup__opened");
  profileFormValidator.enableValidation();
}

function handleChangeFirstName(evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  ClosePopUp();
}

function handleChangeAboutMe(evt) {
  evt.preventDefault();
  profileAboutMe.textContent = formInputAboutMe.value;
  ClosePopUp();
}

//events Profile Edit
popupButtonEditProfile.addEventListener("click", handleOpenPopup);
formProfileName.addEventListener("submit", handleChangeFirstName);
formProfileAboutMe.addEventListener("submit", handleChangeAboutMe);
popUpClosedEditButton.addEventListener("click", ClosePopUp);

popupEditProfile.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    ClosePopUp();
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    ClosePopUp();
  }
});

//unctions create new card
function createCard(card) {
  const cardNew = new Card(
    card.name,
    card.link,
    "#template-card",
    openLargeImage
  );
  const cardElement = cardNew.generateCard();
  CardsContainer.prepend(cardElement);
}

initialCards.forEach(createCard);

//Funciones para Add Card...................
function handleOpenPopupAdd() {
  popupOpenAddCard.classList.add("popup__opened");
  formAddCard.reset();
  addCardFormValidator.resetValidations();
}

function ClosePopupAdd() {
  popupOpenAddCard.classList.remove("popup__opened");
  addCardFormValidator.enableValidation();
}

//events Add Card
popupButtonAddCard.addEventListener("click", handleOpenPopupAdd);
popupClosedAddCard.addEventListener("click", ClosePopupAdd);
formAddCard.addEventListener("submit", handleAddNewCard);

popupOpenAddCard.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    ClosePopupAdd();
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    ClosePopupAdd();
  }
});

//manejar envio de formulario nueva tarjeta
function handleAddNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputCardTitle.value,
    link: inputCardUrlImage.value,
  };
  createCard(newCard);
  ClosePopupAdd();
}

//Funciones del popup de Imagen Grande............................
//handleImageClick
function openLargeImage(card) {
  popupImageElement.src = card.link;
  popupImageElement.alt = card.name;
  popupImageTitle.textContent = card.name;
  popupLargeImage.classList.add("popup__opened");
}

function closeLargeImage() {
  popupLargeImage.classList.remove("popup__opened");
}

popupClosedLargeImage.addEventListener("click", closeLargeImage);

popupLargeImage.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    closeLargeImage();
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeLargeImage();
  }
});
