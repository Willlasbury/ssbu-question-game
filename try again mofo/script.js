import { questionList } from "./questions.js";

// grab variables from DOM for dynamic elements on page
// timer
let timeScoreH2 = document.querySelector("#timeScore");

// question
let questionH3 = document.querySelector("#question");

// answer spans
let aSpan = document.querySelector("#aSpan");
let bSpan = document.querySelector("#bSpan");
let cSpan = document.querySelector("#cSpan");
let dSpan = document.querySelector("#dSpan");

// Grab answer list container
let answerUl = document.querySelector("ul");

let startBtn = document.querySelector("#startBtn");
// save which question was chosen to prevent repeats
let usedQuestions = [];

let questionAnswer = updateQuestion();

// start timer at top of screen
// create var for storing time
let timeOnClock = 100;

// give initial time before timer starts
// timeScoreH2.textContent = `${timeOnClock} seconds left`;

// store time locally
function updateDisplayScore(timeLeft) {
  localStorage.setItem("timeScore", timeLeft);
  timeScoreH2.textContent = `${timeLeft} second left`;
}

// time tracker
function startTime() {
  let scoreTimer = setInterval(function () {
    if (timeOnClock > 1) {
      timeOnClock--;
      timeScoreH2.textContent = `${timeOnClock} seconds left`;
      updateDisplayScore(timeOnClock);
    } else if (timeOnClock === 1) {
      timeOnClock--;
      timeScoreH2.textContent = `${timeOnClock} second left`;
      updateDisplayScore(timeOnClock);
    } else {
      // stop timer at zero
      clearInterval(scoreTimer);
      updateDisplayScore(timeOnClock);

      // TODO: create lose conditions
      // window.location = "../highscore/index.html"
    }
  }, 1000);
}

// TODO: change question and answers to next option
function updateQuestion() {
  // let questionAnswer = updateQuestion()
  // choose random question
  let questionSet =
    questionList[Math.floor(Math.random() * questionList.length)];
  usedQuestions.push(questionSet.question);
  if (usedQuestions.length === 5) {
    // window.location = '../highscore/index.html'
  } else if (usedQuestions.includes(questionSet.question)) {
    return updateQuestion();
  } else {
    questionH3.textContent = questionSet.question;
    aSpan.textContent = questionSet.potAnswers[0];
    bSpan.textContent = questionSet.potAnswers[1];
    cSpan.textContent = questionSet.potAnswers[2];
    dSpan.textContent = questionSet.potAnswers[3];
    usedQuestions.push(questionSet.question);
  }
  return questionSet;
}

// grab which answer the user clicked on
function choseAnswer() {
  answerUl.addEventListener("click", function (event) {
    let chosenAnswer = event.target.outerText;
    let correctAnswer = questionAnswer.correctAnswer;
    console.log("correct answer:", correctAnswer);
    if (chosenAnswer === correctAnswer) {
      timeOnClock += 3;
      updateDisplayScore(timeOnClock);
      questionAnswer = updateQuestion();
    } else if (timeOnClock <= 0) {
      // TODO: move on to some sort of screen
      updateDisplayScore("0");
    } else {
      timeOnClock -= 5;
      updateDisplayScore();
      questionAnswer = updateQuestion();
    }
  });
}

// score tracker
localStorage.setItem("score", timeOnClock);

function beginQuiz() {
  startBtn.remove();
}

console.log("test");