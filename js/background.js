const body = document.querySelector("body");

const IMG_NUM = 3;

// function handleImageLoad() {}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpg`;
  //image.addEventListener("loadend", handleImageLoad);
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init(){
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();