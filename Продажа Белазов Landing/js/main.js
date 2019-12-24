$(function () {
    $('#slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    prevArrow: "<button class='prev arrow'></button>",
                    nextArrow: "<button class='next arrow'></button>",
                    slidesToScroll: 1
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
    $('.storage-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    prevArrow: "<button class='prev arrow'></button>",
                    nextArrow: "<button class='next arrow'></button>",
                    slidesToScroll: 1
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