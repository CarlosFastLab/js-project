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
      if (data.message == "Not Found" ? ui.showUserNotFound() : ui.showProfile(data));
        //Persist searched string in LocalStorage
        localStorage.setItem(Date.now(), inputElValue);
        searchHistory();
    });
  e.preventDefault();
};

/**
 * Listening to 'search' button click and calling searchUser function
 */
const searchBtnEl = document.getElementById('submit-search');
searchBtnEl.addEventListener('click', searchUser);

// Listening 'search'button click to persist search string in LocalStorage
searchBtnEl.addEventListener('click', persistSearch) ;

//
function searchHistory(){
  for ( let i = 0, len = localStorage.length; i < len; i++ ) {
    let key = localStorage.key(i);
    let valor = localStorage.getItem(key);
    ui.showSearchHistory(valor)
  }
}
