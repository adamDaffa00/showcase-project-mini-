const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  checkInput()
})

function checkInput(){
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()
  
  if(usernameValue == ''){
    setErrorFor(username, "username cannot be blank")
  }else {
    setSuccesFor(username)
  }


  if(emailValue == ''){
    setErrorFor(email, "email cannot be blank")
  }else if (!isEmail(emailValue)){
    setErrorFor(email, "email must be use @")
  }else{
    setSuccesFor(email)
  }
  
  
  if(passwordValue == ''){
    setErrorFor(password, "password cannot be blank")
  }else if(passwordValue.length < 6){
    setErrorFor(password,'password to lower')
  }else {
    setSuccesFor(password)
  }
  
  
  if(password2Value == ''){
    setErrorFor(password2, "please confirm your password")
  }
  else if (passwordValue != password2Value){
    setErrorFor(password2, "incorrect password")
  }else{
   setSuccesFor(password2)
  }
  
}

function setErrorFor(el,text){
  el.nextElementSibling.classList.add("fa-times");
  el.nextElementSibling.classList.add("icon-false");
  el.parentElement.nextElementSibling.innerText = text;
}
function setSuccesFor(el){
  el.nextElementSibling.classList.add("fa-check");
  el.nextElementSibling.classList.remove("fa-times");
  el.nextElementSibling.classList.remove("icon-false");
  el.parentElement.nextElementSibling.innerText = '';
  
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

