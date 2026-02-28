const swiper = new Swiper(".testimnial-cards-main-container", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: false,
  grabCursor: true,
  // This explicitly removes the gap between slides
  spaceBetween: 0,
  loopedSlides: 4,
  // Add this to ensure no offset is calculated
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
});
