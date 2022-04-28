jQuery(document).ready(function () {
  // if (localStorage.getItem('popState') == 'hide') {
  //   $('#mainSection1').trigger('click');
  //   $('#mainSection1').hide();
  //   $('#mainSection2').hide();
  //   $('#mainSection3').show();
  //   $('#main-doc').removeClass('fix-height mainBG');
  //   $('#main-doc').addClass('activeStorage');
  // }

  var is_modal_show = sessionStorage.getItem('alreadyShow');
  if (is_modal_show != 'alredy shown') {
    $('#mainSection1').show();
    // $('#mainSection2').show();
    $('#mainSection3').hide();
    $('#main-doc').addClass('fix-height mainBG');
    $('#main-doc').removeClass('activeStorage');
    sessionStorage.setItem('alreadyShow', 'alredy shown');
  }
  else if (is_modal_show = 'alredy shown') {
    $('#mainSection1').trigger('click');
    $('#mainSection1').hide();
    $('#mainSection2').hide();
    $('#mainSection3').show();
    $('#main-doc').removeClass('fix-height mainBG');
    $('#main-doc').addClass('activeStorage');
    sessionStorage.setItem('alreadyShow', 'alredy shown');
  }

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
    $("body").css({ scrollY: 'hidden' });
    window.location.href = ("index.html#main-doc");
  }, 0);
  setTimeout(() => {
    $("#click-creature").fadeOut(100);
  }, 200);
  setTimeout(() => {
    $(".text-on-creature").fadeIn(100);
  }, 400);
  setTimeout(() => {
    $(".creature-bg").fadeIn(500);
    $(".homeMobileMenu").css({ display: 'block' });
  }, 600);

  setTimeout(() => {
    $("#main-doc").addClass("main-doc");

    // mainSection1
    $("#mainSection1, #mainSection2").css({
      background: "transparent",
    });
    $("#mainSection1, #mainSection2").animate({ top: '24px', left: '-279px' });

    // mainSection2
    $("#mainSection2").css({
      position: 'relative'
    });
    $("#mainSection2").animate({ top: '-200px', left: '-208px' })
  }, 900);

  setTimeout(() => {
    $("body").css({
      overflowY: 'scroll',
      PointerEvent: 'none'
    });
    $("#mainSection2").css({
      display: 'block'
    });
  }, 2000);

  setTimeout(() => {
    $("#mainSection1").css({
      display: 'none'
    });
  }, 2500);

  $('.defaultText').fadeOut();
  // localStorage.setItem('popState', 'hide');

  setTimeout(() => {
    $("#main-doc").css({ background: "transparent", transition: "all 2s" });
    // }, 100);
  }, 900);

  setTimeout(() => {
    $(".mainSection1").addClass("resetSection");
    // }, 100);
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
  $("#mainSection1").removeAttr('hidden');
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
