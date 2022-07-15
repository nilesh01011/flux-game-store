var swiper = new Swiper('#bannerSwiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
  },
  effect: 'fade',
  loopAdditionalSlides: 1,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// banner Swiper End

var swiper = new Swiper('#swiper1', {
  loop: false,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  loopAdditionalSlides: 1,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper1 End

var swiper = new Swiper('#swiper2', {
  loop: false,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  loopAdditionalSlides: 1,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('#swiper3', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  loopAdditionalSlides: 1,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination3',
    dynamicBullets: true,
    clickable: true,
  },
});
