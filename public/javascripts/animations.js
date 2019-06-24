$(window).on("scroll", function(e){
  var proj = $('#projects').offset().top
  if ($(window).scrollTop() > proj) {
    $('.nav').fadeIn('fast', function() {
      // Animation complete
    });
  } else {
    $('.nav').fadeOut('fast', function() {
      // Animation complete
    });
  }
})