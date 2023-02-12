(() => {
  // ns-hugo:/home/runner/work/hugo-theme-jane/hugo-theme-jane/assets/js/initMobileNavbar.js
  var initMobileNavbar = () => {
    const $mobileNav = $("#mobile-navbar");
    const $mobileNavIcon = $(".mobile-navbar-icon");
    const slideout = new Slideout({
      "panel": document.getElementById("mobile-panel"),
      "menu": document.getElementById("mobile-menu"),
      "padding": 180,
      "tolerance": 70
    });
    slideout.disableTouch();
    $mobileNavIcon.click(function() {
      slideout.toggle();
    });
    slideout.on("beforeopen", function() {
      $mobileNav.addClass("fixed-open");
      $mobileNavIcon.addClass("icon-click").removeClass("icon-out");
    });
    slideout.on("beforeclose", function() {
      $mobileNav.removeClass("fixed-open");
      $mobileNavIcon.addClass("icon-out").removeClass("icon-click");
    });
    $("#mobile-panel").on("touchend", function() {
      slideout.isOpen() && $mobileNavIcon.click();
    });
    $(".mobile-submenu-open").on("click", function() {
      const $mobileSubmenuList = $(".mobile-submenu-list");
      const $mobileMenuParent = $(".mobile-menu-parent");
      if ($(this).parent().next().css("display") == "none") {
        $mobileSubmenuList.slideUp(300);
        $(this).parent().next("ul").slideDown(300);
        $(this).parent().addClass("mobile-submenu-show");
        $(this).parent().parent().siblings().children().removeClass("mobile-submenu-show");
      } else {
        $(this).parent().next("ul").slideUp(300);
        $mobileMenuParent.removeClass("mobile-submenu-show");
      }
    });
  };
  var initMobileNavbar_default = initMobileNavbar;

  // ns-hugo:/home/runner/work/hugo-theme-jane/hugo-theme-jane/assets/js/initToc.js
  function createTocObserver() {
    const headings = document.querySelectorAll("article h1[id], article h2[id], article h3[id], article h4[id], article h5[id], article h6[id]");
    const setCurrentActive = () => {
      const allActive = document.querySelectorAll(`#TableOfContents .active`);
      if (allActive.length === 0) {
        return;
      } else {
        document.querySelector(`#TableOfContents .current`)?.classList.remove("current");
        document.querySelectorAll(`#TableOfContents .active`)[0]?.classList.add("current");
      }
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document.querySelector(`#TableOfContents li a[href="#${id}"]`)?.parentElement?.classList.add("active");
        } else {
          document.querySelector(`#TableOfContents li a[href="#${id}"]`)?.parentElement?.classList.remove("active");
        }
        setCurrentActive();
      });
    });
    headings.forEach((section) => {
      observer.observe(section);
    });
  }
  var initToc = () => {
    const tocContainer = document.getElementById("toc");
    if (tocContainer !== null) {
      const toc = document.getElementById("TableOfContents");
      if (toc === null) {
        tocContainer.parentNode.removeChild(tocContainer);
      } else {
        createTocObserver();
      }
    }
  };
  var initToc_default = initToc;

  // ns-hugo:/home/runner/work/hugo-theme-jane/hugo-theme-jane/assets/js/initHeaderAnchor
  var anchorForId = (id) => {
    var anchor = document.createElement("a");
    anchor.className = "header-link";
    anchor.href = "#" + id;
    anchor.innerHTML = '<svg viewBox="0 0 16 10" version="1.1" width="24" height="24"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg>';
    return anchor;
  };
  var linkifyAnchors = (level, containingElement) => {
    var headers = containingElement.getElementsByTagName("h" + level);
    for (var h = 0; h < headers.length; h++) {
      var header = headers[h];
      header.className = "post-content-header";
      if (typeof header.id !== "undefined" && header.id !== "") {
        header.appendChild(anchorForId(header.id));
      }
    }
  };
  var initHeaderAnchor = () => {
    var contentBlock = document.getElementsByClassName("post-content")[0];
    if (!contentBlock) {
      return;
    }
    for (var level = 1; level <= 4; level++) {
      linkifyAnchors(level, contentBlock);
    }
  };
  var initHeaderAnchor_default = initHeaderAnchor;

  // ns-hugo:/home/runner/work/hugo-theme-jane/hugo-theme-jane/assets/js/initFootnoteTooltip.js
  var initFootnoteTooltip = () => {
    $(".footnote-ref").each(function() {
      var id = $(this).attr("href").substr(1), footnote = $(document.getElementById(id)).clone(), outer_wrapper = $("<span>", { "class": "fn-content" }), inner_wrapper = $("<span>", { "class": "fn-text" });
      footnote.find(".footnote-return").remove();
      $(this).append(outer_wrapper.append(inner_wrapper.html(footnote.html())));
    });
    var position = function() {
      var content = $(".fn-content").removeAttr("style");
      if ($(window).width() < 640)
        content.css("width", $(window).width() / 2);
      else
        content.css("width", 340);
      content.each(function() {
        var width = $(this).children(".fn-text").outerWidth();
        $(this).css({
          "width": width,
          "margin-left": width / -2
        });
      });
    };
    position();
    $(window).resize(position());
  };
  var initFootnoteTooltip_default = initFootnoteTooltip;

  // <stdin>
  $(document).ready(function() {
    initMobileNavbar_default();
    initToc_default();
    initHeaderAnchor_default();
    initFootnoteTooltip_default();
  });
})();
