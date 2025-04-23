export default class UserInfo {
  constructor({ nameSelector, aboutMeSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutMeElement = document.querySelector(aboutMeSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutMeElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo({ name, about }) {
    console.log("Datos recibidos en setUserInfo:", { name, about });
    if (name) this._nameElement.textContent = name;
    if (about) this._aboutMeElement.textContent = about;
  }

  setUserAvatar(avatar) {
    this._avatarElement.src = avatar;
  }
}
