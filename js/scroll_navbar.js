$(function() {
    $(window).scroll(function() {
        var bar = $('.js-navbar');
        var section_height = $('.js-section').offset().top;
        var top_distance = $(this).scrollTop();
        var opacity = Math.min(top_distance / section_height, 1);

        bar.stop().animate({'opacity' : opacity}, 100);
    })
})