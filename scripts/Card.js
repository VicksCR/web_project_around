const templateElementCard = document.querySelector("#template-card");

export default class Card {
  constructor(name, link, templateSelector, openLargeImage) {
    this.name = name;
    this.link = link;
    this.cardSelector = templateSelector;
    this.openLargeImage = openLargeImage;
  }

  getCloneTemplateCard() {
    return templateElementCard
      .cloneNode(true)
      .content.querySelector(".element");
  }

  //getView
  generateCard() {
    this.element = this.getCloneTemplateCard();
    this.elementCardTitle = this.element.querySelector(".element__title");
    this.elementCardUrlImage = this.element.querySelector(".element__image");

    this.likeButton = this.element.querySelector(".element__like-button-image");
    this.deleteCardButton = this.element.querySelector("#delete-card-button");

    this.elementCardTitle.textContent = this.name;
    this.elementCardUrlImage.src = this.link;
    this.elementCardUrlImage.alt = this.name;

    this.setEventListeners();

    return this.element;
  }

  handleLikeCard = () => {
    this.likeButton.classList.toggle("element__like-button-image-active");
  };

  handleDeleteCard = () => {
    this.element.remove();
  };

  setEventListeners() {
    this.deleteCardButton.addEventListener("click", this.handleDeleteCard);
    this.likeButton.addEventListener("click", this.handleLikeCard);
    this.elementCardUrlImage.addEventListener("click", () =>
      this.openLargeImage(this)
    );
  }
}
