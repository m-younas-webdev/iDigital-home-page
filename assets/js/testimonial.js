// const swiper = new Swiper(".testimnial-cards-main-container", {
//   loop: true,
//   slidesPerView: "auto",
//   centeredSlides: false,
//   grabCursor: true,
//   // This explicitly removes the gap between slides
//   spaceBetween: 0,
//   loopedSlides: 4,
//   // Add this to ensure no offset is calculated
//   slidesOffsetBefore: 0,
//   slidesOffsetAfter: 0,
// });

// const swiper = new Swiper(".mySwiper.testimnial-cards-main-container", {
//   slidesPerView: 3, // Show 3 cards (3 cards dikhayen)
//   spaceBetween: 30, // Gap between cards (cards ke darmiyan fasla)
//   loop: true, // Infinite loop (hamesha chalta rahe)
//   autoplay: {
//     delay: 5000, // Wait 5 seconds (5 second ruko)
//     disableOnInteraction: false,
//   },
//   speed: 2000, // Transition duration 2s (tabdeeli ka waqt 2s)

//   // Responsive breakpoints
//   breakpoints: {
//     320: { slidesPerView: 1 }, // 1 card on mobile
//     768: { slidesPerView: 2 }, // 2 cards on tablets
//     1024: { slidesPerView: 3 }, // 3 cards on desktop
//   },
// });
//  global Swiper
var testimonialSwiper = new Swiper(".testimonial-slider-unique", {
  slidesPerView: 3, // Show 3 cards at a time (Aik waqt mein 3 cards)
  spaceBetween: 30, // Space between cards (Cards ke darmiyan fasla)
  loop: true, // Infinite loop (Hamesha chalta rahega)
  speed: 10, // Transition speed 3 seconds (Chalne ki raftaar)
  autoplay: {
    delay: 2000, // Wait for 5 seconds (5 second ka intezar)
    disableOnInteraction: false,
  },
  breakpoints: {
    // Responsive adjustments
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
