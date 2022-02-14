import Http from "../http/http.js";
const http = new Http();

/**
 * Listening to 'search' button click and searching for user
 * based on user input value
 */
const searchBtnEl = document.getElementById('submit-search')
searchBtnEl.addEventListener('click', (e) => {
  // Getting search input element value
  const inputElValue = document.getElementById('search-input').value;

  http.get(inputElValue)
    .then((data) => {
      console.log(data);
    });

  e.preventDefault();
})

