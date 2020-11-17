const tanah = document.querySelectorAll(".tanah")
const tikus = document.querySelectorAll(".tikus")
const scoreEl = document.querySelector(".score h2")
const audio = document.querySelector(".audio")

// variabel yang berisi untuk memilih batas waktu
const optionTimeout = document.querySelector("#timeout")
const countDown = document.querySelector(".count-down h2")

// variabel untuk memilih batas waktu 
const optionTimeFaster = document.querySelector("#kec-tikus");

let gameMulai;
let score;
let indexSebelumnya;
let timeOut;
let counter;

let arrTime = []
// listener untuk memilih fungsi hitungan mundur
optionTimeout.addEventListener("change",timeout)
optionTimeFaster.addEventListener("change",setTimeFaster)

function randomTikus(tikus){
  let randTikus = Math.floor(Math.random() * tikus.length)
  let iTikus = tikus[randTikus];
  if (iTikus == indexSebelumnya) {
    randomTikus(tanah)
  }
  indexSebelumnya = iTikus
  return iTikus
}

function randomTime(min,max){
  return Math.round(Math.random() * (max - min) + min)
}

function munculkanTikus(){
  const indexTikusEl = randomTikus(tikus);
  if(arrTime.length != 0){
    let [min,max] = arrTime
    let timeRandom = randomTime(+min,+max);
    indexTikusEl.classList.add("muncul");
   
    setTimeout(() => {
      indexTikusEl.classList.remove("muncul");
      if (!gameMulai) {
        munculkanTikus()
      }
    },timeRandom)    
  }else{
    alert("oops! kecepatan tikus belum diatur")
  }
}

function timeout(){
  switch (this.value) {
    case '10':
      timeOut = 10;
      break;
    case '20':
      timeOut = 20;
      break;
     case '30':
      timeOut = 30;
       break;
     case '40':
      timeOut = 40;
       break;
     case '50':
      timeOut = 50;
       break;
     case '60':
      timeOut = 60;
       break;
    default:
    timeOut = 0;
  }
}

function play(){
  if (timeOut != undefined){
    if (arrTime.length != 0) {
      gameMulai = false;
      score = 0;
      scoreEl.innerHTML = score;
      munculkanTikus();
      let countdown = setInterval(hitungMundur,1000);
      setTimeout(() => {
      gameMulai = true;
      clearInterval(countdown);
      timeOut = undefined;
      }, timeOut * 1000);
    }else{
     alert("kecepatan tikus belum diatur")
    }
  }else{
   alert("anda belum mengatur waktu main");
  }
}

function pukul (){
  score++;
  audio.play();
  this.parentElement.classList.remove('muncul');
  scoreEl.innerHTML = score;
}

function hitungMundur(){
  counter = timeOut--;
  countDown.innerHTML = counter - 1;
}

function setTimeFaster(){
  arrTime = this.value.split(",");
  
 return arrTime
}

tikus.forEach(e => {
  e.addEventListener("click", pukul);
})



