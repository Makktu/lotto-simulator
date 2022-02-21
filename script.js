import { sortNumbers } from "./sortNumbers.js";
import { getNewNumbers } from "./getNewNumbers.js";
import * as LottoDraw from "./lottoDraw.js";

const drawsArea = document.querySelector(".draws");

const resultsArea = document.querySelector(".results");
const newNumbersBtn = document.querySelector(".newBtn");
newNumbersBtn.addEventListener("click", () => {
    myNumbers = getNewNumbers(myNumbers);
});
const startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", () => {
    alert("start the draws!");
    init();
});

const customBtn = document.querySelector(".customBtn");
customBtn.addEventListener("click", () => {
    numberOfDraws = prompt(
        `Number of draws is currently set to ${numberOfDraws}. Enter a new number of draws`
    );
});
const yourNumbersArea = document.querySelector(".your-numbers");

let numbersUp = [];
let alreadyPicked = false;
let bonusBall;
let bonusMatched = false;
let numbersMatching = 0; // this variable keeps track of how many 'myNumbers' match the simulated lotto draw numbers

let myNumbers = [10, 12, 16, 18, 22, 45]; // the starting myNumbers; the user will be able to change these
let numberOfDraws = 8000;

function checkNumbers(numbersPicked, myNumbers) {
    if (bonusMatched == true) bonusMatched = false;
    for (let k = 0; k < 6; k++) {
        for (let h = 0; h < 6; h++) {
            if (myNumbers[k] == numbersPicked[h]) {
                numbersUp.push(myNumbers[k]);
                numbersMatching++;
                break;
            }
            if (myNumbers[k] == bonusBall) bonusMatched = true;
        }
    }
    sortNumbers(numbersUp);
    return numbersMatching;
}

function init() {
    yourNumbersArea.innerHTML = `Your numbers:<br> ${myNumbers}`;
    resultsArea.innerHTML = `Current setting is for ${numberOfDraws} Lotto draws. Click "Enter amount of draws" to change.<br><br>`;
    for (let w = 1; w < numberOfDraws; w++) {
        // resultsArea.textContent = w;
        numbersMatching = 0;
        LottoDraw.drawReset();
        numbersMatching = 0;
        numbersUp = [];
        LottoDraw.lottoDraw();
        checkNumbers(numbersPicked, myNumbers);
        if (numbersUp.length > 4 || (numbersUp.length == 5 && bonusMatched)) {
            alertUser(w, numbersMatching, numbersUp);
        }
    }
}

function alertUser(w, numbersMatching, myNumbers) {
    resultsArea.innerHTML += `Draw #${w}: you matched ${numbersMatching} ${
        numbersMatching !== 1 ? "numbers" : "number"
    } in this draw. ${numbersUp.length > 0 ? numbersUp : ""}. ${
        bonusMatched && numbersUp.length == 5
            ? "And the Bonus Ball:" + bonusBall + "."
            : ""
    }<br>`;

    if (bonusMatched) bonusMatched = false;
}

init();
