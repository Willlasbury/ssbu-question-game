// get score list
let highScoreUl = document.querySelector("#highScore");

function getUserScore() {
  let highScores = localStorage.getItem("previousScores").split(",");
  let userInit = highScores.slice(0, 3).join("").toUpperCase();
  let userScore = highScores[3];
  displayScores(userInit, userScore);
}

function displayScores(user, score) {
  let newLi = document.createElement("li");
  newLi.textContent = `${user}:  ${score}`;
  highScoreUl.appendChild(newLi);
}

let inputArray = ["first-initial", "middle-initial", "last-initial"];

let score = localStorage.getItem("timeScore");

// pull value from input field
function getVal(selector) {
  var input = document.querySelector(`#${selector}`).value;
  // console.log("input:", input)
  return input;
}

// let submit button query all values in input fields
function logInitials() {
  let scores = localStorage.getItem("timeScore");
  let initials = [];
  for (let i = 0; i < inputArray.length; i++) {
    initials.push(getVal(inputArray[i]));
  }
  if (!localStorage.getItem("previousScores")) {
    JSON.stringify(initials, score);
    localStorage.setItem("previousScores", `${initials},${score}`);
  } else {
    console.log("test");
    getUserScore();
    let previousScores = localStorage.getItem("previousScores").split(",");
    highScores = previousScores.concat(initials, scores);
    console.log("highscores2:", highScores);
    JSON.stringify(highScores);
    // localStorage.setItem('previousScores', highScores)
    localStorage.setItem("previousScores", highScores);
  }
  // return initials;
}

// display highscores

let list = document.querySelector("ul");

// logInitials()
// console.log("initials:", initials)
