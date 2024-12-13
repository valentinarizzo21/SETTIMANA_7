let photoIdFromAddressBar = new URLSearchParams(window.location.search);
let fratm = photoIdFromAddressBar.get("photoId");
console.log(photoIdFromAddressBar);

let ciccioPasticcio;
let urlTwo = `https://api.pexels.com/v1/photos/${fratm}`;

async function getPhotos() {
  try {
    let response = await fetch(urlTwo, {
      headers: {
        Authorization:
          "u50VDq1ZjwLEZtdTnhJN9DyOoQqocwzYPSgMeETmVxgCsQIUrAamzHsL",
      },
    });
    ciccioPasticcio = await response.json();
    printImage();
    console.log(ciccioPasticcio);
  } catch (error) {
    console.log(error);
  }
}

getPhotos();

function printImage() {
  let newImg = document.getElementById("newImg");
  const linkArtist = document.getElementById("linkArtist");
  newImg.setAttribute("src", ciccioPasticcio.src.original);
  linkArtist.setAttribute('href', ciccioPasticcio.photographer_url);
  linkArtist.innerText = ciccioPasticcio.photographer;
}
