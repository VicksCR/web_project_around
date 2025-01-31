let popupButton = document.querySelector(".profile__edit-button");

let profileName = document.querySelector(".profile__name");
let profileAboutMe = document.querySelector(".profile__aboutme");

let popUp = document.querySelector(".popup");
let popUpClosedButton = document.querySelector(".popup__close-image");

let formInputName = document.querySelector(".popup__input");
let formInputAboutMe = document.querySelector(".popup__input-about");

let formProfileName = document.querySelector(".popup__form");
let formProfileAboutMe = document.querySelector(".popup__form");

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
