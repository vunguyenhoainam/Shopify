console.log(
  "%c Shopify...",
  "color: #ff0000; font-size: 16px; font-weight: 700"
);

var RUN = {
  // Handle-Header
  fixHeader: function () {
    document.onscroll = () => {
      var location = window.scrollY;
      if (location > 200) {
        document.querySelector(".header-wrapper").classList.add("fix-header");
      } else {
        document
          .querySelector(".header-wrapper")
          .classList.remove("fix-header");
      }
    };
  },

  // Handle-Menu mobile
  menuMobile: function () {
    $(".menu-mb").animate({
      opacity: 0,
      marginRight: -999,
    });
    // Show
    $(".icon-menu-mb").click(function (e) {
      e.preventDefault();
      $(".menu-mb").animate({
        opacity: 1,
        marginRight: 0,
      });
      $(".effect-page").addClass("effect-page-appear");
    });
    // Hidden
    $(".icon-menu-mb-close").click(function (e) {
      e.preventDefault();
      $(".menu-mb").animate({
        opacity: 0,
        marginRight: -999,
      });
      $(this).toggleClass("handle-arrow");
      $(".effect-page").removeClass("effect-page-appear");
    });
    // Hidden
    $(".effect-page").click(function (e) {
      e.preventDefault();
      $(".menu-mb").animate({
        opacity: 0,
        marginRight: -999,
      });
      $(".effect-page").removeClass("effect-page-appear");
    });
  },

  // Handle-Dropdown
  dropDown: function () {
    $(".dropdown-content").slideUp();
    $(".common-content li:first-child .dropdown-content").slideDown();
    $(".dropdown-title").click(function (e) {
      e.preventDefault();
      $(this).next(".dropdown-content").slideToggle();
      $(this).children(".icon-arrow").toggleClass("handle-arrow");
    });
  },

  // Handle-Dropdown-Menu
  dropDownMenu: function () {
    $(".sub-menu-mb").slideUp();
    $(".menu-mb-item-title").click(function (e) {
      e.preventDefault();
      $(this).next(".sub-menu-mb").slideToggle();
      $(this).children(".icon-arrow").toggleClass("handle-arrow");
    });
  },

  //Handle-Slide
  slide: function () {
    $(".list-screenshots").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        1024: {
          items: 2,
        },
      },
    });
  },

  //Handle-Counter
  counter: function () {
    const project = document.querySelector(".project");
    const experience = document.querySelector(".experience");
    const clients = document.querySelector(".clients");
    const recognition = document.querySelector(".recognition");

    function counterUp(el, to) {
      let speed = 200;
      let from = 0;
      let step = to / speed;
      const counter = setInterval(function () {
        from += step;
        if (from > to) {
          clearInterval(counter);
          el.innerText = to;
        } else {
          el.innerText = Math.ceil(from);
        }
      }, 1);
    }

    counterUp(project, 500);
    counterUp(experience, 10);
    counterUp(clients, 280);
    counterUp(recognition, 3200);
  },

  // Handle-Backtop
  backTop: function () {
    $(".back-top").click(function (e) {
      e.preventDefault();
      $("html").animate({ scrollTop: 0 }, 1500);
    });

    document.onscroll = () => {
      var location = window.scrollY;
      if (location < 300) {
        $(".back-top").css({ opacity: 0, visibility: "hidden" });
      } else {
        $(".back-top").css({ opacity: 1, visibility: "visible" });
      }
    };
  },

  // AOS
  aos: function () {
    AOS.init({
      disable: window.innerWidth < 1024,
    });
  },

  init: function () {
    RUN.fixHeader();
    RUN.menuMobile();
    RUN.dropDown();
    RUN.dropDownMenu();
    RUN.slide();
    RUN.counter();
    RUN.backTop();
    RUN.aos();
  },
};

$(document).ready(function () {
  setTimeout(function () {
    RUN.init();
  }, 100);
});
