$(document).ready(function () {
  var cssLink = document.createElement("link");
  cssLink.href = "../css/style.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";
  frames['iframe1'].document.head.appendChild(cssLink);

  var windowWidth = $(window).width();
  const imgContainer = document.querySelector(".Parallax-container");

  const move = function (e) {
    let x = e.pageX - this.offsetLeft - this.offsetWidth / 2;
    let y = e.pageY - this.offsetTop - this.offsetHeight / 2;
    let xPourcent = x * 100 / this.offsetWidth / 10;
    let yPourcent = y * 100 / this.offsetHeight / 10;
    this.style.transform = "rotateX(" + -yPourcent + "deg) rotateY(" + xPourcent + "deg)";
  };

  const reinit = function () {
    setTimeout(() => {
      this.style.transform = "";
    }, 400);
  };

  imgContainer.addEventListener("mousemove", move);
  imgContainer.addEventListener("mouseleave", reinit);
});

//close mobile menu
$('.mobileMenu a').click(() => {
  $('.mobileMenu #active').prop('checked', false)
})