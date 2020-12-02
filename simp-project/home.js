const clock = document.getElementById('clock'),
name =  document.getElementById('name'),
greeting =  document.getElementById('greeting'),
container = document.querySelector('.container');

function getTime(){
  const today = new Date(),
  hour = today.getHours(),
  minutes = today.getMinutes(),
  seconds = today.getSeconds();
  
  return [hour, minutes,seconds]
}


let showTime = () => {
  let [h,m,s] = getTime();
  let amPm = h >= 12 ? 'pm' : 'am';
  clock.innerHTML = `${h} <span>:</span> ${addZero(m)} <span>:</span> ${addZero(s)}`;
};

function addZero(n){
  return (parseInt(n) < 10 ? '0' : '') + n;
}



function setBackgroun(){
  let [h,m,s] = getTime();
  if(h < 12){
    greeting.innerHTML = 'morning';
    container.style.background = 'url(picts/pagi/1.jpg)';
    container.style.backgroundSize = "cover";
  }else if(h < 18){
    greeting.innerHTML = 'afternoon';
    container.style.background = 'url(picts/sore/1.jpg)';
    container.style.backgroundSize = "cover";
  }else{
    container.style.background = "url('picts/malam/1.jpg')";
    container.style.backgroundSize = "cover";
    greeting.innerHTML = 'night';
  }
}

setBackgroun()
setInterval(showTime,1000);