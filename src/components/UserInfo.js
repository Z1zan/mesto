
class UserInfo {
  constructor({name, data}) {
    this._name = name;
    this._data = data;
  }

  getUserInfo() {
    nameInput.value = this._name.textContent;
    jobInput.value = this._data.textContent;
  }

  setUserInfo() {
    this._name.value = nameOutput.textContent;
    this._data.value = jobOutput.textContent;
  }
}