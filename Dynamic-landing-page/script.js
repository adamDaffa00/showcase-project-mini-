const time = document.getElementById("time");
const greeting = document.querySelector(".greeting");
const name = document.querySelector(".name");
const focus = document.querySelector(".focus");


let showTime = () => {
  let [h,m,s] = getTime();
  let amPm = h >= 12 ? 'pm' : 'am';
  time.innerHTML = `${h} <span>:</span> ${addZero(m)} <span>:</span> ${addZero(s)}`;
};

function addZero(n){
  return (parseInt(n) < 10 ? '0' : '') + n;
}

function setBackground(){
  let [h,...t] = getTime();
  if (h < 12) {
    greeting.innerHTML = `good morning`;
    document.body.style.background = 'url(img/pagi.jpg) no-repeat center center/cover';
  }else if(h < 18 ){
    greeting.innerHTML = `good afternoon`;
    document.body.style.background = 'url(img/siang.jpg) no-repeat center center/cover';
  }else{
    greeting.innerHTML = `good night`;
    document.body.style.color = '#fff';
    document.body.style.background = 'url(img/malam.jpg) no-repeat center center/cover';
  }
}

function getTime(){
  let toDay = new Date();
  let hours = toDay.getHours();
  let minutes = toDay.getMinutes();
  let secound = toDay.getSeconds();
  let arrTime = [hours,minutes,secound];
  return arrTime;
}

function setName (e){
   localStorage.setItem('nama',e.target.innerText)
}

function setFocus(e){
   localStorage.setItem('focus',e.target.innerText)
}

function getName() {
  if(localStorage.getItem("nama") == null){
    name.textContent = '[masukan nama]';
  }else{
    name.textContent = localStorage.getItem('nama')
  }
}

function getFocus() {
  if(localStorage.getItem("focus") == null){
    focus.textContent = '[apa kegiatan anda]';
  }else{
    focus.textContent = localStorage.getItem("focus");
  }
}


name.addEventListener("blur",setName)

focus.addEventListener("blur",setFocus)

setInterval(showTime,1000);
setBackground();
getFocus();
getName();