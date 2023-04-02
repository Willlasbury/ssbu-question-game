import { finalScore } from "../../game/js/script";

inputArray = ["first-initial", "middle-initial", "last-initial"];

finalScore = 45
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
  localStorage.setItem(`${initials}`, finalScore)
  return initials;
}

// display highscores

let list = document.querySelector('ul')
console.log("list:", list)

localStorage.getItem('initials')

