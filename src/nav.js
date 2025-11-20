(history.scrollRestoration = "manual"),
  $(window).on("beforeunload", function () {
    $(window).scrollTop(0);
  });
let lenis;
function mixColors(o, r) {
  var s = [];
  return (
    (s[3] = 1 - (1 - r[3]) * (1 - o[3])),
    (s[0] = Math.round(
      (r[0] * r[3]) / s[3] + (o[0] * o[3] * (1 - r[3])) / s[3],
    )),
    (s[1] = Math.round(
      (r[1] * r[3]) / s[3] + (o[1] * o[3] * (1 - r[3])) / s[3],
    )),
    (s[2] = Math.round(
      (r[2] * r[3]) / s[3] + (o[2] * o[3] * (1 - r[3])) / s[3],
    )),
    `rgba(${s[0]}, ${s[1]}, ${s[2]}, ${s[3]})`
  );
}
$(document).ready(function () {
  if (($(window).scrollTop(0), "false" != $("body").attr("data-lenis"))) {
    function o(r) {
      lenis.raf(r), requestAnimationFrame(o);
    }
    (lenis = new Lenis({
      duration: 1.5,
      lerp: 1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      normalizeWheel: !0,
      ease: "easeInOutQuad",
      wheelMultiplier: 2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      normalizeWheel: !0,
      ease: "easeInOutQuad",
      smoothTouch: !0,
      syncTouch: !0,
      syncTouchLerp: 0,
      touchInertiaMultiplier: 10,
      touchMultiplier: 0,
    })),
      requestAnimationFrame(o);
  }
});
var sectionArray = [];
function setTopBarColor() {
  var o = $("section")
    .filter(function () {
      return (
        $(this).offset().top < $(window).scrollTop() + $(window).height() &&
        $(this).offset().top + $(this).height() > $(window).scrollTop()
      );
    })
    .css("background-color");
  3 == (o = o.replace(/[^\d,]/g, "").split(",")).length && o.push(1);
  var r,
    s = o,
    a = mixColors(s, [21, 21, 21, 0.075]),
    n = a.split(",")[0].split("(")[1],
    t = a.split(",")[1];
  0.299 * n + 0.587 * t + 0.114 * a.split(",")[2] < 128
    ? ($(".payper-logo-icon").css("color", "#EAE4DC"),
      $(".nav-link-1").css("color", "#EAE4DC"),
      $(".nav-open-icon").css("color", "#EAE4DC"),
      $("#payper-header-logo-swap").css("color", "#EAE4DC"),
      $(".nav-menu-dropdown-link").css("color", "#EAE4DC"),
      $("#nav-cta").css("color", a),
      $("#nav-cta").css("background-color", "#EAE4DC"))
    : ($(".payper-logo-icon").css("color", "#151515"),
      $(".nav-link-1").css("color", "#151515"),
      $(".nav-open-icon").css("color", "#151515"),
      $("#payper-header-logo-swap").css("color", "#151515"),
      $(".nav-menu-dropdown-link").css("color", "#151515"),
      $("#nav-cta").css("color", a),
      $("#nav-cta").css("background-color", "#151515")),
    $(".top-bar").css("background-color", a),
    $(".top-bar-menu").css("background-color", a);
}
$("section").each(function () {
  var o = $(this).css("background-color");
  sectionArray.push(o);
}),
  $(document).ready(function () {
    setTopBarColor();
  }),
  $(window).scroll(function () {
    $(window).scrollTop() > 0 && setTopBarColor();
  }),
  $("#nav-open").click(function () {
    $("#payper-header-logo-swap-wrapper").css("z-index", "49"),
      $("#payper-header-logo-swap-wrapper").css("opacity", "0"),
      setTimeout(function () {
        $(".payper-logo-icon").css("color", "#EAE4DC"),
          $(".nav-link-1").css("color", "#EAE4DC"),
          $(".nav-open-icon").css("color", "#EAE4DC"),
          $("#payper-header-logo-swap").css("color", "#EAE4DC"),
          $(".nav-menu-dropdown-link").css("color", "#EAE4DC"),
          $("#nav-cta").css("color", result),
          $("#nav-cta").css("background-color", "#EAE4DC");
      }, 500),
      "false" != $("body").attr("data-lenis") && lenis.stop();
  }),
  $("#nav-close, .nav-menu-overlay").click(function () {
    setTimeout(function () {
      $(window).scrollTop($(window).scrollTop() + 1),
        setTimeout(function () {
          $("#payper-header-logo-swap-wrapper").css("z-index", "50"),
            $("#payper-header-logo-swap-wrapper").css("opacity", "1");
        }, 150);
    }, 500),
      "false" != $("body").attr("data-lenis") && lenis.start();
  }),
  $(".nav-menu-link-text").hover(
    function () {
      $(".nav-menu-link-text").css("opacity", "0.4"),
        $(this).css("opacity", "1");
    },
    function () {
      $(".nav-menu-link-text").css("opacity", "1");
    },
  ),
  $(".nav-link-1").hover(
    function () {
      $(".nav-link-1").css("opacity", "0.4"), $(this).css("opacity", "1");
    },
    function () {
      $(".nav-link-1").css("opacity", "1");
    },
  ),
  $("#whats-your-story").click(function () {
    if ("false" != $("body").attr("data-lenis") && $(window).width() > 767) {
      if ("none" != $(".whats-your-story-1").css("display")) {
        var o = $("#whats-your-story").offset().top;
        (o -= $(".top-bar").outerHeight()), lenis.scrollTo(o);
      } else {
        var o = $("#whats-your-story").offset().top;
        lenis.scrollTo(o);
      }
    }
  }),
  $("a[data-nav-scroll='true'][href='#whats-your-story']").removeAttr("href"),
  $("a[data-nav-scroll='true']").click(function () {
    if ("false" != $("body").attr("data-lenis") && $(window).width() > 767) {
      if ("none" != $(".whats-your-story-1").css("display")) {
        var o = $("#whats-your-story").offset().top;
        (o -= $(".top-bar").outerHeight()), lenis.scrollTo(o);
      } else {
        var o = $("#whats-your-story").offset().top;
        lenis.scrollTo(o);
      }
    }
  }),
  $("body").attr("data-bg-color") &&
    $("body").css("background-color", $("body").attr("data-bg-color")),
  $("a[data-nav-scroll]")
    .filter(function () {
      return "true" !== $(this).data("nav-scroll");
    })
    .click(function (o) {
      o.preventDefault();
      var r = $(this).attr("data-nav-scroll");
      if ("false" != $("body").attr("data-lenis")) {
        var s = $(r).offset().top;
        (s = s - $(".top-bar").outerHeight() + 1), lenis.scrollTo(s);
      }
    }),
  $(".nav-menu-dropdown-link.u2").hover(
    function () {
      $(".nav-menu-dropdown-link.u2").addClass("hover-off"),
        $(this).removeClass("hover-off");
    },
    function () {
      $(".nav-menu-dropdown-link.u2").removeClass("hover-off");
    },
  );
