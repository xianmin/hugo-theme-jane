/**
 * footnote tooltip
 */
const initFootnoteTooltip = () => {
  $(".footnote-ref").each(function () {
    var id = $(this).attr("href").substr(1),
      footnote = $(document.getElementById(id)).clone(),
      outer_wrapper = $("<span>", { "class": "fn-content" }),
      inner_wrapper = $("<span>", { "class": "fn-text" });
    footnote.find(".footnote-return").remove();
    $(this).append(outer_wrapper.append(inner_wrapper.html(footnote.html())));
  });

  // fix tooltip position & width
  var position = function () {
    var content = $(".fn-content").removeAttr("style");
    if ($(window).width() < 640)
      content.css("width", $(window).width() / 2);
    else
      content.css("width", 340); // default value
    content.each(function () {
      var width = $(this).children(".fn-text").outerWidth();
      $(this).css({
        "width": width,
        "margin-left": width / -2
      });
    });
  }
  position();
  $(window).resize(position());
}

export default initFootnoteTooltip
