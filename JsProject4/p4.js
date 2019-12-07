const init = () => {
  let searchButton = document.querySelector('#searchbutton');
  let searchInput = document.querySelector('#searchinput').value;
  searchButton.addEventListener('click', getData(searchInput));
}

async const getData = data => {
  fetch('giphy.com').then()=>{
    return response.json();
  };
}

window.onload = init;









/*
i)
Based on the search term, the application will render animated gifs
from http://giphy.com/.

//developers.giphy.com/dashboard/ that allows for api access
//kwall925


i) The "Search" button will search http://giphy.com based on the user-entered search term.
The goal of the search is to fetch a promise using the url
http://api.giphy.com/v1/gifs/search?q=funny cats&limit=10&api_key=your api key


i) Once you have retrieved the promise, then you should parse the results using JSON.
The json results should then be iterated over using the .map function
to display a list of the 10 image results that came back from the search results.


i) You cannot use a library for this project. All code must be completed using
modern javascript syntax. i.e. modern function syntax using string templating
instead of string concatenation,
(map/reduce/filter) instead of loops
