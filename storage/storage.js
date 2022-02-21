class Storage {
  constructor() {
    this.users;
  };

  getUserSeachHistory() {
    if (localStorage.getItem('GhFinderHistory') === null) {
      return this.users = [];
    } else {
      return this.users = JSON.parse(localStorage.getItem('GhFinderHistory'));
    };
  };

  setUserSearchHistory(newUser) {
    const isUserAlreadyInList = this.getUserSeachHistory().indexOf(newUser) !== -1;

    this.users = this.getUserSeachHistory();

    if (!newUser || newUser === '' || isUserAlreadyInList) {
      return;
    }

    localStorage.setItem('GhFinderHistory', JSON.stringify([
      ...this.users,
      newUser
    ]));
  };
};

export default Storage;