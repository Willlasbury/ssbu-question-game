const questionList = [
  [
    "Who has fastest air acceleration in Super Smash Bro. Ultimate?",
    ["Jigglypuff", "Sonic", "Pichu", "Kirby"],
    "Jigglypuff",
  ],
  [
   "Who has highest short hop in Super Smash Bro. Ultimate?",
    ["Luigi", "Fox", "Min Min", "Greninja"],
    'Greninja',
  ],
  [
   "Who has the most moves in Super Smash Bro. Ultimate?",
    ["Pokemon Trainer", "Hero", "Kazuya", "Pyra and Mythra"],
    'Pokemon Trainer',
  ],
  [
   "Who is the lightest character in Super Smash Bro. Ultimate?",
    [ "Squirtle", "Jigglypuff", "Pichu", "Olimar"],
    'Pichu',
  ],
  [
   "Who is the heaviest character in Super Smash Bro. Ultimate?",
    ["King K. Rool", "Bowser", "Donkey Kong", "Ridley"],
    'Bowser',
  ],
  [
   "Who has the longest grab in Super Smash Bro. Ultimate?",
    ["Samus", "Min Min", "Olimar", "Young Link"],
    'Samus',
  ],
  [
   "Who's air dodge comes out the fastest in Super Smash Bro. Ultimate?",
    ["Fox", "Bayonetta", "Sheik", "Diddy Kong"],
    'Bayonetta',
  ],
  [
   "Who has the fastest walk speed in Super Smash Bro. Ultimate?",
    ["Lucina", "Kirby", "Pikachu", "Peach"],
    'Lucina',
  ],
  [
   "Who has the fastest air speed in Super Smash Bro. Ultimate?",
    ["Yoshi", "Mewtwo", "Captin Falcon", "Inkling"],
    'Yoshi',
  ],
  [
   "Who has the slowest run speed in Super Smash Bro. Ultimate?",
    ["Incineroar", "Simon", "Ganandorf", "Robin"],
    'Incineroar',
  ]
];

// grab variables from DOM for dynamic elements on page
// timer
let timeSpan = document.querySelector("#timeLeft");

// question
let questionH3 = document.querySelector("#question");

// answer spans
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");

// Grab answer list container
let answerUl = document.querySelector("ul");

let startBtn = document.querySelector("#startBtn");
// save which question was chosen to prevent repeats
let usedQuestions = [];

// let questionAnswer = updateQuestion();

// start timer at top of screen
// create var for storing time
let timeOnClock = 100;

// give initial time before timer starts
// timeScoreH2.textContent = `$[timeOnClock} seconds left`;

// update time locally
function updateDisplayScore(timeLeft) {
  localStorage.setItem("score", timeLeft);
  timeSpan.textContent = timeLeft;
}

// time tracker
function startTime(quizStart) {
  if (quizStart){
  let scoreTimer = setInterval(function () {
    if (timeOnClock > 1) {
      timeOnClock--;
      updateDisplayScore(timeOnClock);
    } else if (timeOnClock === 1) {
      timeOnClock--;
      updateDisplayScore(timeOnClock);
    } else {
      // stop timer at zero
      clearInterval(scoreTimer);
      updateDisplayScore(timeOnClock);
      quizStart = false

      // TODO: create lose conditions
      // window.location = "../highscore/index.html"
    }
  }, 1000);}
}

// change question and answers to next option
// choose random question
// console.log("questionList[0]:", questionList[0][1].length)
function chooseQuestion(){
  console.log("questionList.length:", questionList.length)
  let questionSet = questionList[Math.floor(Math.random() * questionList.length)];
  console.log("questionSet:", questionSet)
  usedQuestions.push(questionSet.question)
}

function updateQuestion(questionSet) {
  if (usedQuestions.includes(questionSet.question)) {
    // return updateQuestion();
  } else {
    questionH3.textContent = questionSet.question;
    aSpan.textContent = questionSet.potAnswers[0];
    bSpan.textContent = questionSet.potAnswers[1];
    cSpan.textContent = questionSet.potAnswers[2];
    dSpan.textContent = questionSet.potAnswers[3];
    usedQuestions.push(questionSet.question);
  }
  }


// grab which answer the user clicked on
function chooseAnswer(questionSet) {
  answerUl.addEventListener("click", function (event) {
    let chosenAnswer = event.target.outerText;
    let correctAnswer = questionSet.correctAnswer;
    if (chosenAnswer === correctAnswer) {
      timeOnClock += 3;
      updateDisplayScore(timeOnClock);
      questionSet = updateQuestion();
    } else if (timeOnClock <= 0) {
      // TODO: move on to some sort of screen
      updateDisplayScore("0");
    } else {
      timeOnClock -= 5;
      updateDisplayScore();
      questionSet = updateQuestion();
    }
  });
}

// score tracker
localStorage.setItem("score", timeOnClock);

// function beginQuiz() {
//   // remove the start button
//   startBtn.style.display = 'none';
  let quizStart = true

//   // populate main tag with quiz and timer
//   let quiz = document.querySelector('#quiz')
//   quiz.style.cssText = 'display: flex; flex-flow: column nowrap; justify-content: center; align-items: center;'

  
  let numQuestionsAsked = 0
  chooseAnswer(updateQuestion())
  startTime(quizStart)



// }

// console.log("test");

// startBtn.addEventListener('click', function(){beginQuiz()})
