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
});

// Closing burger menu by clicking on the links
$(document).ready(function() {
    $('.intro__link').click(function(event) {
        $('.intro__burger, .intro__nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
});

// Style for active links
$('.menu__link').on('click', function(){
    $('.menu__link').removeClass('active');
    $(this).addClass('active');
});

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());