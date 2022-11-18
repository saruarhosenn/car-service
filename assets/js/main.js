(function ($) {
  "use strict";
  /* ======= Sticky Menu ======= */
  var windows = $(window);
  var sticky = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 200) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });
})(jQuery);
