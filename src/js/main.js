import '../css/style.scss';

import backToTop from './backToTop';
import mobileNavbar from './mobileNavbar';
import toc from './toc';
import headerAnchor from './headerAnchor';
import fnTooltip from './footnoteTooltip';
import fancybox from './fancybox';
import highlight from './highlight';


$(document).ready(function () {
  backToTop();
  mobileNavbar();
  toc();
  headerAnchor();
  fnTooltip();
  fancybox();
})

highlight();
