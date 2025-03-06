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
const templateElementCard = document.querySelector("#template-card");

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

// functions edit profile
function handleOpenPopup() {
  popupEditProfile.classList.add("popup__opened");
}

function ClosePopUp() {
  popupEditProfile.classList.remove("popup__opened");
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

  //Large Image
  elementCardUrlImage.addEventListener("click", function () {
    popupImageElement.src = card.link;
    popupImageElement.alt = card.name;
    popupImageTitle.textContent = card.name;
    popupLargeImage.classList.add("popup__opened");
  });

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
}

initialCards.forEach(createCard);

function handleOpenPopupAdd() {
  popupOpenAddCard.classList.add("popup__opened");
}

function ClosePopupAdd() {
  popupOpenAddCard.classList.remove("popup__opened");
}

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

//events Add Card
popupButtonAddCard.addEventListener("click", handleOpenPopupAdd);
popupClosedAddCard.addEventListener("click", function () {
  ClosePopupAdd();
});
formAddCard.addEventListener("submit", handleAddNewCard);

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
