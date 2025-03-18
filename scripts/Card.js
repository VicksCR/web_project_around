const templateElementCard = document.querySelector("#template-card");

export default class Card {
  constructor(name, link, templateSelector, openLargeImage) {
    this.name = name;
    this.link = link;
    this.cardSelector = templateSelector;
    this.openLargeImage = openLargeImage;
  }

  _getCloneTemplateCard() {
    return templateElementCard
      .cloneNode(true)
      .content.querySelector(".element");
  }

  //getView
  generateCard() {
    this.element = this._getCloneTemplateCard();
    this.elementCardTitle = this.element.querySelector(".element__title");
    this.elementCardUrlImage = this.element.querySelector(".element__image");

    this.likeButton = this.element.querySelector(".element__like-button-image");
    this.deleteCardButton = this.element.querySelector("#delete-card-button");

    this.elementCardTitle.textContent = this.name;
    this.elementCardUrlImage.src = this.link;
    this.elementCardUrlImage.alt = this.name;

    this._setEventListeners();

    return this.element;
  }

  _handleLikeCard = () => {
    this.likeButton.classList.toggle("element__like-button-image-active");
  };

  _handleDeleteCard = () => {
    this.element.remove();
  };

  _setEventListeners() {
    this.deleteCardButton.addEventListener("click", this._handleDeleteCard);
    this.likeButton.addEventListener("click", this._handleLikeCard);
    this.elementCardUrlImage.addEventListener("click", () =>
      this.openLargeImage(this)
    );
  }
}
