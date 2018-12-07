$(document).ready(function() {

  var int = window.setInterval(checkSlides, 250);
  var slides = $('.slide');
  var articles = $('.section--3up');

  function checkSlides() {
    articles.addClass('animate-show');

    if (slides.is(':visible')) {
      $('.slide:last-of-type').remove();
    }

    else {
      $('.banner__title-main').addClass('show');
      clearInterval(int);
    }
  }

});
