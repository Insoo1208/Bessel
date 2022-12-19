new Swiper('.banner .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  pagination: {
    el: '.banner .swiper-pagination', // 페이지 번호 요소
    clickable: true, // 사용자의 페이지 번호 제어 여부
  },
  navigation: { // 이전, 다음 슬라이드 버튼 사용
    nextEl: '.banner .swiper-button-next',
    prevEl: '.banner .swiper-button-prev',
  }
});