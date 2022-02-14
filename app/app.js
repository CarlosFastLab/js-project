import Http from "../http/http.js";
import UI from "../ui/ui.js";
const http = new Http();
const ui = new UI();

// Getting user input value and providing to http's module get function
function searchUser(e) {
  // Getting search input element value
  const inputElValue = document.getElementById('search-input').value;

  http.get(inputElValue)
    .then((data) => {
      ui.showProfile(data);
    });

  e.preventDefault();
};

/**
 * Listening to 'search' button click and calling searchUser function
 */
const searchBtnEl = document.getElementById('submit-search');
searchBtnEl.addEventListener('click', searchUser);
