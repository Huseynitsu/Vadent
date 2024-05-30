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

    const { ScrollObserver, valueAtPercentage } = aat

    const $cardsContainer = $('.cards');
    const $cards = $('.card');
    $cardsContainer.css('--cards-count', $cards.length);
    $cardsContainer.css('--card-height', `${$cards.first().height()}px`);

    $cards.each(function (index) {
        const $card = $(this);
        const offsetTop = 20 + index * 20;
        if (index === $cards.length - 1) {
            return false
        }
        const toScale = 1 - ($cards.length - 1 - index) * 0.1;
        const $nextCard = $cards.eq(index + 1);
        const $cardInner = $card.find('.card__inner');

        ScrollObserver.Element($nextCard[0], {
            offsetTop,
            offsetBottom: $(window).height() - $card.height()
        }).onScroll(({ percentageY }) => {
            $cardInner.css('scale', valueAtPercentage({
                from: 1,
                to: toScale,
                percentage: percentageY
            }));
            $cardInner.css('filter', `brightness(${valueAtPercentage({
                from: 1,
                to: 0.6,
                percentage: percentageY
            })})`);
        });
    });


});