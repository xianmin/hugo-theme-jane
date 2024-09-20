import initMobileNavbar from './initMobileNavbar';
import initToc from './initToc';
import initHeaderAnchor from './initHeaderAnchor';
import initToogleTheme from './initToogleTheme';

/* main */
$(document).ready(function () {
  initToogleTheme();
  initMobileNavbar();
  initToc();
  initHeaderAnchor();
});
