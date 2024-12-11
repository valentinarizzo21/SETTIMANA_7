const card = document.querySelectorAll(".card");

let myMovies;

const url = "https://striveschool-api.herokuapp.com/books";

document.addEventListener("load", init());

function init() {
  getData();
}

function getData() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      myMovies = data;
      printImage();
      console.log(myMovies);
    })
    .catch((error) => {
      console.log("Errore di recupero dati", error);
    });
}

function printImage() {
  for (let i = 0; i < card.length; i++) {
    let image = card[i].querySelector("img");
    let price = card[i].querySelector('.card-price');
    image.setAttribute("src", myMovies[i].img);
    price.innerText = `${myMovies[i].price} €`;
  }
}

/*const btnTrash = document.querySelectorAll('.btn-light');
let arrBtnTrash = Array.from(btnTrash);

arrBtnTrash.forEach((btn) => {
    btn.addEventListener('click', function())
})*/

