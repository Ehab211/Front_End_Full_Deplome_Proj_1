let header = document.getElementById("header");
let logo = document.querySelector("#logo_img");
let arrow = document.querySelector(".fa-angle-right");
let list = document.querySelectorAll(".nav li a");
window.onscroll = function () {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (window.pageYOffset >= 50) {
      header.style.backgroundColor = "snow";
      element.style.color = "#3e332b";
      arrow.style.color = "#ee5637";
      logo.src = "./Image/logo.webp";
    } else {
      // if (maxWidth===767) {

      // }
      header.style.backgroundColor = "transparent";
      element.style.color = "snow";
      arrow.style.color = "snow";
      logo.src = "./Image/logo-alt.webp";
    }
  }
};
