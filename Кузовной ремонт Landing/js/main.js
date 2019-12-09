$(function () {
    $("#phone").mask("7 (999) 999-9999");
    $('.feedback-slider').slick({
    dots: true,
    slidesPerRow: 2,
    rows: 2,
    responsive: [
    {
      breakpoint: 478,
      settings: {
        slidesPerRow: 1,
        rows: 1,
      }
    }
  ]
});
});