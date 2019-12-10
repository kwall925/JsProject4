const init = () => {
  //make button a variable
  let searchButton = document.querySelector('#searchbutton');
  //run API request on button submit
  searchButton.onclick = getData;
}

const getData = () => {
  //store user entered search query as variable
  let searchInput = document.querySelector('#searchinput').value;
  //define url of API
  let url = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&limit=10&api_key=RiXGFZpkcnIEB607G8uMPHxkuccKUtN6`;
  //fetch request and response
  fetch(url).then(response => response.json()).then(response => { let gifData = response.data; console.log(gifData)});
}

window.onload = init;


//(response => console.log(response.json()));  
//}

/* fetch(url).then(response => {let myObj = response.json();
  console.log(myObj);*/


  //  fetch(url).then(response => response.json()).then(response => console.log(response.data));

/*

i) Once you have retrieved the promise, then you should parse the results using JSON.
The json results should then be iterated over using the .map function
to display a list of the 10 image results that came back from the search results.


i) You cannot use a library for this project. All code must be completed using
modern javascript syntax. i.e. modern function syntax using string templating
instead of string concatenation,
(map/reduce/filter) instead of loops */
