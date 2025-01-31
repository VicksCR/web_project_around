const popupButton = document.querySelector(".profile__edit-button");

const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__aboutme");

const popUp = document.querySelector(".popup");
const popUpClosedButton = document.querySelector(".popup__close-image");

const formInputName = document.querySelector(".popup__input");
const formInputAboutMe = document.querySelector(".popup__input-about");

const formProfileName = document.querySelector(".popup__form");
const formProfileAboutMe = document.querySelector(".popup__form");

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

popupButton.addEventListener("click", handleOpenPopup);
formProfileName.addEventListener("submit", handleChangeFirstName);
formProfileAboutMe.addEventListener("submit", handleChangeAboutMe);
popUpClosedButton.addEventListener("click", function () {
  ClosePopUp();
});
