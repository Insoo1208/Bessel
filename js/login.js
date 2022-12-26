// password visibility
const loginPwEl = document.querySelector('#password');
const iconVisiEl = document.querySelector('.login-box .material-icons');

iconVisiEl.addEventListener('click', () => {
  if(iconVisiEl.classList.contains('active')){
    iconVisiEl.textContent = 'visibility_off';
    loginPwEl.setAttribute('type', 'password');
    iconVisiEl.classList.toggle('active');
  } else {
    iconVisiEl.classList.toggle('active');
    iconVisiEl.textContent = 'visibility';
    loginPwEl.setAttribute('type', 'text');
  }
});

const chkEmail = /[^A-Za-z0-9@._-]/g;
const chkPW = /[^A-Za-z0-9!@#$%^&*()]/g;

function inputEmail(e) {
  e.value = e.value.replace(chkEmail, '');
}

function inputPassword(e) {
  e.value = e.value.replace(chkPW, '');
}