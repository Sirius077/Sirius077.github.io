$(function () {
    $("#phone").mask("7 (999) 999-9999");
    $('.review-slider').slick({
    dots:true,
    infinite:true,
    sliesToScroll:1,
    speed:400,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesPerRow: 2,
    rows: 2,
    responsive: [{
      breakpoint:991,
        settings:{
          slidesPerRow:1,
          rows:2,
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
});