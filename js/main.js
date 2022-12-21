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

const bannerPauseBtnEl = document.querySelector('#banner-pause-button');
const bannerPauseBtnSpan = bannerPauseBtnEl.querySelector('.material-icons');

bannerPauseBtnEl.addEventListener('click', () => {
  if (bannerSwiper.autoplay.paused) {
    bannerPauseBtnSpan.textContent = 'pause';
    bannerSwiper.autoplay.run();
  } else {
    bannerPauseBtnSpan.textContent = 'play_arrow';
    bannerSwiper.autoplay.pause(5000);
  }
});

// Best Seller
const bsSwipeEls = document.querySelectorAll('.swipe-menu-wrapper');
const bsMenuEls = document.querySelectorAll('.bs-list-nav > span');
const bsListEl = document.querySelectorAll('.bs-list-item__wrapper');
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

    bsListEl[0].style.transform = `translateX(-${index * 396}px)`;
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