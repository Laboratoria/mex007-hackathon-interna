$(document).ready(function(){
  $('.sidenav').sidenav();
});
$(document).ready(function(){
  $('.collapsible').collapsible();
});



const register = document.getElementById('register')
const registerBox = document.getElementById('register-box')
const loginText = document.getElementById('login-text')
const loginBox = document.getElementById('login-box')



register.addEventListener('click', () => {
  loginBox.classList.add('hide')
  registerBox.classList.remove('hide')
})
loginText.addEventListener('click', () => {
  loginBox.classList.remove('hide')
  registerBox.classList.add('hide')
})