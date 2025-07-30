// // slider 

$(document).ready(function () {
  const $carousel = $(".market-carousel");

  $carousel.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    dotsEach: 1,
    navText: [
      '<img src="../assets/images/left-arrow.svg" alt="prev">',
      '<img src="../assets/images/right-arrow.svg" alt="next">'
    ],
    responsive: {
      0: {
        items: 1.5,
        slideBy: 1,
      },
      1140: {
        items: 2,
        slideBy: 1,
      },
      1300: {
        items: 2.5,
        slideBy: 1,
      },
      1500: {
        items: 3,
        slideBy: 1,
      },
      1860: {
        items: 4,
        slideBy: 1,
      }
    },
    onInitialized: arrangeControls,
    onRefreshed: arrangeControls
  });

  function arrangeControls() {
    setTimeout(() => {
      const $wrapper = $(".market-carousel-wrapper");
      const $controls = $wrapper.find(".market-controls");

      const $nav = $wrapper.find(".owl-nav");
      const $dots = $wrapper.find(".owl-dots");

      if ($nav.length && $dots.length && !$controls.find('.owl-prev').length) {
        $controls.empty(); // Clear only if we're confident elements exist

        // Append only if content exists
        const $prev = $nav.find('.owl-prev');
        const $next = $nav.find('.owl-next');

        if ($prev.length && $next.length) {
          $controls.append($prev).append($dots).append($next);
        }
      }
    }, 100); // You can increase delay if still inconsistent
  }

});


// trendSlider
$(document).ready(function () {
  $(".trend-carousel").each(function (index) {
    const $carousel = $(this);
    const $dotsContainer = $carousel.closest(".trend-card, .support-card").find(".dots");

    $carousel.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      dotsEach: 1,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
    });

    const totalSlides = $carousel.find('.owl-item:not(.cloned)').length;

    for (let i = 0; i < totalSlides; i++) {
      $dotsContainer.append(`<span data-slide="${i}"></span>`);
    }

    $dotsContainer.find("span").first().addClass("active");

    $dotsContainer.on("click", "span", function () {
      const index = $(this).data("slide");
      $carousel.trigger("to.owl.carousel", [index, 300]);

      $dotsContainer.find("span").removeClass("active");
      $(this).addClass("active");
    });

    $carousel.on("changed.owl.carousel", function (event) {
      const total = event.item.count; // total items (excluding clones)
      const index = event.item.index - event.relatedTarget._clones.length / 2;

      const normalizedIndex = (index + total) % total; // ensure non-negative wrap-around

      $dotsContainer.find("span").removeClass("active");
      $dotsContainer.find(`span[data-slide="${normalizedIndex}"]`).addClass("active");
    });

  });
});


// // slider 

$(document).ready(function () {
  const $carousel = $(".market-carousel2");

  $carousel.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    dotsEach: 1,
    navText: [
      '<img src="../assets/images/left-arrow.svg" alt="prev">',
      '<img src="../assets/images/right-arrow.svg" alt="next">'
    ],
    responsive: {
      0: {
        items: 1.5,
        slideBy: 1,
      },
      1140: {
        items: 2,
        slideBy: 1,
      },
      1300: {
        items: 2.5,
        slideBy: 1,
      },
      1500: {
        items: 3,
        slideBy: 1,
      },
      1860: {
        items: 4,
        slideBy: 1,
      }
    },
    onInitialized: arrangeControls,
    onRefreshed: arrangeControls
  });

  function arrangeControls() {
    const $wrapper = $(".market-carousel-wrapper-2");
    const $nav = $wrapper.find(".owl-nav");
    const $dots = $wrapper.find(".owl-dots");

    const $controls = $wrapper.find(".market-controls");
    $controls.empty();

    $controls
      .append($nav.find('.owl-prev'))
      .append($dots)
      .append($nav.find('.owl-next'));
  }
});