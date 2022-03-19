const main = document.querySelector(".main");
const dvd = document.querySelector(".dvd");

let ix = 0;
let iy = 0;
let kx = "+";
let ky = "+";
let celerity = 3;

let interval = setInterval(() => {
  if (kx === "+") {
    dvd.style.left = ix + "px";
    ix += celerity;
  }
  if (kx === "-") {
    dvd.style.left = ix + "px";
    ix -= celerity;
  }
  if (ky === "+") {
    dvd.style.top = iy + "px";
    iy += celerity;
  }
  if (ky === "-") {
    dvd.style.top = iy + "px";
    iy -= celerity;
  }
  if (dvd.offsetLeft + dvd.offsetWidth >= main.offsetWidth) {
    kx = "-";
  }
  if (dvd.offsetLeft - dvd.offsetWidth <= -dvd.offsetWidth) {
    kx = "+";
  }
  if (dvd.offsetTop + dvd.offsetHeight >= main.offsetHeight) {
    ky = "-";
  }
  if (dvd.offsetTop - dvd.offsetHeight <= -dvd.offsetHeight) {
    ky = "+";
  }
}, 10); 