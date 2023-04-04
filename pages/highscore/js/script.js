// get score list
let highScoreUl = document.querySelector("#highScore");

function getUserScore() {
  let highScores = localStorage.getItem("previousScores").split(",");
  // let userInit = highScores.slice(0, 3).join("").toUpperCase();
  // let userScore = highScores[3];
  displayScores(highScores);
}

let scoresToDisplay = [];
let checkArray = [0, 0, 0, 0, 0];
function findScoresToDisplay(array) {
  for (let i = 0; i < array.length; i = i + 4) {

    let group = array.slice(i, i + 4);
    let checkScore = group[3];
    Number(checkScore);

    if (checkScore >= checkArray[0]) {
      checkArray[4] = group[3];
      checkArray.sort().reverse().slice(0, 6);
      scoresToDisplay = scoresToDisplay.concat([group]);

      scoresToDisplay
        .sort(function (a, b) {
          return a[3] - b[3];
        })
        .reverse();
      // console.log("scoreToDisplay:", scoresToDisplay)
      // scoresToDisplay.sort();
      // console.log("checkArray:", checkArray)
      scoresToDisplay = scoresToDisplay.slice(0, 5);
    }

    flatScores = scoresToDisplay.flat();
    console.log("flatScores:", flatScores)
  }
  return flatScores;
}

function displayScores(array) {
  console.log("array:", array)
  for (let i = 0; i < array.length; i = i + 4) {
    let anotherGroup = array.slice(i, i + 4);
    let userInit = anotherGroup.slice(0, 3).join("").toUpperCase();
    let userScore = anotherGroup[3];
    let newLi = document.createElement("li");
    newLi.textContent = `${userInit}: ${userScore}`;
    highScoreUl.appendChild(newLi);
  }
}

let inputArray = ["first-initial", "middle-initial", "last-initial"];

let score = localStorage.getItem("timeScore");

// pull value from input field
function getVal(selector) {
  var input = document.querySelector(`#${selector}`).value;
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
    JSON.stringify(highScores);
    localStorage.setItem("previousScores", highScores);
  }
  getUserScore();
}

let highScores = localStorage.getItem("previousScores").split(",");
displayScores(findScoresToDisplay(highScores));