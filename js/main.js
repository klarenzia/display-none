(function () {
  "use strict";

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
   Gallery poptrox
  ----------------------------------------*/
  var gallery = function () {
    $('.gallery').each(function () {

      var $gallery = $(this),
        $content = $gallery.find('.content');

      // Poptrox.
      $content.poptrox({
        usePopupCaption: true
      });

      // Tabs.
      $gallery.each(function () {

        var $this = $(this),
          $tabs = $this.find('.tabs a'),
          $media = $this.find('.media');

        $tabs.on('click', function (e) {

          var $this = $(this),
            tag = $this.data('tag');

          // Prevent default.
          e.preventDefault();

          // Remove active class from all tabs.
          $tabs.removeClass('active');

          // Reapply active class to current tab.
          $this.addClass('active');

          // Hide media that do not have the same class as the clicked tab.
          $media
            .fadeOut('fast')
            .each(function () {

              var $this = $(this);

              if ($this.hasClass(tag))
                $this
                  .fadeOut('fast')
                  .delay(200)
                  .queue(function (next) {
                    $this.fadeIn();
                    next();
                  });
            });
        });
      });
    });
  };
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
    Document Ready 
  ----------------------------------------*/
  $(document).ready(function () {
    contentWayPoint();
    backToTop();
    // searchControl();
    nextScroll();
    gallery();
  });
})();
