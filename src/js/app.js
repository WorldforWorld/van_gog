import * as flsFunctions from "./modules/functions.js";
import * as swiperSlider from "./modules/swiper.js";
import * as jquery from "./modules/jquery.js";

flsFunctions.isWebp();
document.addEventListener("DOMContentLoaded", function() {

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

  // Клик по бургер меню
  let hamburger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');

  const toggleMenu = () => {
    menu.classList.toggle('header__nav--active-js');
    hamburger.classList.toggle('header__burger--active-js');
  }

  hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
  });

  document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('header__nav--active-js');
    
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
    }
  });

  // Плавный скролл по клику меню
  $(menu).on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top - headerContacts.clientHeight - 80;
    $('body,html').animate({scrollTop: top}, 1500);
    
    $('#mouse').on('click', function (e) {
      e.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top - headerContacts.clientHeight - 80;
      $('body,html').animate({scrollTop: top}, 800);
    });
  });  

  $('.btn').on('click', function (event) {
    event.preventDefault();
  });
});