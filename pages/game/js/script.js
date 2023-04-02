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

// save which question was chosen to prevent repeats
let usedQuestions = [];

let questionAnswer = updateQuestion();

// start timer at top of screen
// create var for storing time
let timeOnClock = 100;
// give initial time before timer starts
timeScoreH2.textContent = `${timeOnClock} seconds left`;
// store time locally
function updateDisplayScore(timeLeft) {
  localStorage.setItem("timeScore", timeLeft);
  timeScoreH2.textContent = `${timeLeft} second left`;
}

// time tracker
function scoreTracker(time) {
  let scoreTimer = setInterval(function () {
    if (time > 1) {
      time--;
      timeScoreH2.textContent = `${time} seconds left`;
      updateDisplayScore(time);
    } else if (time === 1) {
      time--;
      timeScoreH2.textContent = `${time} second left`;
      updateDisplayScore(time);
    } else {
      // stop timer at zero
      clearInterval(scoreTimer);
      updateDisplayScore(time);
      // TODO: create lose conditions

      ("you lose");
    }
  }, 1000);
}

// TODO: create first instance of question and answer
// grab my vars and populate with question
// questionH3.textContent = questionAnswer1.question;
// aSpan.textContent = questionAnswer1.potAnsersers[0];
// bSpan.textContent = questionAnswer1.potAnsersers[1];
// cSpan.textContent = questionAnswer1.potAnsersers[2];
// dSpan.textContent = questionAnswer1.potAnsersers[3];

// score tracker
localStorage.setItem("score", timeOnClock);

// grab which answer the user clicked on

answerUl.addEventListener("click", function (event) {
  let chosenAnswer = event.target.outerText;
  let correctAnswer = questionAnswer.correctAnswer;
  console.log("correct answer:", correctAnswer);
  if (chosenAnswer === correctAnswer) {
    timeOnClock += 3;
    updateDisplayScore();
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

// TODO: change question and answers to next option
function updateQuestion() {
  // choose random question
  let questionSet =
    questionList[Math.floor(Math.random() * questionList.length)];
  if (usedQuestions.length === questionList.length) {
    // TODO: exit quiz
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


// TODO: randomly select question and anser to display next

scoreTracker(timeOnClock);
