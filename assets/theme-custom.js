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

$(window).on("load", function () {
  const swiperss = new Swiper(".swiper.slideproducts.recomProduct", {
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
});

//faq

$(".singleFaqTitle").on("click", function () {
  $(".singleFaq").removeClass("active");
  $(this).parents(".singleFaq").addClass("active");
});
$(".menuOpen.menuIcon").on("click", function () {
  $("body").addClass("menu-open");
  $(".mobileMenuWrapper").addClass("menu-open");
});
$(".menuclose.menuIcon").on("click", function () {
  $("body").removeClass("menu-open");
  $(".mobileMenuWrapper").removeClass("menu-open");
});

function updateHeaderTotals() {
  window
    .fetch("/cart.js")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      document.dispatchEvent(
        new CustomEvent("theme:cart:change", {
          detail: {
            cart: response,
          },
          bubbles: true,
        })
      );
    })
    .catch((e) => {
      console.error(e);
    });
}
function addItemToCart(variant_id) {
  data = {
    id: variant_id,
    quantity: 1,
  };

  jQuery.ajax({
    type: "POST",
    url: "/cart/add.js",
    data: data,
    dataType: "json",
    beforeSend() {
      $(".quickButton").addClass("loading");
    },
    success: function () {
      //window.location.href = "/cart";
      updateHeaderTotals();
      $(".quickButton").removeClass("loading");
      $(".quickButton").text("Added");
      $(".quickButton").addClass("disabled");
    },
  });
}

$("p.quickButton").on("click", function () {
  var variant_id = $(this).attr("data-id");
  console.log(variant_id);
  addItemToCart(variant_id);
  // updateButtonPrice(variant_id, this.container);
});
