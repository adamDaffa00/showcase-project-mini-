const inputNama = document.getElementById('input-nama');
const inputCharacter = document.getElementById('select-character');
let char;
inputCharacter.addEventListener('change',setCharacter)
document.getElementById('start-btn').addEventListener('click',() => {
  // cek validasi
 validation(inputNama.value);
});


function setCharacter(e){
  localStorage.setItem('player',e.target.value);
  char = localStorage.getItem('player');
}

function validation(input) {
  if (input != '') {
    if (char != null) {
      window.location = 'index.html'; 
    }else {
      showError('pilih karakter dulu');
    }
  }else {
    showError('masukin nama dulu ya');
  }
}

function showError(text){
  const notifText = document.querySelector('.notif .notif-text');
 const notif = document.querySelector('.notif');
  notifText.innerText = text;
  notif.classList.add('display');
  setTimeout(function() {
    notif.classList.remove('display');
  }, 3000);
}