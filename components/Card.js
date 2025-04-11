export default class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getCloneTemplateCard() {
    const templateElementCard = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return templateElementCard;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeCard();
    });
    this._deleteCardButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._elementCardUrlImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._element = this._getCloneTemplateCard();
    this._elementCardUrlImage = this._element.querySelector(".element__image");
    this._elementCardTitle = this._element.querySelector(".element__title");
    this._likeButton = this._element.querySelector(
      ".element__like-button-image"
    );
    this._deleteCardButton = this._element.querySelector("#delete-card-button");

    this._elementCardUrlImage.src = this._link;
    this._elementCardTitle.textContent = this._name;
    this._elementCardUrlImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle("element__like-button-image-active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
}
