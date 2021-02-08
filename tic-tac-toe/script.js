let origBoard;
let yourScore = 0;
let AiScore = 0;
const hugPlayer = localStorage.getItem('player');
const AIPlayer = 'O';
let winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
 ];

const cells = document.querySelectorAll('.cell');
startGame();
function startGame() {
  document.querySelector('#play-btn').classList.add('hide');
  document.querySelector('.endGame').style.display = 'none';
  origBoard = Array.from(Array(9).keys());
  cells.forEach(cell => {
    cell.innerHTML = '';
    cell.style.removeProperty('background-color');
    cell.addEventListener('click',turnClick,false);
  });
}

function turnClick (square){
  if(typeof origBoard[square.target.dataset.cell] == 'number' ){
    turn(square.target.dataset.cell,hugPlayer);
    if(!checkTie()) turn(bestSpot(),AIPlayer);
  }
}
function turn(id,player){
  origBoard[id] = player;
  cells[id].innerText = player;
  let gameWon = checkWin(origBoard,player);
  if (gameWon) gameOver(gameWon);
}
function checkWin(board,player){
  let plays = board.reduce((a,e,i) => 
  (e === player) ? a.concat(i) : a,[]);
  let gameWon = null;
  for(let [index,win] of winCombos.entries())
    if(win.every(el => plays.indexOf(el) > -1)){
      gameWon = {index : index,player: player};
      break;
    }
  return gameWon;
}
function gameOver(gameWon){
  for(let index of winCombos[gameWon.index] ){
   cells[index].style.backgroundColor = gameWon.player == hugPlayer ? 'blue' : 'red'; 
  }
  cells.forEach(cell => {
    cell.removeEventListener('click',turnClick,false);
  });
  declareWinner(gameWon.player == hugPlayer ? 'kamu menang' : 'kamu kalah');
}

function declareWinner(who){
  if (who == 'kamu kalah') {
    yourScore = yourScore;
    AiScore++;
  } else if(who == 'kamu menang'){
    yourScore++;
    AiScore = AiScore;
  }else {
    yourScore = yourScore;
    AiScore = AiScore;
  }
  document.querySelector('.endGame').style.display='block';
  document.querySelector('.endGame .text').innerText = who;
  document.querySelector('#play-btn').classList.remove('hide');
  document.querySelector('#HuScore').innerText = yourScore;
  document.querySelector('#AiScore').innerText = AiScore;
  
}

function emptySquares(){
  return origBoard.filter(s => typeof  s == 'number');
}

function bestSpot(){
  return minimax(origBoard,AIPlayer).index;
}
function checkTie(){
  if (emptySquares().length == 0) {
    cells.forEach(cell => {
      cell.style.backgroundColor = 'green';
      cell.removeEventListener('click',turnClick,false);
    });
    declareWinner('seri');
    return true;
  }
  return false;
}

function minimax(newBoard, player) {
	let availSpots = emptySquares();
	if (checkWin(newBoard, hugPlayer)) {
		return {score: -10};
	} else if (checkWin(newBoard, AIPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	let moves = [];
	for (let i = 0; i < availSpots.length; i++) {
		let move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == AIPlayer) {
			let result = minimax(newBoard, hugPlayer);
			move.score = result.score;
		} else {
			let result = minimax(newBoard, AIPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	let bestMove;
	if(player === AIPlayer) {
		let bestScore = -10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		let bestScore = 10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}