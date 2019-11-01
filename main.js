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
    e.preventDefault();
    var page = $(this).data("page");
    $(".main .page:not('.hide')")
      .stop()
      .fadeOut("fast", function() {
        $(this).addClass("hide");
        $('.main .page[data-page="' + page + '"]')
          .fadeIn("slow")
          .removeClass("hide");
      });
  });
});
