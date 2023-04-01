import { questionList } from "./questions.js";

// grab variables from DOM for dynamic elements on page
// timer
let timeScoreH2 = document.querySelector("#timeScore");

// question
let questionH3 = document.querySelector("#question");

// answer boxes
let aLi = document.querySelector("#answerA");
let bLi = document.querySelector("#answerA");
let cLi = document.querySelector("#answerA");
let dLi = document.querySelector("#answerA");

// answer spans
let aSpan = document.querySelector("#aSpan");
let bSpan = document.querySelector("#bSpan");
let cSpan = document.querySelector("#cSpan");
let dSpan = document.querySelector("#dSpan");

// Grab answer list container
let answerUl = document.querySelector("ul");

// define all questions and answers
class QuestionAnswer {
  constructor(question, potAnsersers, answer) {
    this.question = question;
    this.potAnsersers = potAnsersers;
    this.answer = answer;
  }
}
// place holder for question
let questionAnswer1 = new QuestionAnswer(
  "this hello?",
  ["up", "right", "left", "down"],
  "up"
);

// start timer at top of screen
// create var for storing time
let timeOnClock = 100;
// give initial time before timer starts
timeScoreH2.textContent = `${timeOnClock} seconds left`;
// store time locally
function updateDisplayScore() {
  localStorage.setItem("timeScore", timeOnClock);
  timeScoreH2.textContent = `${timeOnClock} second left`;
}

// time tracker
let scoreTimer = setInterval(function () {
  if (timeOnClock > 1) {
    timeOnClock--;
    // timeScoreH2.textContent = `${timeOnClock} seconds left`;
    updateDisplayScore();
  } else if (timeOnClock === 1) {
    timeOnClock--;
    timeScoreH2.textContent = `${timeOnClock} second left`;
    updateDisplayScore();
  } else {
    // stop timer at zero
    clearInterval(scoreTimer);
    updateDisplayScore();
    // TODO: create lose conditions

    ("you lose");
  }
}, 1000);

// TODO: create first instance of question and answer
// grab my vars and populate with question
questionH3.textContent = questionAnswer1.question;
aSpan.textContent = questionAnswer1.potAnsersers[0];
bSpan.textContent = questionAnswer1.potAnsersers[1];
cSpan.textContent = questionAnswer1.potAnsersers[2];
dSpan.textContent = questionAnswer1.potAnsersers[3];

// score tracker
localStorage.setItem("score", timeOnClock);

//grab which answer the user clicked on
answerUl.addEventListener("click", function (event) {
  chosenAnswer = event.target.outerText;
  let correctAnswer = questionAnswer1.answer;
  if (chosenAnswer === correctAnswer) {
    timeOnClock += 3;
    updateDisplayScore();
  } else {
    timeOnClock -= 5;
    updateDisplayScore();
  }
});

// TODO: change question and answers to next option
function updateQuestion(questionAnswer) {

  
}

// TODO: randomly select question and anser to display next



console.log(questionList[0].correctAnswer)