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

<<<<<<< HEAD
const popupEditProfile = document.querySelector("#popup-edit-profile");
const popUpClosedEditButton = document.querySelector(
  "#popup-close-edit-profile"
);
const formInputName = document.querySelector("#first-name");
const formInputAboutMe = document.querySelector("#about-me");
const formProfileName = document.querySelector("#popup-form-edit");
const formProfileAboutMe = document.querySelector("#popup-form-edit");
=======
const popupButtonEditProfile = document.querySelector("#button-edit-profile");
const popUpClosedEditButton = document.querySelector(
  "#popup-close-edit-profile"
);
>>>>>>> develop

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

<<<<<<< HEAD
// functions edit profile
function handleOpenPopup() {
  popupEditProfile.classList.add("popup__opened");
}

function ClosePopUp() {
  popupEditProfile.classList.remove("popup__opened");
}
=======
//Eventos de Profile Edit
popupButtonEditProfile.addEventListener("click", handleOpenPopup);
formProfileName.addEventListener("submit", handleChangeFirstName);
formProfileAboutMe.addEventListener("submit", handleChangeAboutMe);
popUpClosedEditButton.addEventListener("click", ClosePopUp);

popupEditProfile.addEventListener("click", (evt) =>
  handleOverlayClickEditProfile(evt)
);
>>>>>>> develop

document.addEventListener("keydown", (evt) => handleEscapeKeyEditProfile(evt));

//Funciones de create new card
function createCard(card) {
  const cardNew = new Card(
    card.name,
    card.link,
    "#template-card",
    openLargeImage
  );
<<<<<<< HEAD

  CardLikeButtonActive.addEventListener("click", function (evt) {
    CardLikeButtonActive.classList.toggle("element__like-button-image-active");
  });

  const deleteCardButton = cardElementClone.querySelector(
    "#delete-card-button"
  );

  deleteCardButton.addEventListener("click", function (evt) {
    cardElementClone.remove();
  });

  popupClosedLargeImage.addEventListener("click", function () {
    popupLargeImage.classList.remove("popup__opened");
  });

  popupLargeImage.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup")) {
      popupLargeImage.classList.remove("popup__opened");
    }
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popupLargeImage.classList.remove("popup__opened");
    }
  });

  popupButtonAddCard.addEventListener("click", handleOpenPopupAdd);
  popupClosedAddCard.addEventListener("click", function () {
    ClosePopupAdd();
  });

  CardsContainer.prepend(cardElementClone);
=======
  const cardElement = cardNew.generateCard();
  CardsContainer.prepend(cardElement);
>>>>>>> develop
}

initialCards.forEach(createCard);

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

<<<<<<< HEAD
popupOpenAddCard.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup")) {
    ClosePopupAdd();
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    ClosePopupAdd();
  }
});

//events Profile Edit
popupButtonEditProfile.addEventListener("click", handleOpenPopup);
formProfileName.addEventListener("submit", handleChangeFirstName);
formProfileAboutMe.addEventListener("submit", handleChangeAboutMe);
popUpClosedEditButton.addEventListener("click", function () {
  ClosePopUp();
=======
popupLargeImage.addEventListener("click", (evt) => {
  handleOverlayClickLargeImage(evt);
});

document.addEventListener("keydown", (evt) => {
  handleEscapeKeyLargeImage(evt);
>>>>>>> develop
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
