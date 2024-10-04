const swiper = new Swiper(".swiper.slideproducts", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".ps-button-next",
    prevEl: ".ps-button-prev",
  },
});

//faq

$(".singleFaqTitle").on("click", function () {
  $(".singleFaq").removeClass("active");
  $(this).parents(".singleFaq").addClass("active");
});
