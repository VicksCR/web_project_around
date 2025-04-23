export default class Card {
  constructor(
    name,
    link,
    templateSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    isLiked,
    cardId
  ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._cardId = cardId;
    this._isLiked = isLiked;
  }

  _getCloneTemplateCard() {
    const templateElementCard = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return templateElementCard;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._toggleLike());
    this._deleteCardButton.addEventListener("click", () =>
      this._handleDeleteClick(this._element)
    );
    this._elementCardUrlImage.addEventListener("click", () =>
      this._handleCardClick(this._link, this._name)
    );
  }

  _toggleLike() {
    this._handleLikeClick(this._cardId, this._isLiked)
      .then((newState) => {
        this._isLiked = newState;
        this._updateLikeButton();
      })
      .catch((err) => console.error("Error al cambiar like:", err));
  }

  _updateLikeButton() {
    if (this._isLiked) {
      this._likeButton.classList.add("element__like-button-image-active");
    } else {
      this._likeButton.classList.remove("element__like-button-image-active");
    }
  }

  generateCard() {
    this._element = this._getCloneTemplateCard();
    this._likeButton = this._element.querySelector(
      ".element__like-button-image"
    );
    this._deleteCardButton = this._element.querySelector("#delete-card-button");
    this._elementCardUrlImage = this._element.querySelector(".element__image");
    this._elementCardTitle = this._element.querySelector(".element__title");
    this._elementCardUrlImage.src = this._link;
    this._elementCardTitle.textContent = this._name;
    this._elementCardUrlImage.alt = this._name;

    this._updateLikeButton();
    this._setEventListeners();

    return this._element;
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }
}
