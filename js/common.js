$(document).ready(function() {

    if($(window).width() < 992) {
        $('.features').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrow: true,
            appendArrows: $('.features-arrows'),
            prevArrow: $('.features-arrows .prev-arrow'),
            nextArrow: $('.features-arrows .next-arrow'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.reviews').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: true,
            appendArrows: $('.reviews-arrows'),
            prevArrow: $('.reviews-arrows .prev-arrow'),
            nextArrow: $('.reviews-arrows .next-arrow'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    $('input[type="tel"]').mask("9 (999) 999 - 99 - 99");

    // $('#requestSuccess').modal('show')
});