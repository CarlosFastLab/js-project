import Http from "../http/http.js";
const http = new Http();

// Constants to display the User`s data
const profileName = document.getElementById('profileName');
const location = document.getElementById(`location`)
const memberDate = document.getElementById(`memberDate`)
const publicRepos = document.getElementById(`publicRepos`)
const followers = document.getElementById(`followers`)
const following = document.getElementById(`following`)

// Getting user input value and providing to http's module get function
function searchUser(e) {
  // Getting search input element value
  const inputElValue = document.getElementById('search-input').value;

  http.get(inputElValue)
    .then((data) => {
      console.log(data);
      profileName.innerHTML = `<id="profileName">${data.login}</i>`
      location.innerHTML = `<i id="location">${data.location}</i>`
      memberDate.innerHTML = `<i id="memberDate">${data.created_at}</i>`
      publicRepos.innerHTML = `<i id="publicRepos">${data.public_repos}</i>`
      followers.innerHTML = `<i id="followers">${data.followers}</i>`
      following.innerHTML = `<i id="following">${data.following}</i>`
    });

  e.preventDefault()
};

/**
 * Listening to 'search' button click and calling searchUser function
 */
const searchBtnEl = document.getElementById('submit-search')
searchBtnEl.addEventListener('click', searchUser)



