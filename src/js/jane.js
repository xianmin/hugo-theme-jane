'use strict'

const Jane = {}

Jane.backToTop = function () {
  const $backToTop = $('#back-to-top')

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $backToTop.fadeIn(1000)
    } else {
      $backToTop.fadeOut(1000)
    }
  })

  $backToTop.click(function () {
    $('body,html').animate({ scrollTop: 0 })
  })
}

Jane.mobileNavbar = function () {
  const $mobileNav = $('#mobile-navbar')
  const $mobileNavIcon = $('.mobile-navbar-icon')
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
}

Jane.fancybox = function () {
  if ($.fancybox) {
    $('.post-content').each(function () {
      $(this).find('img').each(function () {
        $(this).wrap(`<a class="fancybox" href="${this.src}" data-fancybox="gallery" data-caption="${this.title}"></a>`)
      })
    })

    $('.fancybox').fancybox({
      selector: '.fancybox',
      protect: true
    })
  }
}

Jane.highlight = function () {
  const blocks = document.querySelectorAll('pre code')
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    const rootElement = block.parentElement
    const lineCodes = block.innerHTML.split(/\n/).slice(0, -1)
    const lineLength = lineCodes.length

    let codeLineHtml = ''
    for (let i = 0; i < lineLength; i++) {
      codeLineHtml += `<div class="line">${i + 1}</div>`
    }

    let codeHtml = ''
    for (let i = 0; i < lineLength; i++) {
      codeHtml += `<div class="line">${lineCodes[i]}</div>`
    }

    block.className += ' highlight'
    const figure = document.createElement('figure')
    figure.className = block.className
    figure.innerHTML = `<table><tbody><tr><td class="gutter"><pre>${codeLineHtml}</pre></td><td class="code"><pre>${codeHtml}</pre></td></tr></tbody></table>`

    rootElement.parentElement.replaceChild(figure, rootElement)
  }
}

Jane.toc = function () {
  const tocContainer = document.getElementById('post-toc')
  if (tocContainer !== null) {
    const toc = document.getElementById('TableOfContents')
    if (toc === null) {
      // if global config 'toc = true', but there are no headings
      tocContainer.parentNode.removeChild(tocContainer)
    } else {
      this._initToc()
    }
  }
}

Jane._initToc = function () {
  const $toc = $('#post-toc')
  if ($toc.length && $(window).width() >= 1080) {
    $(window).scroll(function () {
      if ( $(window).scrollTop() > 100) {
        $toc.fadeIn(1000)
      } else {
        $toc.fadeOut(100)
      }
    })
  }
}

export {Jane}
