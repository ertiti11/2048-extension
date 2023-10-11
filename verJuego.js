// console.clear();
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 37) {
    verTablero();
  } else if (event.keyCode == 39) {
    verTablero();
  } else if (event.keyCode == 38) {
    verTablero();
  } else if (event.keyCode == 40) {
    verTablero();
  }
});

var tablero = JSON.parse(window.localStorage.getItem("gameState"));
var tableroantiguo = JSON.parse(window.localStorage.getItem("gameState"));

function verTablero() {
  tableroantiguo = tablero;
  tablero = JSON.parse(window.localStorage.getItem("gameState"));
  console.log(tablero);
  console.log(tableroantiguo);
}

function deshacer() {
  window.localStorage.setItem("gameState", JSON.stringify(tableroantiguo));
  location.reload();
}

// window.onload= setTimeout(waitLoad, 1000)

const control = document.getElementsByClassName("well");
//add button to control
control[0].innerHTML +=
  '<button id="verJuego" class="btn btn-primary" >deshacer</button>';
control[0].addEventListener("click", function () {
  console.log("deshacer");
  deshacer();
});
