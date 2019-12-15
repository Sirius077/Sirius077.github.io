$(function () {
    new WOW().init();

    $("#phone").mask("7 (999) 999-9999");
    $("#phone2").mask("7 (999) 999-9999");
    $("#phone3").mask("7 (999) 999-9999");
    $("#phone4").mask("7 (999) 999-9999");

    //Скрипт для появления всплывающего окна
    $('.popup-btn').on('click', function (event) {
        event.preventDefault();
        $('.popup').fadeIn();
    });
    $('.popup-close').on('click', function (event) {
        event.preventDefault();
        $('.popup').fadeOut();

    });
    $('.form-button').on('click', function () {
        $('.popup').fadeOut();
    });
    $('form').submit(function(event) {
        event.preventDefault();
        $.ajax({
          type: "POST",
          url: "php/smart.php",
          data: $(this).serialize()    
        }).done(function() {    
          $(this).find("input").val("");
          $("form").trigger("reset");
          $('.popup-thanks').fadeIn();
        });
        return false;
      });
    //Слайд с отзывами
    $('.feedback-slider').slick({
        prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/prevArrow.svg" alt=Назад></button>',
        nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/nextArrow.svg" alt="Вперед"></button>'

    });
    //Слайд с преимуществами и материалами
    $('.features-materials-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    prevArrow: "<button class='prev arrow'></button>",
                    nextArrow: "<button class='next arrow'></button>",
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    prevArrow: "<button class='prev arrow'></button>",
                    nextArrow: "<button class='next arrow'></button>",
                    slidesToScroll: 1
                }
            }
        ]
    });

});