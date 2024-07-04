$(function () {
    $(".drawer__button").click(function () {
      $(this).toggleClass("active");
      $(".drawer__nav").toggleClass("active");
    });
    $(".drawer__nav__link").click(function () {
      $(".drawer__button").removeClass("active");
      $(".drawer__nav").removeClass("active");
      $(".open").removeClass("open");
    });
    // function
  });


  