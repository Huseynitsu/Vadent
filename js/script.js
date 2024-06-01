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
        autoplay: false,
        loop: true,
        navigation: false,
    });

    var swiper = new Swiper(".swiper.gallery", {
        autoplay: true,
        loop: true,
        navigation: false,
        slidesPerView: 3.5,
        spaceBetween: 40,
        centeredSlides: true,
    });


});