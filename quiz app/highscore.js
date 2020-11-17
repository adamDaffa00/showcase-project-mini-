const highScoreEl = document.getElementById("highScoreList")
let highscore = JSON.parse(localStorage.getItem('highScore'))
console.log(highscore)
highScoreEl.innerHTML = highscore.map(username => `<li class="high-score"> ${username.name} - ${username.score} </li>`).join("")