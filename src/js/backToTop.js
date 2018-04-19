/**
 * back to top
 */

export default function () {
  const $backToTop = $('#back-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $backToTop.fadeIn(1000);
    } else {
      $backToTop.fadeOut(1000);
    }
  })

  $backToTop.click(function () {
    $('body,html').animate({ scrollTop: 0 });
  })
}
