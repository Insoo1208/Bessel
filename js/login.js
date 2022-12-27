// password visibility
const loginPwEl = document.querySelector('#password');
const iconVisiEl = document.querySelector('.login-box .material-icons');

iconVisiEl.addEventListener('click', () => {
  if(iconVisiEl.classList.contains('active')){
    iconVisiEl.textContent = 'visibility_off';
    loginPwEl.setAttribute('type', 'password');
    iconVisiEl.classList.toggle('active');
  } else {
    iconVisiEl.textContent = 'visibility';
    loginPwEl.setAttribute('type', 'text');
    iconVisiEl.classList.toggle('active');
  }
});


// log in
const emailStr = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
const passwordStr = /[A-Za-z0-9!@#$%^&*()]{12}/g;

const btnLoginEl = document.querySelector('.btn--login');
const emailInput = document.querySelector('input#e-mail');
const passwordInput = document.querySelector('input#password');

btnLoginEl.addEventListener('click', () => {
  if (emailStr.test(emailInput.value)) {
    if (passwordStr.test(passwordInput.value)) {
      window.alert('로그인 성공');
      location.href='/';
    } else {
      window.alert('로그인에 실패하였습니다.\n비밀번호는 영문/숫자/특수기호 포함 12자 이상이어야 합니다.\n특수기호는 !@#$%^&* 만 사용 가능합니다.');
    }
  } else {
    window.alert('올바른 이메일 형식을 입력 해 주세요.');
  }
  emailInput.value = '';
  passwordInput.value = '';
});