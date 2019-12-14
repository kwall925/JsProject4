  /*run API request on button submit*/
const init = () => {
  let searchButton = document.querySelector('#searchbutton');
  searchButton.onclick = getData;
  /*
  let h1 = document.querySelector('h1');
  h1.onmouseover = addUnderline;*/
}

const getData = () => {
  /*store user entered search query as variable*/
  let searchInput = document.querySelector('#searchinput').value;
  document.querySelector('wrapper').style.height = 'inherit';
  document.querySelector('wrapper').style.overflow = 'auto';
  /*define url of API*/
  let url = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&limit=10&api_key=RiXGFZpkcnIEB607G8uMPHxkuccKUtN6`;
  /*fetch request and response*/
  fetch(url).then(response => response.json()).then(response => {
    let gifData = response.data.map((data) => {
       data = data.images.downsized.url;
       appendImg(data);
    });
    /*run another search on button click*/
    let searchButton = document.querySelector('#searchbutton');
    searchButton.onclick = repeatData;
    /*clear search bar*/ 
    clear();
  });
}

/*create element and append returned img data*/
const appendImg = gif => {
  let theGif = document.createElement("img");
  theGif.src = gif;
  theGif.style.marginTop = "2rem";
  document.querySelector('#giphy').appendChild(theGif);
}

  /*clear search bar*/
const clear = () => {
  document.querySelector('#searchinput').value = ' ';
}

  /*clear existing gifs and display new from search*/
const repeatData = () =>{
  document.querySelector('#giphy').innerHTML = "";
  getData();
}
/*
const addUnderline = () => {
  let underline = document.createElement('img');
  underline.src = "images/underline.gif";
  underline.style.width = "inherit";
  underline.style.height = "7rem";
  underline.style.marginTop = "-6rem";
  let h1 = document.querySelector('h1');
  h1.appendChild(underline);
  h1.onmouseleave = removeUnderline;
  let removeUnderline = () => {
    underline.innerHTML = '';
  }
}*/

 

/*run top funtion on page load*/
window.onload = init;