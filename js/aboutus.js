var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    685: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
  loop: true
});
