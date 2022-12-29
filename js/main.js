// matchMedia
const pcMedia = window.matchMedia('screen and (min-width: 1201px)');
const tabletMedia = window.matchMedia('screen and (min-width: 768px) and (max-width: 1200px)');
const mobileMedia = window.matchMedia('screen and (max-width: 767px)');


// Menu Scroll
const mainMenuItemEls = document.querySelectorAll('.main-menu__items');

mainMenuItemEls.forEach((mainMenuItemEl, index) => {
  mainMenuItemEl.addEventListener('click', () => {
    switch (index) {
      case 0:
        if (pcMedia.matches || tabletMedia.matches){
          window.scrollTo(0, 400);
        }
        break;
      case 1:
        if (pcMedia.matches || tabletMedia.matches){
          window.scrollTo(0, 700);
        } else if (mobileMedia.matches){
          window.scrollTo(0, 200);
        }
        break;
      case 2:
        if (pcMedia.matches){
          window.scrollTo(0, 1250);
        } else if (tabletMedia.matches){
          window.scrollTo(0, 1150);
        } else if (mobileMedia.matches) {
          window.scrollTo(0, 750);
        }
        break;
      case 3:
        if (pcMedia.matches){
          window.scrollTo(0, 1950);
        } else if (tabletMedia.matches){
          window.scrollTo(0, 2100);
        } else if (mobileMedia.matches) {
          window.scrollTo(0, 1350);
        }
        break;
      case 4:
        if (pcMedia.matches){
          window.scrollTo(0, 2650);
        } else if (tabletMedia.matches){
          window.scrollTo(0, 2800);
        } else if (mobileMedia.matches) {
          window.scrollTo(0, 1950);
        }
        break;
      case 5:
        if (pcMedia.matches){
          window.scrollTo(0, 3100);
        } else if (tabletMedia.matches){
          window.scrollTo(0, 3250);
        } else if (mobileMedia.matches) {
          window.scrollTo(0, 2420);
        }
        break;
    }
  });
});


// Move Top
const toTopEl = document.querySelector('.move-top');

window.addEventListener('scroll', function () {
  if (window.scrollY > 500){
    gsap.to(toTopEl, 0.4, {
      opacity: 1,
    });
  } else {
    gsap.to(toTopEl, 0.4, {
      opacity: 0,
    });
  }
});

toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.4, {
    scrollTo: 0,
  });
});


// hamburger
const hamburgerEl = document.querySelector('.hamburger');
const spanEls = hamburgerEl.querySelectorAll('span');
const headerEl = document.querySelector('header');

hamburgerEl.addEventListener('click', () => {
  spanEls.forEach(target => {
    target.classList.toggle('active');
  });
  headerEl.classList.toggle('active');
})


// Banner
const bannerSwiper = new Swiper('.banner .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.banner .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.banner .swiper-button-next',
    prevEl: '.banner .swiper-button-prev',
  }
});

// event
const eventSwiper = new Swiper('#event .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '#event .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#event .swiper-button-next',
    prevEl: '#event .swiper-button-prev',
  }
});

const bannerPauseBtnEl = document.querySelector('#banner-pause-button');
const bannerPauseBtnSpan = bannerPauseBtnEl.querySelector('.material-icons');

const eventPauseBtnEl = document.querySelector('#event-pause-button');
const eventPauseBtnSpan = eventPauseBtnEl.querySelector('.material-icons');

function swiperPause(swiper, span) {
  if (swiper.autoplay.running) {
    span.textContent = 'play_arrow';
    swiper.autoplay.stop();
  } else {
    span.textContent = 'pause';
    swiper.autoplay.start();
  }
}

bannerPauseBtnEl.addEventListener('click', () => {
  swiperPause(bannerSwiper, bannerPauseBtnSpan)
});
eventPauseBtnEl.addEventListener('click', () => {
  swiperPause(eventSwiper, eventPauseBtnSpan)
});


// Best Seller
const bsSwipeEls = document.querySelectorAll('.swipe-menu-wrapper');
const bsMenuEls = document.querySelectorAll('.bs-list-nav > span');
const bsListEl = document.querySelector('.bs-list-item__wrapper');
const bsListItemsEls = document.querySelectorAll('.bs-list-items > li');

function removeActive(target) {
  target.forEach((child) => {
    if(child.classList.contains('active')){
      child.classList.remove('active');}
  });
}

function addActive(target) {
  target.classList.add('active');
}

bsMenuEls.forEach((bsMenuEl, index) => {
  bsMenuEl.addEventListener('click', () => {
    removeActive(bsMenuEls);
    addActive(bsMenuEl);
    
    removeActive(bsSwipeEls);
    addActive(bsSwipeEls[index]);

    removeActive(bsListItemsEls);
    addActive(bsListItemsEls[index*10]);

    if (tabletMedia.matches){
      bsListEl.style.transform = `translateX(-${index * 244}px)`;
    } else if (pcMedia.matches) {
      bsListEl.style.transform = `translateX(-${index * 396}px)`;
    } else if (mobileMedia.matches) {
      bsListEl.style.transform = `translateX(-${index * (bsListEl.offsetWidth) / 3}px)`;
    }
    bsSwipeEls[index].style.transform = `translateX(0)`;
  });
});

bsListItemsEls.forEach((bsListItemEl, index) => {
  bsListItemEl.addEventListener('click', () => {
    removeActive(bsListItemsEls);
    addActive(bsListItemEl);

    if (tabletMedia.matches){
      bsSwipeEls[parseInt(index/10)].style.transform = `translateX(-${index % 10 * 485}px)`;
    } else if (pcMedia.matches) {
      bsSwipeEls[parseInt(index/10)].style.transform = `translateX(-${index % 10 * 780}px)`;
    }
  });
});


// Genre
const menuWrapper = document.querySelectorAll('.main-list__wrapper');
const subMenuEls = document.querySelectorAll('.main-list .sub-menu > li');
const contentEls = document.querySelectorAll('.contents-wrapper');

menuWrapper.forEach(wrapperEl => {
  wrapperEl.addEventListener('click', () => {
  wrapperEl.classList.toggle('active');

    if (wrapperEl.classList.contains('active')) {
      wrapperEl.querySelector('.material-icons').textContent = 'arrow_drop_up';
    } else {
      wrapperEl.querySelector('.material-icons').textContent = 'arrow_drop_down';
    }
  })
});

subMenuEls.forEach((subMenuEl, index) => {
  subMenuEl.addEventListener('click', () => {
    removeActive(subMenuEls);
    addActive(subMenuEl);

    removeActive(contentEls);
    addActive(contentEls[index]);
  })
});