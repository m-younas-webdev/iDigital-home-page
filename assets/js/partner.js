// Partner Section JS Logic
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: "auto", // JS will now stop calculating width
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  observer: true,
  observeParents: true,
});
