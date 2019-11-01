$(function() {
  /**
   *
   * Sidebar
   *
   */
  // Sidebar collapse
  $(".btn-toggle-sidebar").on("click", function() {
    $(".wrapper").toggleClass("sidebar-collapse");
  });

  // Sidebars items
  $(".sb-item").on("click", function() {
    if ($(this).hasClass("btn-toggle-sidebar")) return;
    $(this)
      .siblings()
      .removeClass("active");
    $(this)
      .siblings()
      .find(".sb-item")
      .removeClass("active");
    $(this).addClass("active");
  });
  -// Adding the collapse when window < 768 tablets and small devices
  $(window).on("resize", function() {
    var win = $(this);
    if (win.width() < 768) {
      $(".wrapper").addClass("sidebar-collapse");
    } else {
      $(".wrapper").removeClass("sidebar-collapse");
    }
  });

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  /** ------------------------------------------ */

  /**
   *
   * Main Pages
   *
   */
  $(".menu .sb-item span").on("click", function(e) {
    // prevent default behaviour of the anchor tag
    e.preventDefault();
    // save the data attribute for the anchor tag that was clicked
    var page = $(this).data("page");
    // find the current 'page' element that doesn't have the class .hide -- this is a css selector
    $(".main .page:not('.hide')")
      .stop()
      .fadeOut("fast", function() {
        // adds .hide to the element that was showing after it has faded out
        $(this).addClass("hide");
        // remove hidden class from element with the same data attribute as the anchor tag
        $('.main .page[data-page="' + page + '"]')
          .fadeIn("slow")
          .removeClass("hide");
      });
  });
});
