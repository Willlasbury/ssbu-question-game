// grab variables from DOM for dynamic elements on page
// timer
let timeScoreH2 = document.querySelector("#timeScore");

// question
let questionLi = document.querySelector("#question");

// answer boxes
let aLi = document.querySelector('#answerA')
let bLi = document.querySelector('#answerA')
let cLi = document.querySelector('#answerA')
let dLi = document.querySelector('#answerA')

// answer spans
let aSpan = document.querySelector("#aSpan");
let bSpan = document.querySelector("#bSpan");
let cSpan = document.querySelector("#cSpan");
let dSpan = document.querySelector("#dSpan");

// Grab answer list container
let answerUl = document.querySelector("ul")





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
  'this question?', ['up','right','left','down'], 'up'
)

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
  // grab my vars and populate with question
  question.textContent = questionAnswer1.question
  aSpan.textContent = questionAnswer1.potAnsersers[0]
  bSpan.textContent = questionAnswer1.potAnsersers[1]
  cSpan.textContent = questionAnswer1.potAnsersers[2]
  dSpan.textContent = questionAnswer1.potAnsersers[3]


// TODO: grab which answer the user clicked on
answerUl.addEventListener('click', function(event){
  chosenAnswer = event.target.outerText
  let correctAnswer = questionAnswer1.answer
  // console.log(event.target.outerText)
  if (chosenAnswer === correctAnswer){
    console.log('success')
  } else {
    console.log('wrong')
  }
  
})

// TODO: if answer was correct
// TODO: display correct and do not subtract from time
// TODO: if answer was wrong display
// TODO: display wrong and subtract from time

// TODO: change question and answers to next option
// TODO: randomly select question and anser to display next
