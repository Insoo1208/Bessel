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

function inputEmail(e) {
  console.log(e);
  e.value = e.value.replace(/[^A-Za-z]/ig, '')
}