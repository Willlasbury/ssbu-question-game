// get score list
let highScoreUl = document.querySelector("#highScore");

function getUserScore() {
  console.log("test")
  let highScores = localStorage.getItem("previousScores").split(",");
  // let userInit = highScores.slice(0, 3).join("").toUpperCase();
  // let userScore = highScores[3];
  console.log("highScores:", highScores)
  displayScores(highScores);
}

function displayScores(array) {
  let newLi = document.createElement("li");
  for (let i = 0; i < array.length; i=i+4) {
    console.log("test")
    let group = array.slice(i,i+4)
    let userInit = group.slice(0, 3).join("").toUpperCase();
    let userScore = highScores[3];
    newLi.textContent = `${userInit}: ${userScore}`;
    highScoreUl.appendChild(newLi);
    console.log("group:", group)
  }
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
    let previousScores = localStorage.getItem("previousScores").split(",");
    highScores = previousScores.concat(initials, scores);
    console.log("highscores2:", highScores);
    JSON.stringify(highScores);
    localStorage.setItem("previousScores", highScores);
  }
  getUserScore()
}
