import '../css/style.scss';

import backToTop from './backToTop';
import mobileNavbar from './mobileNavbar';
import toc from './toc';
import headerAnchor from './headerAnchor';
import fnTooltip from './footnoteTooltip';
import highlight from './highlight';


$(document).ready(function () {
  backToTop();
  mobileNavbar();
  toc();
  headerAnchor();
  fnTooltip();
});

highlight();
