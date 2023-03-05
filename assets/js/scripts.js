(function($) {
    "use strict";

    $(window).on('load', function() {
        /*--------------------- PRELOADER --------------------*/
        $('body').addClass('animated-page page-loaded');

        /*----------------------- WOW ------------------------*/
        if ($('.wow')[0]) {
            new WOW({
                mobile: false,
            }).init();
        }

        /* ----------------- SLIDER HOME TWO ---------------- */
        if ($('.dark-slider')[0]) {
            $('.dark-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                speed: 800,
                fade: true,
                cssEase: 'ease-in-out',
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
                touchThreshold: 100,
                nextArrow: '<span class="slick-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                prevArrow: '<span class="slick-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                appendArrows: $('.dark-slide-navigation'),
                appendDots: $('.dark-slide-navigation'),
                // autoplay: true,
                // autoplaySpeed: 4500,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        arrows: false,
                    }
                }]
            });
        }
    });

    /* ------------------- TO TOP ------------------ */
    $(window).on('scroll.myTemplat', scrollWindow).trigger('scroll.myTemplat');

    function scrollWindow() {
        if ($(window).scrollTop() > 500) {
            $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');
        }
    }

    $('body').on('click', '.to-top', function(event) {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });


    /* -------------------- RESET FILTER -------------------- */
    if ($('.reset-filter-btn')[0]) {
        $('body').on('click', '.reset-filter-btn', function() {
            $('.wigets-shop input').removeAttr('checked');
            return false;
        });
    }
    /* -------------------- CONTACT FORM -------------------- */
    if ($('#contactform')[0]) {
        $('body').on('submit', '#contactform', function() {
            var action = $(this).attr('action'),
                message = $('#message'),
                submit = $('#submit');

            message.slideUp(750, function() {
                message.hide();
                submit.attr('disabled', 'disabled');
                $.post(
                    action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        comments: $('#comments').val(),
                    },
                    function(event) {
                        document.getElementById('message').innerHTML = event;
                        message.slideDown('slow');
                        submit.removeAttr('disabled');

                        if (null != event.match('success')) {
                            $('#contactform').slideDown('slow');
                        }
                    }
                );
            });
            return false;
        });
    }

    /*----------------- SORT PRODUCT SHOP -----------------*/
    $('body').on('click', '.sort-form li', function(event) {
        var sort = $(event.currentTarget).attr('data-atr');
        $('.sort-form li').removeClass('active');
        $(event.currentTarget).addClass('active');
        $('.shop-product-cover .product-cover').removeClass('large block list').addClass(sort);
    });

    $('body').on('click', '.shop-sidebar-btn, .btn-sidebar', function() {
        $('.shop-sidebar, .sidebar .widgets').toggle('ease');
        return false;
    });

    /* -------------- SLIDER SINGLE PRODUCT ------------- */
    if ($('.slider-single-for')[0]) {
        $('.slider-single-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            speed: 600,
            cssEase: 'ease-in-out',
            asNavFor: '.slider-single-nav'
        });
        $('.slider-single-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            asNavFor: '.slider-single-for',
            cssEase: 'ease-in-out',
            focusOnSelect: true,
            infinite: true,
            speed: 600,
        });
    }

    /* --------------------- QUANITY ------------------- */
    if ($('#quanity')[0]) {
        $("#quanity").spinner({
            max: 1000,
            min: 1
        });
    }

    /* ----------------- SINGLE SHOP SIZE -------------- */
    if ($('.wheel-size')[0]) {
        $('body').on('click', '.wheel-size li', function(event) {
            $('.wheel-size li').removeClass('active');
            $(event.currentTarget).addClass('active');
        });
    }
    if ($('.frame-size')[0]) {
        $('body').on('click', '.frame-size li', function(event) {
            $('.frame-size li').removeClass('active');
            $(event.currentTarget).addClass('active');
        });
    }

    /* ----------------- Products Filter -------------- */
    $("#plastic-filter").click(function() {
        $(".plasticos").toggle();
    });


}(jQuery));