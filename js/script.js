$(document).ready(function () {

    // header sticky
    const header = $("header");

    $(window).scroll(function () {
        const shouldBeSticky = $(this).scrollTop() >= 100;

        if (shouldBeSticky) {
            if (!header.hasClass("fixed")) {
                header.addClass("fixed");
            }
        } else {
            header.removeClass("fixed");
        }
    });

    var swiper = new Swiper(".mySwiper", {
        autoplay: true,
        keyboard: true, 
        loop: true,
        navigation: false,
    });

    var swiper2 = new Swiper(".swiper.gallery", {
        autoplay: true,
        loop: true,
        navigation: false,
        slidesPerView: 3.5,
        spaceBetween: 40,
        centeredSlides: true,
    });

    var swiper3 = new Swiper(".swiper.doctors", {
        keyboard: true, 
        loop: true,
        slidesPerView: 2.5,
        navigation: false,
    });


});