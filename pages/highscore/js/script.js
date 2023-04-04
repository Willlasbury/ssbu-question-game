// get score list
let highScoreUl = document.querySelector("#highScore");

// search local memory for any previous scores
function getUserScore() {
  let highScores = localStorage.getItem("previousScores").split(",");
  displayScores(findScoresToDisplay(highScores));
}

// takes an array and sorts out the top five scores
function findScoresToDisplay(array) {
  let scoresToDisplay = [];
  let checkArray = [0, 0, 0, 0, 0];

  // sort the arrays by every four entries (3 leters for the initials
  // and 1 number for the score)
  for (let i = 0; i < array.length; i = i + 4) {
    let group = array.slice(i, i + 4);
    let checkScore = group[3];
    Number(checkScore);

    // check the value of a group and see if it will be added to the display
    // scores
    if (checkScore >= checkArray[0]) {
      checkArray[4] = group[3];
      checkArray.sort().reverse().slice(0, 6);
      scoresToDisplay = scoresToDisplay.concat([group]);

      scoresToDisplay
        .sort(function (a, b) {
          return a[3] - b[3];
        })
        .reverse();
      scoresToDisplay = scoresToDisplay.slice(0, 5);
    }

    flatScores = scoresToDisplay.flat();
    console.log("flatScores:", flatScores);
  }
  return flatScores;
}

// displays scores to the high scores section
function displayScores(array) {
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

// pull value from input field to get initials
function getVal(selector) {
  var input = document.querySelector(`#${selector}`).value;
  return input;
}

// log the initials and the score into local memory
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
    let highScores = previousScores.concat(initials, scores);
    JSON.stringify(highScores);
    localStorage.setItem("previousScores", highScores);
  }
  getUserScore();
}

// immediatly display any score/s in memory
getUserScore();
// let highScores = localStorage.getItem("previousScores").split(",");
// displayScores(findScoresToDisplay(highScores));
