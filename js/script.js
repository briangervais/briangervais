$(document).ready(function() {

  var int = window.setInterval(checkSlides, 200);
  var slides = $('.slide');
  var articles = $('.section--3up');

  function checkSlides() {
    if (slides.is(':visible')) {
      $('.slide:last-of-type').remove();
    }

    else {
      articles.addClass('animate-show');
      $('.banner__title-main').addClass('show');
      clearInterval(int);
    }
  }

  function checkContent() {
    if ($(window).scrollTop() > 0) {
      articles.addClass('animate-show');
    }
  }

  $(window).on('scroll', checkContent);

});
