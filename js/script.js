$(document).ready(function () {

    // header sticky
    const header = $("header");
    let isHeaderSticky = false;

    $(window).scroll(function () {
        // Calculate the scroll position once
        const scrollTop = $(this).scrollTop();

        // Check if the scroll position is greater than or equal to 80
        const shouldBeSticky = scrollTop >= 80;

        // Only update the classes if there's a change in the sticky state
        if (shouldBeSticky !== isHeaderSticky) {
            if (shouldBeSticky) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
            isHeaderSticky = shouldBeSticky;
        }
    });

    var swiper = new Swiper(".mySwiper", {
        autoplay: true,
        loop: true,
        navigation: false,
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