$(function(){
  var bar = $('#pencil-navbar');
  var limit = $('#content-section').offset().top / 2
  $(window).scroll(function() {
    var topDistance = $(this).scrollTop();

    if(topDistance > limit) {
      bar.stop().animate({'opacity' : 1})
    } else {
      bar.stop().animate({'opacity' : 0});
    }

  });
});