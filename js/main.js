$(function () {


    $('.slide-one-item').owlCarousel({

        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        center: false,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1500,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        nav: false,
        //       navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });


})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()


})