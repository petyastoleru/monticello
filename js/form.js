$('.contact-us__input').on("change", (event) => event.target.value ? $(event.target).css('border-bottom', '2px solid #2c4058') : $(event.target).css('border-bottom', '1px solid rgba(75, 85, 98, 0.5)'));

$('.contact-us__get-in-touch').on('submit', function (event) {
    event.preventDefault();
    console.log($(this).serialize());
})