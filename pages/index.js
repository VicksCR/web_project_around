import {
  validationSettings,
  FormValidator,
} from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import api from "../components/Api.js";

const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__aboutme");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const popupAddCard = document.querySelector("#popup-add-card");
const popupLargeImage = document.querySelector("#popup-image");
const formEditProfile = document.querySelector("#popup-form-edit");
const formAddCard = document.querySelector("#form-popup-add-card");
const formAvatar = document.querySelector("#popup__form-avatar");
const CardsContainer = document.querySelector("#elements-container-cards");
const formInputName = document.querySelector("#first-name");
const formInputAboutMe = document.querySelector("#about-me");
const formInputAvatar = document.querySelector("#avatar-link");

const popupButtonEditProfile = document.querySelector("#button-edit-profile");
const popupButtonAddCard = document.querySelector("#button-add-card");
const popupButtonAvatar = document.querySelector("#button-avatar");

//USER INFO
const infoUser = new UserInfo({
  nameSelector: ".profile__name",
  aboutMeSelector: ".profile__aboutme",
  avatarSelector: ".profile__avatar",
});

//POPUP WITH FORM PARA EDITAR PERFIL / FORMULARIOS
const editProfilePopup = new PopupWithForm("#popup-edit-profile", (data) => {
  console.log("Datos enviados:", data);
  api
    .updateUserProfile(data.name, data.about)
    .then((updatedData) => {
      infoUser.setUserInfo(updatedData);
      editProfilePopup.close();
    })
    .catch((err) => console.log("Error al actualizar el perfil:", err));
});
editProfilePopup.setEventListeners();

//POPUP WITH FORM PARA AÑADIR TARJETA / FORMULARIOS
const addCardPopup = new PopupWithForm("#popup-add-card", (data) => {
  console.log("Datos de la tarjeta:", data);
  return api
    .addNewCard(data.name, data.link)
    .then((newCard) => {
      console.log("Tarjeta añadida:", newCard);
      const cardElement = createCard(
        newCard.link,
        newCard.name,
        newCard._id,
        newCard.isLiked
        //CHECAR SI SE DEJA LIKED
      );
      CardsContainer.prepend(cardElement);
      addCardPopup.close();
    })
    .catch((err) => console.error("Error al agregar la tarjeta:", err));
});
addCardPopup.setEventListeners();

//POPUP WITH IMAGE / IMAGEN EN GRANDE
const imagePopup = new PopupWithImage("#popup-image");
imagePopup.setEventListeners();

//POPUP WITH FORM PARA CAMBIAR FOTO-AVATAR EN PERFIL
const editAvatarPopup = new PopupWithForm("#popup-avatar", (data) => {
  api
    .updateProfileAvatar(data.avatar)
    .then((updatedData) => {
      infoUser.setUserAvatar(data.avatar);
      editAvatarPopup.close();
    })
    .catch((err) => console.error("Error al actualizar imagen avatar:", err));
});
editAvatarPopup.setEventListeners();

//POPUP PARA CONFIRMAR EL ELIMINAR TARJETA
const deleteCardPopup = new PopupWithConfirmation("#popup-confirm-delete");
deleteCardPopup.setEventListeners();

//CARGAR DATOS DEL USUARIO DESDE LA API
api
  .getUserInfo()
  .then((userData) => {
    infoUser.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
    infoUser.setUserAvatar(userData.avatar);
  })
  .catch((err) => console.error("Error al obtener datos del usuario:", err));

//SECCION DE CARTAS DESDE API
api
  .getInitialCards()
  .then((initialCards) => {
    const section = new Section(
      {
        items: initialCards,
        renderer: (item) => {
          const newCard = createCard(
            item.link,
            item.name,
            item._id,
            item.isLiked
          );
          CardsContainer.prepend(newCard);
        },
      },
      ".elements"
    );
    section.renderItems();
  })
  .catch((err) => console.error("Error al cargar las tarjetas:", err));

//VALIDADORES
const profileFormValidator = new FormValidator(
  validationSettings,
  formEditProfile
);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSettings, formAddCard);
addCardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationSettings, formAvatar);
avatarFormValidator.enableValidation();

//CREAR NUEVA TARJETA
function createCard(link, name, cardId, isLiked) {
  const card = new Card(
    name,
    link,
    "#template-card",
    (link, name) => {
      imagePopup.open();
      document.querySelector("#popup-large-image").src = link;
      document.querySelector("#popup-large-image").alt = name;
      document.querySelector("#popup-big-image-title").textContent = name;
    },
    (cardElement) => {
      deleteCardPopup.open(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            cardElement.remove();
            deleteCardPopup.close();
          })
          .catch((err) => console.log("Error al eliminar tarjeta:", err));
      });
    },
    (cardId, isLiked) => {
      return api
        .toggleLike(cardId, isLiked)
        .then(() => !isLiked)
        .catch((err) => {
          console.log("Error al actualizar like:", err);
          return isLiked;
        });
    },
    isLiked,
    cardId
  );
  return card.generateCard();
}

//USO DE BOTONES PARA ABRIR POPUPS
popupButtonEditProfile.addEventListener("click", () => {
  const userData = infoUser.getUserInfo();
  formInputName.value = userData.name;
  formInputAboutMe.value = userData.about;
  formInputAvatar.value = userData.avatar;
  profileFormValidator.resetValidations();
  editProfilePopup.open();
});

popupButtonAddCard.addEventListener("click", () => {
  addCardPopup.open();
  addCardFormValidator.resetValidations();
});

popupButtonAvatar.addEventListener("click", () => {
  formInputAvatar.value = "";
  editAvatarPopup.open();
  avatarFormValidator.resetValidations();
});
