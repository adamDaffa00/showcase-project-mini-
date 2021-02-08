
const questionEl = document.getElementById("question")
const choices = document.querySelectorAll(".choise-text")
let progressText = document.getElementById('progressText')
const scoreEl = document.getElementById("score")
const gameContainer = document.querySelector("#game")
const loader = document.querySelector("#loader")
const progressBarFull = document.getElementById("progressBarFull")
// object yang nantinya berisi satu soal
let currentQuestion = {}

let acceptingAnswer = false;
let score = 0;
// variable counter untuk mendefinisikan urutan atau index soal
let questionCounter = 0;
let availableQuestion = []


let questions = [];

fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map(loadedQuestion => {
          let formatedQuestion = {
            question : loadedQuestion.question
          };
          let answerChoices = [...loadedQuestion.incorrect_answers];
                  
          formatedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        
          answerChoices.splice(formatedQuestion.answer - 1,0,loadedQuestion.correct_answer);
          answerChoices.forEach((choice,index) => {
            formatedQuestion["choice" + (index + 1)] = choice;
          });
          
          return formatedQuestion;
        });
        startGame(); 
    })
    .catch((err) => {
        console.log(err);
    });


// constant variable

const CORRECT_BONUS = 10;
// maksimal jumlah soal
const MAX_QUESTION = 3;




// fungsi untuk memulai game
startGame = () => {
  
  // nilai awal diisi 0
  questionCounter = 0;
  // scrol diisi 0
  score = 0;
  // array soal
  availableQuestion = [...questions];
  // memanggil fungsi getNewQuestion untuk mengupdate soal baru
  getNewQuestion();
  gameContainer.classList.remove("hidden");
  loader.classList.add("hidden");
 };

// fungsi untuk mendapatkan soal baru
getNewQuestion = () => {
  localStorage.setItem("mostRecentScore",score);
  // cek apakah soal bekum tersedia atau soal sudah dijawab semua
  if (availableQuestion.length === 0 || questionCounter >= MAX_QUESTION) {
    // mendirect ke halaman end html
    return window.location.assign("end.html")
  }

  // setiap fungsi getNewQuestion dipanggil maka counter ditambah 1, supaya index soalhya bertambah dan menuju soal berikut nya.
  questionCounter++
  progressText.innerHTML = `question ${questionCounter}/${MAX_QUESTION}`
  
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTION) * 100}%`

   // variable angka random digunakan untuk mengacaj index soal
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  
  // variabel objek ini berisi soal yang sekarang sedang dikerjakan
  currentQuestion = availableQuestion[questionIndex];
  
  // soal tersebut ditampilkan dalam tag HTML
  questionEl.innerHTML = currentQuestion.question;
  
 // menampilkan data pilihan Jawaban ke element html
  choices.forEach(choice => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion["choice" + number];
  });
  // menghapus soal dengan index saat in dari array
 availableQuestion.splice(questionIndex,1);
  // variabel acceptingAnswer diisi dengan true untuk menandakan soal yang sudah terjawab suapay daoat berpindah soal
 acceptingAnswer = true;
};

// listener tombol pilihan jawaban
choices.forEach(choice => {
  choice.addEventListener("click",(e) => {
    
   if (!acceptingAnswer) return
   acceptingAnswer = false
   const selectChoice = e.target.dataset.number;
   const classToApply = (selectChoice == currentQuestion.answer) ? 'correct' : 'incorrect'
  if (classToApply == "correct") {
    itterationScore(10)
  }
   e.target.parentElement.classList.add(classToApply)
  
   setTimeout(() => {
     e.target.parentElement.classList.remove(classToApply)
      getNewQuestion();
   }, 1000);
   
  });
});

itterationScore = (num) => {
  score += num;
  scoreEl.innerHTML = score
}
