(function () {
  "use strict";

  /*----------------------------------------
    Detect Mobile
  ----------------------------------------*/
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  /*----------------------------------------
    Back to top
  ----------------------------------------*/
  var backToTop = function () {
    $(".js-backtotop").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $("body").offset().top,
        },
        700,
        "easeInOutExpo"
      );
    });
  };

  var nextScroll = function () {
    $(".js-next").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        700,
        "easeInOutExpo"
      );
    });

    $(window).scroll(function () {
      var $this = $(this),
        st = $this.scrollTop();

      if (st > 10) {
        $(".js-next").addClass("probootstrap-sleep");
      } else {
        $(".js-next").removeClass("probootstrap-sleep");
      }
    });
  };

  // /*----------------------------------------
  // 	Search
  // ----------------------------------------*/
  // var searchControl = function () {
  //   $(".js-probootstrap-search").on("click", function () {
  //     $("#probootstrap-search").addClass("active");
  //     setTimeout(function () {
  //       $("#probootstrap-search").find("#search").focus().select();
  //     }, 500);
  //   });
  //   $(".js-probootstrap-close").on("click", function () {
  //     $("#probootstrap-search").removeClass("active");
  //   });
  // };

  /*----------------------------------------
  // 	Menu Hover
  // ----------------------------------------*/
  // var menuHover = function () {
  //   if (!isMobile.any()) {
  //     $(".probootstrap-navbar .navbar-nav li.dropdown").hover(
  //       function () {
  //         $(this)
  //           .find("> .dropdown-menu")
  //           .stop(true, true)
  //           .delay(200)
  //           .fadeIn(500)
  //           .addClass("animated-fast fadeInUp");
  //       },
  //       function () {
  //         $(this)
  //           .find("> .dropdown-menu")
  //           .stop(true, true)
  //           .fadeOut(200)
  //           .removeClass("animated-fast fadeInUp");
  //       }
  //     );
  //   }
  // };

  /*----------------------------------------
    Content Animation
  ----------------------------------------*/
  var contentWayPoint = function () {
    var i = 0;
    $(".probootstrap-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("probootstrap-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .probootstrap-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn probootstrap-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft probootstrap-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight probootstrap-animated");
                  } else {
                    el.addClass("fadeInUp probootstrap-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };

  /*----------------------------------------
   Pop-up
  ----------------------------------------*/
  var magnificPopupControl = function () {
    $(".popup-link").magnificPopup({
      delegate: "img",
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $("#gallery-Caterina").magnificPopup({
      items: [
        { src: "img/chart/Estilo Caterina/Caterina-1.jpg" },
        { src: "img/chart/Estilo Caterina/Caterina-2.jpg" },
        { src: "img/chart/Estilo Caterina/Caterina-3.jpg" },
      ],
      gallery: {
        enabled: true,
      },
      type: "image",
    });

    $("#gallery-Elena").magnificPopup({
      items: [
        { src: "img/chart/Estilo Elena/Elena-1.jpg" },
        { src: "img/chart/Estilo Elena/Elena-2.jpg" },
        { src: "img/chart/Estilo Elena/Elena-3.jpg" },
        { src: "img/chart/Estilo Elena/Elena-4.jpg" },
        { src: "img/chart/Estilo Elena/Elena-5.jpg" },
        { src: "img/chart/Estilo Elena/Elena-6.jpg" },
        { src: "img/chart/Estilo Elena/Elena-7.jpg" },
      ],
      gallery: {
        enabled: true,
      },
      type: "image",
    });

    $("#gallery-Marina").magnificPopup({
      items: [
        { src: "img/chart/Estilo Marina/Marina-1.jpg" },
        { src: "img/chart/Estilo Marina/Marina-2.jpg" },
      ],
      gallery: {
        enabled: true,
      },
      type: "image",
    });

    $("#gallery-Adriana").magnificPopup({
      items: [
        { src: "img/chart/Estilo Adriana/Adriana-1.jpg" },
        { src: "img/chart/Estilo Adriana/Adriana-2.jpg" },
        { src: "img/chart/Estilo Adriana/Adriana-3.jpg" },
        { src: "img/chart/Estilo Adriana/Adriana-4.jpg" },
        { src: "img/chart/Estilo Adriana/Adriana-5.jpg" },
      ],
      gallery: {
        enabled: true,
      },
      type: "image",
    });

    $("#gallery-Laura").magnificPopup({
      items: [
        { src: "img/chart/Estilo Laura/Laura-1.jpg" },
        { src: "img/chart/Estilo Laura/Laura-2.jpg" },
        { src: "img/mesero.jpg" },
      ],
      gallery: {
        enabled: true,
      },
      type: "image",
    });

    $("#gallery-prints").magnificPopup({
      items: [
        { src: "img/chart/prints/xiqueta.jpg" },
        { src: "img/chart/prints/il vino.jpg" },
        { src: "img/chart/prints/familia.jpg" },
        { src: "img/chart/prints/el vino.jpg" },
      ],
      gallery: {
        enabled: true,
      },
      type: "image",
    });
  };

  /*----------------------------------------
    Document Ready 
  ----------------------------------------*/
  $(document).ready(function () {
    contentWayPoint();
    backToTop();
    // searchControl();
    magnificPopupControl();
    mobileMenuControl();
    nextScroll();
  });
})();
