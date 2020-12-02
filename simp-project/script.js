const form = document.querySelector('form');
const textField = form.querySelector('#nama')
const genderOption = form.querySelectorAll('.gender-option')
let isContainingField;

form.addEventListener('submit',directLink);



function directLink(e){
  e.preventDefault();
  checkValidInput();
  if(isContainingField){
    window.location = 'home.html';
  }
}

function checkValidInput(){
  if(nama.value.length == 0){
    //setError() 
    isContainingField = false;
    alert('masukin nama lu dulu');
  }else{
    isContainingField = true;   
  }
}