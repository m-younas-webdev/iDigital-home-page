// Partner Section JS Logic
var partnerLogoSwiper = new Swiper(".partner-logo-container", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: "auto", // JS will now stop calculating width
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  observer: true,
  observeParents: true,
});
