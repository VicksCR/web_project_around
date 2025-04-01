import { validationSettings, FormValidator } from "./FormValidator.js";
import Card from "./Card.js";
import {
  popupEditProfile,
  formProfileName,
  formProfileAboutMe,
  formAddCard,
  popupOpenAddCard,
  popupLargeImage,
  handleOpenPopup,
  ClosePopUp,
  handleOpenPopupAdd,
  ClosePopupAdd,
  openLargeImage,
  closeLargeImage,
  handleOverlayClickEditProfile,
  handleOverlayClickAddCard,
  handleOverlayClickLargeImage,
  handleEscapeKeyEditProfile,
  handleEscapeKeyAddCard,
  handleEscapeKeyLargeImage,
  handleChangeFirstName,
  handleChangeAboutMe,
} from "./utils.js";
import Section from "./Section.js";

const popupButtonEditProfile = document.querySelector("#button-edit-profile");
const popUpClosedEditButton = document.querySelector(
  "#popup-close-edit-profile"
);

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
const popupClosedAddCard = document.querySelector("#popup-add-card-close");

const inputCardTitle = document.querySelector("#card-title");
const inputCardUrlImage = document.querySelector("#card-link-to-image");

const popupClosedLargeImage = document.querySelector(
  "#popup-large-image-close"
);

//Eventos de Profile Edit
popupButtonEditProfile.addEventListener("click", handleOpenPopup);
formProfileName.addEventListener("submit", handleChangeFirstName);
formProfileAboutMe.addEventListener("submit", handleChangeAboutMe);
popUpClosedEditButton.addEventListener("click", ClosePopUp);

popupEditProfile.addEventListener("click", (evt) =>
  handleOverlayClickEditProfile(evt)
);

document.addEventListener("keydown", (evt) => handleEscapeKeyEditProfile(evt));

//Funciones de create new card
function createCard(card) {
  const cardNew = new Card(
    card.name,
    card.link,
    "#template-card",
    openLargeImage
  );
  return cardNew.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);
cardSection.renderItems();

//Eventos de Add Card
popupButtonAddCard.addEventListener("click", handleOpenPopupAdd);
popupClosedAddCard.addEventListener("click", ClosePopupAdd);
formAddCard.addEventListener("submit", handleAddNewCard);

popupOpenAddCard.addEventListener("click", (evt) => {
  handleOverlayClickAddCard(evt);
});

document.addEventListener("keydown", (evt) => {
  handleEscapeKeyAddCard(evt);
});

//Manejar envio de formulario nueva tarjeta
function handleAddNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputCardTitle.value,
    link: inputCardUrlImage.value,
  };
  createCard(newCard);
  ClosePopupAdd();
}

popupClosedLargeImage.addEventListener("click", (evt) => {
  closeLargeImage(evt);
});

popupLargeImage.addEventListener("click", (evt) => {
  handleOverlayClickLargeImage(evt);
});

document.addEventListener("keydown", (evt) => {
  handleEscapeKeyLargeImage(evt);
});

popupEditProfile.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup")) {
    ClosePopUp();
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    ClosePopUp();
  }
});
