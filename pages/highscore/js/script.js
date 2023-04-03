// get score list
let highScoreUl = document.querySelector("#highScore")
function getScores() {
  let highScores = localStorage.getItem('previousScore').split(",")
  let userInit = highScores.slice(0,3).join("").toUpperCase()
  let userScore = highScores[3]
  let newLi = document.createElement("li")
  newLi.textContent = `${userInit}:  ${userScore}`  
  highScoreUl.appendChild(newLi)
}

let inputArray = ["first-initial", "middle-initial", "last-initial"];

let score = localStorage.getItem('timeScore')

// pull value from input field
function getVal(selector) {
  var input = document.querySelector(`#${selector}`).value;
  // console.log("input:", input)
  return input;
}

// let submit button query all values in input fields
function logInitials() {
  let initials = [];
  for (let i = 0; i < inputArray.length; i++) {
    initials.push(getVal(inputArray[i]));
  }
  JSON.stringify(initials, score)
  localStorage.setItem('previousScore',`${initials},${score}`)
  return initials;
}

// display highscores

let list = document.querySelector('ul')

localStorage.getItem('initials')

getScores()

