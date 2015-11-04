$(function(){
  $(window).scroll(function() {
    var bar = $('#pencil-navbar');
    bar.fadeOut( "slow" );
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      bar.fadeIn(500).css( "display", "initial" );
    }, 1200));
  });
});

