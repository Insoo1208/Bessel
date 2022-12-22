// Banner
const bannerSwiper = new Swiper('.banner .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000
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
    delay: 5000
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

function swiperPause(swiper, btn, span) {
  btn.addEventListener('click', () => {
    if (swiper.autoplay.paused) {
      span.textContent = 'pause';
      swiper.autoplay.run();
    } else {
      span.textContent = 'play_arrow';
      swiper.autoplay.pause(5000);
    }
  })
};

swiperPause(bannerSwiper, bannerPauseBtnEl, bannerPauseBtnSpan);
swiperPause(eventSwiper, eventPauseBtnEl, eventPauseBtnSpan);

// function swiperPause(swiper, span) {
//   if (swiper.autoplay.paused) {
//     span.textContent = 'pause';
//     swiper.autoplay.run();
//   } else {
//     span.textContent = 'play_arrow';
//     swiper.autoplay.pause(5000);
//   }
// };
// 
// bannerPauseBtnEl.addEventListener('click', swiperPause(bannerSwiper, bannerPauseBtnSpan));

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
};

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

    bsListEl.style.transform = `translateX(-${index * 396}px)`;
    bsSwipeEls[index].style.transform = `translateX(0)`;
  });
});

bsListItemsEls.forEach((bsListItemEl, index) => {
  bsListItemEl.addEventListener('click', () => {
    removeActive(bsListItemsEls);
    addActive(bsListItemEl);

    bsSwipeEls[parseInt(index/10)].style.transform = `translateX(-${index % 10 * 780}px)`;
  });
});