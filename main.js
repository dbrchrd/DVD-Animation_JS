const main = document.querySelector(".main");
const dvd = document.querySelector(".dvd");

let ix = 0;
let iy = 0;
let kx = "+";
let ky = "+";
let celerity = 3;

let interval = setInterval(() => {
  (kx === "+") ? (dvd.style.left = ix + "px", ix += celerity) : null;
  (kx === "-") ? (dvd.style.left = ix + "px", ix -= celerity) : null;
  (ky === "+") ? (dvd.style.top = iy + "px", iy += celerity) : null;
  (ky === "-") ? (dvd.style.top = iy + "px", iy -= celerity) : null;
  (dvd.offsetLeft + dvd.offsetWidth >= main.offsetWidth) ? kx = "-" : null;
  (dvd.offsetLeft - dvd.offsetWidth <= -dvd.offsetWidth) ? kx = "+" : null;
  (dvd.offsetTop + dvd.offsetHeight >= main.offsetHeight) ?  ky = "-" : null;
  (dvd.offsetTop - dvd.offsetHeight <= -dvd.offsetHeight) ?  ky = "+" : null;
}, 1); 