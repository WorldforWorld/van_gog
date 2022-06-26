import * as jquery from "./modules/jquery.js";
import * as swiperSlider from "./modules/swiper.js";
import * as flsFunctions from "./modules/functions.js";
import * as navInit from "./modules/nav.js";

document.addEventListener("DOMContentLoaded", function() {
  flsFunctions.isWebp();
  navInit.nav();

  // Слайдер в секции hero
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
  // Слушатель мутации слайдера в секции hero
  const pagination = document.querySelector('.swiper-pagination');
  let observer = new MutationObserver(function(mutations) {
    for (let mutation of mutations) {
      if (mutation.type === 'attributes') {
        renderBullets ();
      }
    }
  });

  observer.observe(pagination, { attributes: true });

  // Слайдер в секции rental
  const rentalSwiper = new Swiper ('.rental__swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  // Скролл меню
  const headerContacts = document.querySelector('.header__contacts');
  headerContacts.style.height = headerContacts.clientHeight + 'px';
  headerContacts.classList.add('height--js');
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const y = window.scrollY;
    if (y > 200) {
      header.classList.add('header__scroll--js');
    } else if (y < 100) {
      header.classList.remove('header__scroll--js');
    }
  });

  // Плавный скролл по клику меню
  $(menu).on('click','a', function (e) {
    if($(this).attr('href') != '#') {
      e.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top - headerContacts.clientHeight - 80;
      $('body,html').animate({scrollTop: top}, 1500);      
    }    
  });  

  $('#mouse').on('click', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top - headerContacts.clientHeight - 80;
    $('body,html').animate({scrollTop: top}, 800);
  });

  $('.btn').on('click', function (e) {
    e.preventDefault();
  });
});