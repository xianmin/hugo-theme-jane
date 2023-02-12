/**
 * Table of Content
 */
function createTocObserver() {
  const headings = document.querySelectorAll("article h1[id], article h2[id], article h3[id], article h4[id], article h5[id], article h6[id]")

  const setCurrentActive = () => {
    const allActive = document.querySelectorAll(`#TableOfContents .active`)
    if (allActive.length === 0) {
      return
    } else {
      document.querySelector(`#TableOfContents .current`)?.classList.remove('current');
      document.querySelectorAll(`#TableOfContents .active`)[0]?.classList.add('current')
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`#TableOfContents li a[href="#${id}"]`)?.parentElement?.classList.add('active');
      } else {
        document.querySelector(`#TableOfContents li a[href="#${id}"]`)?.parentElement?.classList.remove('active');
      }
      setCurrentActive()
    });
  })

  // Track all sections that have an `id` applied
  headings.forEach((section) => {
    observer.observe(section);
  })
}

const initToc = () => {
  const tocContainer = document.getElementById('toc');
  if (tocContainer !== null) {
    const toc = document.getElementById('TableOfContents');
    if (toc === null) {
      // if global config 'toc = true', but there are no headings
      tocContainer.parentNode.removeChild(tocContainer);
    } else {
      createTocObserver();
    }
  }
}

export default initToc
