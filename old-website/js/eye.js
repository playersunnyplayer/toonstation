jQuery(document).ready(function () {
  jQuery(".eye div.ball").jqEye({ shape: "circle", radius: 48 });
  if ($(window).width() < 1025) {
    jQuery(".eye div.ball").jqEye({ shape: "circle", radius: 0 });
  }
  if ($(window).width() < 300) {
    jQuery(".eye div.ball").jqEye({ shape: "circle", radius: 0 });
  }
});
$("#mainSection1, .click-creature").click(function () {
  setTimeout(() => {
    $("#main-doc").removeClass("fix-height");
  }, 0);
  setTimeout(() => {
    $("#click-creature").fadeOut(100);
  }, 200);
  setTimeout(() => {
    $("#text-on-creature").fadeIn(100);
  }, 400);
  setTimeout(() => {
    $("#creature-bg").fadeIn(500);
  }, 600);

  setTimeout(() => {
    $("#main-doc").addClass("main-doc");
  }, 900);

  setTimeout(() => {
    $(".mainSection1").css({
      background: "transparent",
      transition: "all .5s",
    });
  }, 900);

  setTimeout(() => {
    $("#main-doc").css({ background: "transparent", transition: "all 2s" });
  }, 900);

  setTimeout(() => {
    $(".mainSection1").addClass("resetSection");
  }, 1500);

  setTimeout(() => {
    $(".resetSection").css({});
  }, 2000);
  setTimeout(() => {
    $("#chart5").fadeIn(100);
  }, 2000);
  setTimeout(() => {
    $("#chart6").fadeIn(100);
  }, 2200);
  setTimeout(() => {
    $("#chart4").fadeIn(100);
  }, 2400);
  setTimeout(() => {
    $("#chart3").fadeIn(100);
  }, 2600);
  setTimeout(() => {
    $("#chart2").fadeIn(100);
  }, 2800);
  setTimeout(() => {
    $("#chart1").fadeIn(100);
  }, 3000);
  setTimeout(() => {
    $(".AH_logo").css({ opacity: "1" });
  }, 3200);

  setTimeout(() => {
    $(".about-outer").css({ opacity: "1" });
    $(".about-outer").addClass("animate__animated animate__slideInRight");
  }, 3200);
  setTimeout(() => {
    $("#menu1").show();
    $("#menu1").addClass("animate__animated animate__slideInRight");
  }, 3500);
  setTimeout(() => {
    $("#menu2").show();
    $("#menu2").addClass("animate__animated animate__slideInRight");
  }, 3800);
  setTimeout(() => {
    $("#menu3").show();
    $("#menu3").addClass("animate__animated animate__slideInRight");
  }, 4100);
  setTimeout(() => {
    $("#menu4").show();
    $("#menu4").addClass("animate__animated animate__slideInRight");
  }, 4400);
  setTimeout(() => {
    $("#menu5").show();
    $("#menu5").addClass("animate__animated animate__slideInRight");
  }, 4700);
});

jQuery(document).ready(function () {
  setTimeout(() => {
    $("#team-eye1").addClass("team-eye1");
  }, 500);
  setTimeout(() => {
    $("#team-eye2").addClass("team-eye2");
  }, 800);
  setTimeout(() => {
    $("#team-eye3").addClass("team-eye3");
  }, 1000);
  setTimeout(() => {
    $("#team-eye4").addClass("team-eye4");
  }, 1100);

  setTimeout(() => {
    $("#team-eye5").addClass("team-eye5");
  }, 1200);
  setTimeout(() => {
    $("#team-eye6").addClass("team-eye6");
  }, 1000);

  setTimeout(() => {
    $("#team-eye7").addClass("team-eye7");
  }, 800);

  setTimeout(() => {
    $("#team-eye8").addClass("team-eye8");
  }, 200);
  setTimeout(() => {
    $("#team-eye9").addClass("team-eye9");
  }, 100);
});

jQuery(document).ready(function () {
  setTimeout(() => {
    $("#linkin").addClass("linkinone");
  }, 500);

  setTimeout(() => {
    $("#insta").addClass("instaone");
  }, 800);
  setTimeout(() => {
    $("#twtr").addClass("twtrone");
  }, 1100);

  setTimeout(() => {
    $("#go").addClass("goone");
  }, 1400);

  setTimeout(() => {
    $("#yout").addClass("youtone");
  }, 1700);
  setTimeout(() => {
    $("#Link").addClass("Linkone");
  }, 2000);
});
