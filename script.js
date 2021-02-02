function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
function statistika() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var statistika = document.getElementById("statistika");
  statistika.classList.toggle("active");
}
function zabava() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var zabava = document.getElementById("zabava");
  zabava.classList.toggle("active");
}
var brGolova = document.getElementById("brGolova");
console.log(brGolova);
var brojac = 0;
setInterval(function () {
  brojac++;
  brGolova.innerHTML = brojac;
}, 500);
