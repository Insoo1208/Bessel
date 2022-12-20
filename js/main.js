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