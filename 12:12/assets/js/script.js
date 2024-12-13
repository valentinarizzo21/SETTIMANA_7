const apiKey = "u50VDq1ZjwLEZtdTnhJN9DyOoQqocwzYPSgMeETmVxgCsQIUrAamzHsL";
const cards = document.querySelectorAll(".card");
const btnLoad = document.querySelector(".btn-primary");
const btnLoad2 = document.querySelector(".btnLoad2");
const inputSearch = document.getElementById("inputSearch");
const btnSearch = document.getElementById("btnSearch");
let column;
let data;
let photos;
let url = "https://api.pexels.com/v1/search?query=mountain&per_page=9";
let query;

async function getPhotos() {
  try {
    let response = await fetch(createUrl(), {
      headers: {
        Authorization:
          "u50VDq1ZjwLEZtdTnhJN9DyOoQqocwzYPSgMeETmVxgCsQIUrAamzHsL",
      },
    });
    data = await response.json();
    photos = data.photos;
    printImage();
  } catch (error) {
    console.log(error);
  }
}

async function callGetPhotos(newQuery) {
  query = newQuery;
  try {
    getPhotos();
  } catch (error) {
    console.log(error);
  }
}

btnLoad.addEventListener("click", (e) => {
  e.preventDefault();
  callGetPhotos("mountains");
  column = document.querySelectorAll(".col-md-4");
  column.forEach((e) => {
    e.classList.remove("hide");
  });
});

btnLoad2.addEventListener("click", (e) => {
  e.preventDefault();
  callGetPhotos("sunset");
  column = document.querySelectorAll(".col-md-4");
  column.forEach((e) => {
    e.classList.remove("hide");
  });
});

function printImage(newQuery) {
  small = document.querySelectorAll("small");
  for (let i = 0; i < cards.length; i++) {
    let image = cards[i].querySelector(".card-img-top");
    
    //let image = document.querySelector(${cards[i]} .card-img-top);
    image.setAttribute("src", photos[i].src.original);
    small[i].innerText = photos[i].id;
    image.addEventListener('click', (e) =>{
        e.preventDefault();
        let page2 = 'images.html';
        let newUrl = `${page2}?photoId=${photos[i].id}`;
        window.location.href= newUrl;
    })
  }
 
query=newQuery
}

function createUrl() {
  if (!query) {
    return `https://api.pexels.com/v1/search?query=mountain&per_page=9`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${query}&per_page=9`;
    return url;
  }
}

function addClass() {
  const btns = document.querySelectorAll(".btn-sm:last-of-type");

  btns.forEach((btn) => {
    btn.innerText = "HIDE";
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      column = btn.closest(".col-md-4");
      column.classList.add("hide");
    });
  });
}

addClass();

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  callGetPhotos(inputSearch.value);
  column = document.querySelectorAll(".col-md-4");
  column.forEach((e) => {
    e.classList.remove("hide");
  });
  inputSearch.value= '';
});


