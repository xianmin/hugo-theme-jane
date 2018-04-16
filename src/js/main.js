import { Jane } from './jane.js'
import './headerAnchor'

import '../css/style.scss'

$(document).ready(function () {
  Jane.backToTop()
  Jane.mobileNavbar()
  Jane.fancybox()
  Jane.toc()
})

hljs.initHighlighting()
Jane.highlight()
