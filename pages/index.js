import {
  validationSettings,
  FormValidator,
} from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__aboutme");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const popupAddCard = document.querySelector("#popup-add-card");
const popupLargeImage = document.querySelector("#popup-image");
const formEditProfile = document.querySelector("#popup-form-edit");
const formAddCard = document.querySelector("#form-popup-add-card");
const CardsContainer = document.querySelector("#elements-container-cards");
const formInputName = document.querySelector("#first-name");
const formInputAboutMe = document.querySelector("#about-me");

//Tarjeta iniciales
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

//USER INFO
const infoUser = new UserInfo({
  nameSelector: ".profile__name",
  aboutMeSelector: ".profile__aboutme",
});

//POPUP WITH FORM PARA EDITAR PERFIL / FORMULARIOS
const editProfilePopup = new PopupWithForm(
  "#popup-edit-profile",
  (formData) => {
    infoUser.setUserInfo({
      name: formData["first-name"],
      aboutme: formData["about-me"],
    });
    editProfilePopup.close();
  }
);
editProfilePopup.setEventListeners();

//POPUP WITH FORM PARA AÑADIR TARJETA / FORMULARIOS
const addCardPopup = new PopupWithForm("#popup-add-card", (formData) => {
  const newCard = {
    name: formData["card-title"],
    link: formData["card-link-to-image"],
  };
  const cardElement = createCard(newCard);
  cardSection.addItem(cardElement);
  addCardPopup.close();
});
addCardPopup.setEventListeners();

//POPUP WITH IMAGE / IMAGEN EN GRANDE
const imagePopup = new PopupWithImage("#popup-image");
imagePopup.setEventListeners();

//SECCION DE CARTAS
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);
cardSection.renderItems();

//CREAR NUEVA TARJETA
function createCard(cardData) {
  const cardNew = new Card(
    cardData.name,
    cardData.link,
    "#template-card",
    (link, name) => {
      imagePopup.open(link, name);
    }
  );
  return cardNew.generateCard();
}

//VALIDADORES
const profileFormValidator = new FormValidator(
  validationSettings,
  document.querySelector("#popup-form-edit")
);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(
  validationSettings,
  document.querySelector("#form-popup-add-card")
);
addCardFormValidator.enableValidation();

//USO DE BOTONES PARA ABRIR POPUPS
const popupButtonEditProfile = document.querySelector("#button-edit-profile");
popupButtonEditProfile.addEventListener("click", () => {
  const userData = infoUser.getUserInfo();
  formInputName.value = userData.name;
  formInputAboutMe.value = userData.aboutme;
  profileFormValidator.resetValidations();
  editProfilePopup.open();
});

const popupButtonAddCard = document.querySelector("#button-add-card");
popupButtonAddCard.addEventListener("click", () => {
  formAddCard.reset();
  addCardFormValidator.resetValidations();
  addCardPopup.open();
});
