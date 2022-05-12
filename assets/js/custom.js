// nav fixed 
jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 30) {
            jQuery('.main-menu').addClass('fixed-top');
        } else {
            jQuery('.main-menu').removeClass('fixed-top');
        }
    });
});


//testimonial carousel
jQuery('document').ready(function () {
    jQuery('.corona-important .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});


//counter up
 jQuery("document").ready(function () {
     jQuery('.counter').countUp({
         delay: 10,
         time: 2000
     });
 });



//testimonial carousel
jQuery('document').ready(function () {
    jQuery('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        smartSpeed: 2000,
        items: 1
    });
});


// Scroll top button //

jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery(".scroll-top").fadeIn();
        } else {
            jQuery(".scroll-top").fadeOut();
        }
    });
    jQuery(".scroll-top").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 700);
    });
});


/* nav scrolling */
jQuery(document).ready(function () {

    jQuery('.nav-link').on('click', function (e) {
        e.preventDefault();
        var id = jQuery(e.currentTarget).attr('href');
        var jQuerydest = jQuery(id);

        jQuery('html,body').animate({
            scrollTop: (jQuerydest.offset().top)
        }, 1000);
    });

});


// preloader 
jQuery(window).on('load', function () {
    jQuery('.preloader').fadeOut();
    jQuery('.preloader').delay(1350).fadeOut('slow');
    jQuery('body').delay(1350).css({
        'overflow': 'visible'
    });
});


$(function () {
    $("#tabs").tabs();
    $(".faq #accordion").accordion({
        heightStyle: "content",
        icons: {
            header: "fas fa-plus",
            activeHeader: "fas fa-minus"
        }
    });
});


wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
