const kakaoApiKey = 'ffa89cfc78225aff2872d03ae1064df0';

// query : (String) 검색을 원하는 질의어 !Required
// size	: (Integer)	한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
// page	: (Integer)	결과 페이지 번호, 1~50 사이의 값, 기본 값 1
// target : (String) title(제목), isbn (ISBN), publisher(출판사), person(인명)

function createFetchUrl(data) {
  let url = `https://dapi.kakao.com/v3/search/book?`;
  if (data.hasOwnProperty('target')) {
    url += `?target=${data.target}`;
  }
  for (const key in data) {
    if (key !== 'target'){
      url += `&${key}=${data[key]}`;
    }
  }
  return url;
}

const inputBoxEl = document.querySelector('#search-all');
const btnEl = document.querySelector('.search-box .material-icons');
const targetEl = document.querySelector('#main-search');
const contentArea = document.querySelector('#result-area .inner');
const resultText = document.querySelector('#result-area h1');
const contentsWrapper = document.querySelector('#result-area .result-wrapper');

function setTarget(data) {
  if (data == 'all') {
    return;
  } else {
    return data;
  }
}

function createResultView(index, data) {
  const authors = document.createElement('ul');
  authors.classList.add('authors');
  
  for (let num = 0; num < data.documents[index].authors.length; num++) {
    const author = document.createElement('li');
    author.classList.add('author');
    author.textContent = data.documents[index].authors[num];
    authors.append(author);
  }

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = data.documents[index].title;

  const discription = document.createElement('span');
  discription.classList.add('discription');
  discription.textContent = data.documents[index].contents;

  const price = document.createElement('span');
  price.classList.add('price');
  price.textContent = data.documents[index].price;

  const subContents = document.createElement('div');
  subContents.classList.add('sub-contents');
  subContents.append(title, authors, discription, price);

  const imgWrapper = document.createElement('a');
  imgWrapper.href = data.documents[index].url;
  imgWrapper.target = '_blank';

  const thumbnail = document.createElement('img');
  thumbnail.src = data.documents[index].thumbnail;
  thumbnail.alt = `thumbnail_img_${index + 1}`;

  imgWrapper.append(thumbnail);

  const contents = document.createElement('li');
  contents.classList.add('contents');

  contents.append(imgWrapper, subContents);
  contentsWrapper.append(contents);
}

function resetContents() {
  if (document.querySelectorAll('.contents')){
    document.querySelectorAll('.contents').forEach(target => {
      target.remove();
    });
  }
}

function searchBook(inputData) {
  if(inputData.value == ''){
    // return window.alert('검색어를 입력해주세요!');
    return console.log('검색어를 입력해주세요!');
  }
  
  resultText.style.display = 'block';

  resetContents();

  contentArea.style.height = '600px';

  fetch(createFetchUrl({
    query: inputData.value,
    size: 7,
    target: setTarget(targetEl.value)
  }), {
    headers: {
      Authorization: `KakaoAK ${kakaoApiKey}`
    }
  })
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < data.documents.length; index++) {
        createResultView(index, data);
      }
    });
}

btnEl.addEventListener('click', () => {
  searchBook(inputBoxEl);
});

const mobileInput = document.querySelector('#sub-search');
const mobileSearchBtn = document.querySelector('.mini-search-all .material-icons');

mobileSearchBtn.addEventListener('click', searchBook(mobileInput));
// btnEl.addEventListener('click', () => {
//   searchBook(mobileInput);
// });