import * as flsFunctions from "./modules/functions.js";
import * as swiperSlider from "./modules/swiper.js";

flsFunctions.isWebp();
const heroSwiper = new Swiper ('.hero .swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

function renderBullets () { 
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');
  for (let a = 0; a < bullets.length; a++) {
    let b = a + 1;
    bullets[a].classList.remove('swiper-pagination-bullet-prev');
    if (bullets[a].classList.contains('swiper-pagination-bullet-active')) {
      if (bullets.length != b ) {
        bullets[a+1].classList.add('swiper-pagination-bullet-prev');
        a++;
      } else {
        bullets[0].classList.add('swiper-pagination-bullet-prev');
      }
    } 
  }
}

renderBullets ();

const pagination = document.querySelector('.swiper-pagination');
let observer = new MutationObserver(function(mutations) {
  for (let mutation of mutations) {
    if (mutation.type === 'attributes') {
      renderBullets ();
    }
  }
});

observer.observe(pagination, { attributes: true });

// Отчет отступа от высоты меню
