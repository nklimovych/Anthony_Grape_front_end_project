$(".testimonials__content-carousel").slick({
  infinite: true,
  mobileFirst: true,
  prevArrow: '<button type="button" class="slick-prev">&#x276E;</button>',
  nextArrow: '<button type="button" class="slick-next">&#x276F;</button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});
