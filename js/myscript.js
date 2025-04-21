AOS.init({
  duration: 1000
});

$(function () {
  // Owl Carousel
  var owl = $(".recruiter_slide");
  owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    dots: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1.3,
      },
      500: {
        items: 2,
      },
      600: {
        items: 2.5,
      },
      990: {
        items: 3.5,
      },
      1300: {
        items: 5,
      },
      1400: {
        items: 6,
      }
    }
  });
});
