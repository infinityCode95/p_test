import Swiper from "../libs/swiper.min.js";

new Swiper(".gallery__slider-wrap", {
  slidesPerView: 1,
  loop: true,
  navigation: {
      nextEl: ".gallery__btn-next",
      prevEl: ".gallery__btn-prev",
    },
    pagination: {
      el: ".gallery__slider-pagination",
      clickable: true,
    },
});
