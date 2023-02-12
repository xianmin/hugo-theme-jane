/**
* Anchor for post content header
**/
const anchorForId = (id) => {
  var anchor = document.createElement("a");
  anchor.className = "header-link";
  anchor.href = "#" + id;
  anchor.innerHTML = '<svg viewBox="0 0 16 10" version="1.1" width="24" height="24"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg>';
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
