import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,
  spaceBetween: 50,
  loop: true,
  autoHeight: true,
  freeMode: true,
  speed: 1500,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    772: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
  watchOverflow: true,
});
