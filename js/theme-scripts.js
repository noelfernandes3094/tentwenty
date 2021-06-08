var $ = jQuery.noConflict();
$(document).ready(function(){
    objectFitImages();
    var lg = window.matchMedia("(max-width:1199.98px)");
    var tablet_md = window.matchMedia("(min-width:991.98px)");
    var mobile = window.matchMedia("(max-width:767.98px)");
    var tablet = window.matchMedia("(min-width:768px)");
    var tablet_sm = window.matchMedia("(max-width:991.98px)");


    /* Menu */
    $('.right-wrapper .hamburger').click(function (e) {
        e.preventDefault();
        var win_width = $(window).width();
        $('body').addClass('no-scroll').css('width', win_width+'px');
        $('.right-wrapper .nav-links').addClass('in');
         $('.right-wrapper .close').removeClass('d-none');
         $(this).addClass('d-none');
        $('body').append('<div class="body-overlay"></div>');
    });


    $('.right-wrapper .close').click(function () {
        $('.right-wrapper .nav-links').removeClass('in');
        $(this).addClass('d-none');
        $('.right-wrapper .hamburger').removeClass('d-none');
        setTimeout(function () {
            $('body').removeClass('no-scroll').attr('style','');
            $('.body-overlay').remove();
            
        }, 600);
    });

    /* Toggling the currency */
    $('.currency a,.f-currency a').click(function (e) {
        e.preventDefault();
        $(this).next('.curreny-options').slideToggle().toggleClass('show');
    });

    $(document).mouseup(function (e) {
        var sub_menu = $('.curreny-options .show,.currency a,.f-currency a');
        if (!sub_menu.is(e.target) && sub_menu.has(e.target).length === 0) {
            $('.curreny-options').slideUp().removeClass('show');
        }
    });
    
    /* jQuery('a[href*=#]:not([href=#]):not([href^=#tab]):not([href=#booking-form])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    var header_height = $('nav');
                    jQuery('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        }); */

    //Banner slider
        $('section.banner .syn-slide').slick({
            dots: false,
            infinite: false,
            arrows: true,
            speed: 1200,
            nextArrow: '<div class="arrow-right"><img src="./images/arrow-right.svg"></div>',
            prevArrow: '<div class="arrow-left"><img src="./images/arrow-left.svg"></div>',
            //cssEase: 'linear',
            autoplay: true,
            //autoplaySpeed: 6e3,
            autoplaySpeed: 6000,
            slidesToShow: 1.2,
            slidesToScroll: 1,
            asNavFor: '.slider-nav',
            responsive: [
                {
                breakpoint: 768.98,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    fade:true,
                }
                },
            ]
        });

        $('.slider-nav').slick({
            arrows:false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: 'section.banner .syn-slide',
            focusOnSelect: true,
            responsive: [{
                breakpoint: 414.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, ]
        });

        $('.show-list').click(function(e){
            e.preventDefault();
            $('.right-col ul.list').toggleClass('minimize');
            $(this).remove();
        });

        $('.arrival,.departure').datetimepicker({
            timepicker: false,
            format: 'd.m.Y',
            minDate: "1",
            scrollMonth: false,
            scrollInput: false,
        });
});


/* Page loader */
/* AOS.init({
    startEvent: 'load',
    easing: 'ease-in-out-sine',
    duration: 1000, // values from 0 to 3000, with step 50ms
}); */
