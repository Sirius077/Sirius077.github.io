$(function () {
  //Script for mask input
  $("#phone").mask("7 (999) 999-9999");
  //Slick slider
  $('.review-slider').slick({
    dots: true,
    infinite: true,
    sliesToScroll: 1,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesPerRow: 2,
    rows: 2,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesPerRow: 1,
          rows: 2,
          prevArrow: "<button class='prev arrow'></button>",
          nextArrow: "<button class='next arrow'></button>",
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesPerRow: 1,
          rows: 1,
          prevArrow: "<button class='prev arrow'></button>",
          nextArrow: "<button class='next arrow'></button>",
        }
      }
    ]
  });
  $('.popup-callback-trigger').on('click', function (event) {
    event.preventDefault();
    $('.popup-callback').fadeIn();
  });
  $('.popup-close').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeOut();

  });
  $('.popup-callback-form> form').on('submit', function () {
    $('.popup-thanks').fadeIn(),
      $('.popup-callback').fadeOut();
  });
  $('.popup-fast-request-btn').on('click', function (event) {
    event.preventDefault();
    $('.popup-request').fadeIn();

  });
  $('.popup-button').on('click', function () {
    $('.popup-thanks').fadeIn(),
      $('.popup-request').fadeOut();
  });
  $('.popup-detailed-request-btn').on('click', function (event) {
    event.preventDefault();
    $('.popup-thanks').fadeIn();

  });
  $('.popup-consultation-btn').on('click', function (event) {
    event.preventDefault();
    $('.popup-thanks').fadeIn();

  });
});