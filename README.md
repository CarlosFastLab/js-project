# js-project - what it is
This project is the result of a colaboration between @CarlosFastLab and @deboracq.
It originated as a study and an experiment for our Individual Development Plannings, as an initiative from Instituto Atlântico.
This project is a classic Github User Search, in which we tried to use basic and advanced JavaScript features and concepts, as well as different approaches in terms of syntax to reach similar goals.

### Architecture approach
The central and dynamic points of the application are a card, which is rendered with a Github user's data, based on a search, and a search history listing, populated with data persisted in browsers' Local Storage.

For issuing a request to Github's API, we used JavaScript's native fetch api, which is sepparated in its own http class, using async/await, and further called in our "central" app.js module, this time using .then/.catch blocks. The user's data is dynamically populated in the UI class, by using template strings to fill in the card's container.

A similar approach is used for user search history, in terms of sepparting getter and setter in its own storage class and being called where necessary.

When a users clicks a previous search in their search history, we issue another call to the Github API, passing in the previously searched username as argument.

### Development diary
* 09/02 - Initializing repo, just adding README.md;
* 10/02:
    * Base layout, used for reference for dynamic content;
    * Small insertions and fixes to layout;
* 13/02:
    * Creation of http class to reach Github API;
    * Small refactors;
    * Creation of ui class, populating card with results from Github API response;
* 14/02:
    * Error handling for non-existent users;
    * Small code refactoring;
    * Error handling for bad responses;
    * Insertion of a loading indicator;
* 20/04:
    * Creation of LocalStorage class and implementation;
    * Small fixes.