$(function () {
  /**Fixed Header */
  let header = $('#header');
  let intro = $('#intro');
  let introH = intro.innerHeight();
  let scrollPoss = $(window).scrollTop();
  let nav = $('#nav');
  let navToggle = $('#navToggle');

  $(window).on('scroll load resize', function () {
    introH = intro.innerHeight();
    scrollPoss = $(this).scrollTop();
    if (scrollPoss > introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  /**Smooth scroll */
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top - 60;

    nav.removeClass('show');

    $('html, body').animate(
      {
        scrollTop: elementOffset + 30,
      },
      1000,
    );
  });

  /**Nav Toggle */

  $('#nav-toggle').on('click', function (event) {
    event.preventDefault();
    nav.toggleClass('show');
  });
});

