/**
 * Table of Content fix
 */

function initToc() {
  const $toc = $('#post-toc');
  if ($toc.length && $(window).width() >= 1080) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $toc.fadeIn(1000);
      } else {
        $toc.fadeOut(100);
      }
    });
  }
}

export default function () {
  const tocContainer = document.getElementById('post-toc');
  if (tocContainer !== null) {
    const toc = document.getElementById('TableOfContents');
    if (toc === null) {
      // if global config 'toc = true', but there are no headings
      tocContainer.parentNode.removeChild(tocContainer);
    } else {
      initToc();
    }
  }
}
