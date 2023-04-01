// grab variables from DOM for dynamic elements on page
// timer
let timeScoreH2 = document.querySelector("#timeScore");

// question
let question = document.querySelector("#question");
// start button
let startBtn = document.querySelector("#startBtn");

// answer spans
let aSpan = document.querySelector("#aSpan");
let bSpan = document.querySelector("#bSpan");
let cSpan = document.querySelector("#cSpan");
let dSpan = document.querySelector("#dSpan");

// define all questions and answers
class QuestionAnswer {
  constructor(question, potAnsersers, answer) {
    this.question = question;
    this.potAnsersers = potAnsersers;
    this.answer = answer;
  }
}
// start timer at top of screen
// create var for storing time
let timeOnClock = 10;
// give initial time before timer starts
timeScoreH2.textContent = `${timeOnClock} seconds left`;
// store time locally
function updateScore() {
  localStorage.setItem("timeScore", timeOnClock);
}

// time tracker
let scoreTimer = setInterval(function () {
  if (timeOnClock > 1) {
    timeOnClock--;
    timeScoreH2.textContent = `${timeOnClock} seconds left`;
    updateScore();
  } else if (timeOnClock === 1) {
    timeOnClock--;
    timeScoreH2.textContent = `${timeOnClock} second left`;
    updateScore();
  } else {
    // stop timer at zero
    clearInterval(scoreTimer);
    updateScore();
    // TODO: create lose conditions

    ("you lose");
  }
}, 100);

// TODO: create first instance of question and answer

// TODO: grab which answer the user clicked on
// TODO: if answer was correct
// TODO: display correct and do not subtract from time
// TODO: if answer was wrong display
// TODO: display wrong and subtract from time

// TODO: change question and answers to next option
// TODO: randomly select question and anser to display next
