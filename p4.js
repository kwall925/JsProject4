const init = () => {
  //make button a variable
  let searchButton = document.querySelector('#searchbutton');
  //run API request on button submit
  searchButton.onclick = getData;
  //make heading a variable
  let h1 = document.querySelector('h1');
  //add header underline on hover
 // h1.onmouseover = addImg;
}

const getData = () => {
  //store user entered search query as variable
  let searchInput = document.querySelector('#searchinput').value;
  document.querySelector('wrapper').style.height = 'inherit';
  document.querySelector('wrapper').style.overflow = 'auto';
  //define url of API
  let url = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&limit=10&api_key=RiXGFZpkcnIEB607G8uMPHxkuccKUtN6`;
  //fetch request and response
  fetch(url).then(response => response.json()).then(response => {
    let gifData = response.data.map((data) => {
       data = data.images.downsized.url;
       appendImg(data);
    });
    let searchButton = document.querySelector('#searchbutton');
    searchButton.onclick = repeatData;
    clear();
    console.log(gifData);
    console.log(response.data);    
  });
}

const appendImg = gif => {
  let theGif = document.createElement("img");
  theGif.src = gif;
  theGif.style.marginTop = "2rem";
  document.querySelector('#giphy').appendChild(theGif);
}

const clear = () => {
  document.querySelector('#searchinput').value = ' ';
}

const repeatData = () =>{
  document.querySelector('#giphy').innerHTML = "";
  getData();
}

 /* const addImg = () => {
      //create empty img element
      let underline = document.createElement('img');
      //style and append underline
      underline.src = "images/underline.gif";
      underline.style.width = "40%";
      document.querySelector('h1').appendChild(underline);
    }*/

window.onload = init;

