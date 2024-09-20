/**
* Anchor for post content header
**/
const anchorForId = (id) => {
  var anchor = document.createElement("a");
  anchor.className = "header-link";
  anchor.href = "#" + id;
  anchor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-2"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>';
  return anchor;
};

const linkifyAnchors = (level, containingElement) => {
  var headers = containingElement.getElementsByTagName("h" + level);
  for (var h = 0; h < headers.length; h++) {
    var header = headers[h];
    header.className = "post-content-header";

    if (typeof header.id !== "undefined" && header.id !== "") {
      // insert header-link before the header
      header.appendChild(anchorForId(header.id));
    }
  }
};

const initHeaderAnchor = () => {
  var contentBlock = document.getElementsByClassName("post-content")[0];
  if (!contentBlock) {
    return;
  }

  for (var level = 1; level <= 4; level++) {
    linkifyAnchors(level, contentBlock);
  }
};

export default initHeaderAnchor
