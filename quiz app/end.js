const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore")
let mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerHTML = mostRecentScore


let highScore = localStorage.setItem('highScore',JSON.stringify([])) || []
const MAX_HIGHTSCORE = 5;

username.addEventListener("keyup",() => {
  saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {
  console.log('clicked the save button')
  e.preventDefault()
  
  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  }
 // memasukan objek exore kedalam array highScore
  highScore.push(score)
  // kengurutkan angka dari yang terkecil sampai yang terbesar
  highScore.sort((a,b) => a.score - b.score)
  // hanya mengambil 5 array terakhir
  highScore.splice(5)
  localStorage.setItem("highScore",JSON.stringify(highScore))
}

