// Sticky nav menu
(function() {

    const header = document.querySelector(".header");
    var sticky = header.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
            header.classList.add("header__sticky");
        } else {
            header.classList.remove("header__sticky");
        }
    };
}());

// Burger handle
$(document).ready(function() {
    $('.intro__burger').click(function(event) {
        $('.intro__burger, .intro__nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
} )