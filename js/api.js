const apiKey = 'A592DDA642BDA14ABAE08F0F8BC8215C978F5386563B9D14F37537C7952AE4F8';
const path = 'http://book.interpark.com/api/bestSeller.api'



function bsView(data, index) {  
  const bsSlide = document.querySelector('.swipe-menu-wrapper');

  const spanTitle = document.createElement('span');
  spanTitle.classList.add('title');
  spanTitle.textContent = data.item[index].title;
  
  const spanContents = document.createElement('span');
  spanContents.classList.add('contents');
  spanContents.textContent = data.item[index].description;
  
  const spanWrapper = document.createElement('div');
  spanWrapper.classList.add('span-wrapper');
  
  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = data.item[index].coverLargeUrl;
  thumbnailImg.alt = `bestseller_thumb_${index + 1}`
  
  const imgLink = document.createElement('a');
  imgLink.href = 'javascript:void(0)';
  
  const swipeMenu = document.createElement('div');
  swipeMenu.classList.add('swipe-menu-slide');

  imgLink.append(thumbnailImg);
  spanWrapper.append(spanTitle, spanContents);

  swipeMenu.append(imgLink, spanWrapper);

  bsSlide.append(swipeMenu);
  // let html = `<div class="swipe-menu-slide">`;
  // html    += `<a href="javascript:void(0)">`;
  // html    += ``;
  // html    += ` <span class="title">${data.item[index].title}</span>`;
  // html    += ``;
  // html    += ``;
  // document..innerHTML(html);
}

function createUrl(obj) {
  let url = `${path}?key=${apiKey}`;
  for (const key in obj) {
    url += `&${key}=${obj[key]}`;
  }
  return url;
}

fetch(createUrl({
  categoryId: 100,
  output: 'json'
}))
  .then((response) => response.json())
  .then((data) => {
    for (let index = 0; index < 10; index++) {
      bsView(data, index);
    }
  });