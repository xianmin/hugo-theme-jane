import { Jane } from './jane.js'
import './headerAnchor'
import fnTooltip from './footnoteTooltip'

import '../css/style.scss'

$(document).ready(function () {
  Jane.backToTop()
  Jane.mobileNavbar()
  Jane.fancybox()
  Jane.toc()
  fnTooltip()
})

hljs.initHighlighting()
Jane.highlight()
