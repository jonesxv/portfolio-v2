$('nav i').on('click', function() {
  $('nav #nav-links').toggleClass('show hidden')
})

$(window).on("scroll", function(e){
  var proj = $('#projects').offset().top
  var opac = 1 - ($(window).scrollTop() / proj)
  $('.intro').css({'background-color': `rgba(40, 45, 68, ${opac})`})
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

var scroll = window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback
      , 1000/60)}
var show = document.querySelectorAll('.scroll-animate');
console.log(show)
function loop() {
  show.forEach(el => {
    if (isElementInViewport(el)) {
      el.classList.add('visible')
    } else {
      el.classList.remove('visible')
    }
  })
  scroll(loop)
}
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}