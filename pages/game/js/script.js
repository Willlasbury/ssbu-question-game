// get questions from local memory
questionList = JSON.parse(localStorage.getItem("questionList"));

// grab variables from DOM for dynamic elements on page
let timeScoreH2 = document.querySelector("#timeScore");
let questionH3 = document.querySelector("#question");
let answerUl = document.querySelector("ul");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");

// save which question was chosen to prevent repeats
let usedQuestions = [];
let questionsAsked = 0;
let questionAnswer = updateQuestion();

// start timer at top of screen
// create var for storing time
let timeOnClock = 99;

// give initial time before timer starts
timeScoreH2.textContent = `${timeOnClock} seconds left`;

// store time locally
function updateDisplayScore(timeLeft) {
  // console.log("timeLeft:", timeLeft)
  localStorage.setItem("timeScore", timeLeft);
  timeScoreH2.textContent = `${timeLeft} second left`;
}

// time tracker
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
    window.location = "../highscore/index.html";
  }
}, 1000);

// change question and answers to next option
function updateQuestion() {
  console.log("questionsAsked:", questionsAsked);
  // choose random question
  let questionSet =
    questionList[Math.floor(Math.random() * questionList.length)];
  console.log("questionSet.question:", questionSet.question);
  if (questionsAsked === 5) {
    questionAsked = 0;
    window.location = "../highscore/index.html";
  }
  if (usedQuestions.includes(questionSet.question)) {
    return updateQuestion();
  } else {
    questionsAsked++;
    usedQuestions.push(questionSet.question);
    questionH3.textContent = questionSet.question;
    answerA.textContent = questionSet.potAnswers[0];
    answerB.textContent = questionSet.potAnswers[1];
    answerC.textContent = questionSet.potAnswers[2];
    answerD.textContent = questionSet.potAnswers[3];
    usedQuestions.push(questionSet.question);
  }
  return questionSet;
}

// grab which answer the user clicked on
answerUl.addEventListener("click", function (event) {
  let chosenAnswer = event.target.outerText;
  let correctAnswer = questionAnswer.correctAnswer;
  // console.log('correct answer:', correctAnswer)
  if (chosenAnswer === correctAnswer) {
    // timeOnClock += 3;
    updateDisplayScore(timeOnClock);
    questionAnswer = updateQuestion();
  } else if (timeOnClock <= 0) {
    window.location = "../highscore/index.html";
  } else {
    timeOnClock -= 5;
    updateDisplayScore(timeOnClock);
    questionAnswer = updateQuestion();
  }
});
