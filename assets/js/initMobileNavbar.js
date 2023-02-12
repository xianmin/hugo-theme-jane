/**
 * mobile Navbar
 */
const initMobileNavbar = () => {
  const $mobileNav = $('#mobile-navbar');
  const $mobileNavIcon = $('.mobile-navbar-icon');
  const slideout = new Slideout({
    'panel': document.getElementById('mobile-panel'),
    'menu': document.getElementById('mobile-menu'),
    'padding': 180,
    'tolerance': 70
  })
  slideout.disableTouch()

  $mobileNavIcon.click(function () {
    slideout.toggle()
  })

  slideout.on('beforeopen', function () {
    $mobileNav.addClass('fixed-open')
    $mobileNavIcon.addClass('icon-click').removeClass('icon-out')
  })

  slideout.on('beforeclose', function () {
    $mobileNav.removeClass('fixed-open')
    $mobileNavIcon.addClass('icon-out').removeClass('icon-click')
  })

  $('#mobile-panel').on('touchend', function () {
    slideout.isOpen() && $mobileNavIcon.click()
  })

  $('.mobile-submenu-open').on('click', function () {
    const $mobileSubmenuList = $('.mobile-submenu-list')
    const $mobileMenuParent = $('.mobile-menu-parent')

    if ($(this).parent().next().css('display') == "none") {
      $mobileSubmenuList.slideUp(300)
      $(this).parent().next('ul').slideDown(300)
      $(this).parent().addClass('mobile-submenu-show')
      $(this).parent().parent().siblings().children().removeClass('mobile-submenu-show')
    } else {
      $(this).parent().next('ul').slideUp(300)
      $mobileMenuParent.removeClass('mobile-submenu-show')
    }
  });
}

export default initMobileNavbar
