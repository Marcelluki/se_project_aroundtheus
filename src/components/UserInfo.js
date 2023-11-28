export default class UserInfo {
  constructor(name, job, avatar) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userData;
  }

  setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
