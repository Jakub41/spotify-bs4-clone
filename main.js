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
   * On click event on menu span to open the pages in the same view
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

  // Music Cards Home All Songs
  var musicDataJson = "music.json";
  $.getJSON(musicDataJson);

  //   $.getJSON(musicDataJson, function(data){
  //     console.log(data);
  //     var output = '<ul>';
  //     $.each(data, function(key,val){
  //       output += '<li>'+ val.title + " " + val.artist+ '</li>';
  //     });
  //     output += '</ul>';
  //     $('#m-all-cards').html(output);
  //     });

  /*
        Stop carousel
    */
  $(".carousel").carousel("pause");

  $("#s-carousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
  // Music Cards Search result
});
