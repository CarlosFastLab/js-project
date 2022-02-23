import Http from "../http/http.js";
import UI from "../ui/ui.js";
import Storage from '../storage/storage.js';
const http = new Http();
const ui = new UI();
const storage = new Storage();

// Getting user input value and providing to http's module get function
function searchUser(e) {
  ui.showLoader();

  // Getting search input element value
  let inputElValue = document.getElementById('search-input').value;

  // Getting event string, in case user clicks in an element from search history listing
  const searchHistoryUser = e.target.innerText.split('history')[1];

  http.get(inputElValue || searchHistoryUser)
    .then((data) => {
      if (data.message == "Not Found") {
        ui.showUserNotFound();
      } else {
        storage.setUserSearchHistory(inputElValue);
        ui.showProfile(data);
        ui.showSearchHistory();
      };
    })
    .catch(() => {
      ui.showErrorMessage();
    });
  ui.clearInputValue();
  e.preventDefault();
};

// Listening to 'search' button click and calling searchUser function
const searchBtnEl = document.getElementById('submit-search');
searchBtnEl.addEventListener('click', searchUser);

// Listening to user history list item clicks
const searchHistorylistEl = document.getElementById('search-history-list');

searchHistorylistEl.addEventListener('click', searchUser);

/**
 * We call showSearchHistory as soon as DOM content loads.
 * If there is any user previously searched, the search-history div gets populated
 */
document.addEventListener('DOMContentLoaded', ui.showSearchHistory());
