// header slider
$('.header__slider').slick({
    vertical: true,
    arrows: false,
    autoplay: true,
    verticalSwiping: true,
    dots: true,
});

// news slider
$('.news__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    prevArrow: '<span class="arrow arrow--left"></span>',
    nextArrow: '<span class="arrow arrow--right"></span>',
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
            }
        },
    ]
});