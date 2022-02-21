import { handleDate, handleLocation } from "../helpers/helpers.js";

import Storage from "../storage/storage.js";
const storage = new Storage();

class UI {
  constructor() {
    this.profileCtr = document.getElementById('profile-container');
    this.searchHistoryList = document.getElementById('search-history-list');
    this.searchInputEl = document.getElementById('search-input');
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
                  Location: ${handleLocation(user)}
                </li>
                <li class="collection-item">
                  <i class="card-list-icons tiny material-icons">date_range</i>
                  Member since: ${handleDate(user)}
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
    `;
  };

  // Displaying "User not found" when no results from search
  showUserNotFound() {
    this.profileCtr.innerHTML = `
      <div class="col s5 push-s3">
        <div class="card">
          <div class="card-content center">
            <i class="card-list-icons large material-icons">sentiment_dissatisfied</i>
              <ul><i class="collection-item">User not found! Please, try again.</i></ul>
        </div>
      </div>
    `;
  };

  // Rendering a Loading Spinner, to be used while there are ongoing requests
  showLoader() {
    this.profileCtr.innerHTML = `
      <div class="loader-ctr col valign-wrapper" style="width:92%;position: relative;">
        <div class="valign center-block">
          <div class="row">
            <div class="col">
              <div class="lds-ripple"><div></div><div></div></div>
            </div>
          </div>
        </div>
      </div
    `;
  };

  // Displaying an error message in case something goes wrong with the request
  showErrorMessage() {
    this.profileCtr.innerHTML = `
      <div class="col s5 push-s3">
        <div class="card">
          <div class="card-content center">
            <i class="red-text text-darken-1 card-list-icons large material-icons">priority_high
            </i>
              <ul><i class="collection-item">Something went wrong. Please, try again later.</i></ul>
        </div>
      </div>
    `;
  };

  // Displaying user search history
  showSearchHistory() {
    /**
     * We clear the list first at each new execution,
     * avoiding repopulating the list with previous replicated results in our upcoming forEach loop.
     */
    this.searchHistoryList.innerHTML = '';

    // We get the information needed from localStorage(history of users previously searched).
    const usersHistory = storage.getUserSeachHistory();

    // We get the search-history-container div so we can change its display to block afterwards.
    const searchHistoryCtr = document.getElementById('search-history-container');

    if (usersHistory.length !== 0) {
      searchHistoryCtr.style.display = 'block';

      usersHistory.forEach(user => {
        this.searchHistoryList.innerHTML += `
          <li class="collection-item">
            <a class="search-history-list-item valign-wrapper" href="#">
              <i class="tiny material-icons left">history</i>
              ${user}
            </a>
          </li>
        `
      });
    };
  };

  // used to clear input value after a search
  clearInputValue() {
    this.searchInputEl.value = '';
  };
};

export default UI;
