// check if burger is open and open list with fade or close
const fadeInOut = () => $('div.burger').hasClass('open') ? $('.header__list').fadeIn('slow').css('display', 'flex') : $('.header__list').fadeOut('slow');

// open on click burger
$('div.burger').on('click', function (event) {
    $(this).toggleClass('open');
    fadeInOut();
});

// close burger menu if it is clicked outside
$(document).on("click", function (e) {
    if (
        $(e.target).closest("div.burger").length == 0 &&
        $("div.burger").hasClass("open") &&
        $(e.target).closest(".header__list").length == 0) {
        $('div.burger').toggleClass('open');
        if ($(window).width() < 960) {
            fadeInOut();
        }
    }
});

// animete scroll to second block
$(".header__icon").on("click", () => {
    let id = $('#what-we-do');
    $('body,html').animate({ scrollTop: $(id).offset().top }, 1500);
});

// get top offsets and change on scrol bg depend on section bg;
let offsets = [];

$('.section').each(function () {
    offsets.push({ id: $(this).attr('id') != undefined ? $(this).attr('id') : 'no id', offset: $(this).offset().top });
})

$(document).on('scroll', () => {
    let top = $('.header__nav').offset().top + $('.header__nav').height() / 2 + 30;
    if (top > offsets[1].offset) {
        $('.header__nav').css('background', 'linear-gradient(to right,#55b7ff,#7e5aff)')
        $(window).width() < 960 ? $('.header__list').css('background', 'linear-gradient(to right,#55b7ff,#7e5aff)') : $('.header__list').css('background', 'transparent');
    } else {
        $('.header__nav').css('background', 'transparent');
        $('.header__list').css('background', 'transparent');
    }
    checkSection($(document).scrollTop());
})


//animate scroll to chosen block in menu
$('.header__list').children().on('click', (event) => {
    removeActive();
    let id;
    event.target.matches('a') ? id = $(event.target).attr('href') : id = $(event.target).children().attr('href');
    if (id === "#contact-us") {
        $('body,html').animate({ scrollTop: $(id).offset().top - 150 }, 1500);
    } else {
        $('body,html').animate({ scrollTop: $(id).offset().top + 10 }, 1500);
    }
    $('div.burger').toggleClass('open');
    if ($(window).width() < 960) {
        fadeInOut();
    }
});

const removeActive = () => $('.header__list').children().removeClass('header__item--active');

function checkSection(coordinate) {
    let id;
    removeActive();
    switch (true) {
        case coordinate < offsets[1].offset: {
            id = offsets[0].id;
        } break;
        case coordinate < offsets[2].offset: {
            id = offsets[1].id;
        } break;
        case coordinate < offsets[3].offset: {
            id = offsets[2].id;
        } break;
        case coordinate >= offsets[4].offset && coordinate < offsets[6].offset: {
            id = offsets[5].id;
        } break;
    }
    activeOnViewPort(id)
}

const activeOnViewPort = (id) => $('.header__item').children().map(function () {
    if ($(this).attr('href') == `#${id}`)
        $(this).parent().addClass('header__item--active');
})
