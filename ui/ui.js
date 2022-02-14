class UI {
  constructor() {
    this.profileCtr = document.getElementById('profile-container');
  };

  // Handling user's created_at date to return a pt-BR date format
  handleDate(user) {
    const date = new Date(user.created_at);
    return new Intl.DateTimeFormat('pt-BR').format(date);
  };

  handleLocation(user) {
    if (!user.location || user.location === null) {
      return 'No location provided';
    } else {
      return user.location;
    };
  };

  // Displaying resulting profile in UI
  showProfile(user) {
    this.profileCtr.innerHTML = `
      <div class="col s5 push-s3">
        <div class="card">
          <div class="card-content center">
              <img 
                class="circle avatar"
                src=${user.avatar_url}
                alt="user-avatar" 
                width="110px" 
                height="110px">
              <span class="card-title">${user.login}</span>
              <ul class="collection left-align">
                <li class="collection-item">
                  <i class="card-list-icons tiny material-icons">place</i>
                  Location: ${this.handleLocation(user)}
                </li>
                <li class="collection-item">
                  <i class="card-list-icons tiny material-icons">date_range</i>
                  Member since: ${this.handleDate(user)}
                </li>
                <li class="collection-item">
                  <i class="card-list-icons tiny material-icons">code</i>
                  Public repos: ${user.public_repos}
                </li>
                <li class="collection-item">
                  <i class="card-list-icons tiny material-icons">plus_one</i>
                  Followers: ${user.followers}
                </li>
                <li class="collection-item">
                  <i class="card-list-icons tiny material-icons">group</i>
                  Following: ${user.following}
                </li>
              </ul>
            </div>
          <div class="card-link-container card-action center">
            <a class="card-link" href="${user.html_url}" target="_blank">Profile link</a>
          </div>
        </div>
      </div>
    `
  };

  //Displaying "User not found" when no results from search
  showUserNotFound(user){
    this.profileCtr.innerHTML = `<div class="col s5 push-s3">
    <div class="card">
      <div class="card-content center">
            <i class="card-list-icons large material-icons" >sentiment_dissatisfied</i>
            <ul><i class="collection-item">User not found! Please, try again.</i></ul>
      </div>
    </div>`
  };

};

export default UI;