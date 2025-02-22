const popupButtonEditProfile = document.querySelector("#button-edit-profile");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__aboutme");

const popUp = document.querySelector("#popup-edit-profile");
const popUpClosedButton = document.querySelector("#popup-close-edit-profile");
const formInputName = document.querySelector("#first-name");
const formInputAboutMe = document.querySelector("#about-me");
const formProfileName = document.querySelector("#popup-form-edit");
const formProfileAboutMe = document.querySelector("#popup-form-edit");

//Tarjeta con arreglo
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const CardsContainer = document.querySelector("#elements-container-cards");
const popupButtonAddCard = document.querySelector("#button-add-card");
const popupOpenAddCard = document.querySelector("#popup-add-card");
const popupClosedAddCard = document.querySelector("#popup-add-card-close");
const templateElementCard = document.querySelector("#template-card");

const inputCardTitle = document.querySelector("#card-title");
const inputCardUrlImage = document.querySelector("#card-link-to-image");
const formAddCard = document.querySelector("#form-popup-add-card");

// functions edit profile
function handleOpenPopup() {
  popUp.classList.add("popup__opened");
}

function ClosePopUp() {
  popUp.classList.remove("popup__opened");
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

//functions create new card

function createCard(card) {
  const cardElementClone = templateElementCard.content
    .querySelector(".element")
    .cloneNode(true);
  const elementCardTitle = cardElementClone.querySelector(".element__title");
  const elementCardUrlImage = cardElementClone.querySelector(".element__image");

  elementCardTitle.textContent = card.name;
  elementCardUrlImage.src = card.link;
  elementCardUrlImage.alt = card.name;

  const CardLikeButtonActive = cardElementClone.querySelector(
    ".element__like-button-image"
  );

  CardLikeButtonActive.addEventListener("click", function (evt) {
    CardLikeButtonActive.classList.toggle("element__like-button-image-active");
  });

  const deleteCardButton = cardElementClone.querySelector(
    "#delete-card-button"
  );

  deleteCardButton.addEventListener("click", function (evt) {
    cardElementClone.remove();
  });

  CardsContainer.prepend(cardElementClone);
}

initialCards.forEach(createCard);

function handleOpenPopupAdd() {
  popupOpenAddCard.classList.add("popup__opened");
}

function ClosePopupAdd() {
  popupOpenAddCard.classList.remove("popup__opened");
}

//manejar envio de formulario
function handleAddNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputCardTitle.value,
    link: inputCardUrlImage.value,
  };
  createCard(newCard);
  ClosePopupAdd();
}

popupButtonAddCard.addEventListener("click", handleOpenPopupAdd);
popupClosedAddCard.addEventListener("click", function () {
  ClosePopupAdd();
});
formAddCard.addEventListener("submit", handleAddNewCard);

//events Profile Edit
popupButtonEditProfile.addEventListener("click", handleOpenPopup);
formProfileName.addEventListener("submit", handleChangeFirstName);
formProfileAboutMe.addEventListener("submit", handleChangeAboutMe);
popUpClosedButton.addEventListener("click", function () {
  ClosePopUp();
});
