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

// e-mail save
const saveCheckEl = document.querySelector('#email-save');

saveCheckEl.addEventListener('click', () => {
  if(saveCheckEl.checked === true){
    if(window.confirm('개인정보보호를 위해 개인 기기에서만 사용하세요.')){
      saveCheckEl.checked = true;
    } else {
      saveCheckEl.checked = false;
    }
  }
})