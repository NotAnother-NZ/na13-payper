$(".footer-link:not(.t3)").hover(
  function () {
    $(".footer-link:not(.t3)").css("opacity", "0.4"),
      $(this).css("opacity", "1");
  },
  function () {
    $(".footer-link:not(.t3)").css("opacity", "1");
  }
);
$("#footer-text").text(
  "Copyright " + new Date().getFullYear() + " © Payper. All rights reserved."
);
