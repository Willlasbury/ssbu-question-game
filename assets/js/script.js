// grab variables from DOM for dynamic elements on page
    // timer
    let timerSpan = document.querySelector('#timerSpan');
    
    // question
    let question = document.querySelector('#question');
    // start button
    let startBtn = document.querySelector('#startBtn');

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


// create variables to reference DOM elements
//      timer
//      questions
//      answers
//      start button
//      name/initials
//      save button
//      high scores container

// function
//      start quiz
//          hide start button
//          show the quiz container
//          display first question
//          start timer
//          display countdown on screen

// function
//      rendering a question
//          clear/remove previous question
//          getting first question
//          add question to the question container
//          make button for each answer
//          add answers to the answers container

// function
//      handle quiz completion
//          stop timer
//          hide quiz container
//          show end screen
//          show time remaining as score

// function
//      handle answer clicks
//
//      if
//      answer is WRONG
//          subtract time from timer
//          make sure time is displayed correctly on page
//          flash wrong answer message (setTimeout)
//
//      update question variable to next question
//      display question on page
//
//      if
//      question is the last question
//      trigger quiz completion

// function
//      tracking time
//          subtract time
//          update the page
//
//      if
//      timer hits zero
//          trigger quiz completion

// function
//      saving high scores
//          get value of user input (name/initals)
//          validate input
//          retreive existing data from local storage
//          update the high score data
//          save updated data back to local storage
//          redirect to start screen after save

// function
//      listening for key press
//          check if the key pressed was 'Enter' for saving scores
//          OPTIONAL check if the key pressed was 'a', 'b', 'c' for answers

// event listeners
//      click start
//      click answers
//      click save score
//      keyups
