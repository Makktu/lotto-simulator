"use strict";

const resultsArea = document.querySelector(".results");

let fifties = 0;
let ones = 0;
let twentyFours = 0;
let randomNumber;
let numbersUp = [];
let alreadyPicked = false;
let bonusBall;
let bonusMatched = false;
let numbersMatching = 0; // this variable keeps track of how many 'myNumbers' match the simulated lotto draw numbers
let numbersPicked = []; // empty array to be filled with a simulated draw of 7 numbers (6x main numbers plus bonus ball)
let myNumbers = [10, 12, 16, 18, 22, 45]; // the starting myNumbers; the user will be able to change these

function getRandom(n) {
    // returns single instance of random number between 0 and n
    randomNumber = Math.random() * n + 1;
    randomNumber = Math.floor(randomNumber);
    if (randomNumber == 50) fifties++;
    if (randomNumber == 1) ones++;
    if (randomNumber == 24) twentyFours++;
    return randomNumber;
}

function sortNumbers(arr) {
    // sorts an array of numbers into ascending numerical order
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr;
}

function lottoDraw() {
    for (let j = 1; j < 8; j++) {
        randomNumber = getRandom(50);

        // ****************** check for duplicate drawing
        // ****************** and do this one over if so
        for (let q = 0; q < numbersPicked.length; q++) {
            if (randomNumber == numbersPicked[q]) {
                // console.log("dupe detected");
                getRandom(50);
            }
        }
        // ***********************************************

        numbersPicked.push(randomNumber);
    }
    bonusBall = numbersPicked[6]; // assign last number picked to be the bonus ball
    numbersPicked.pop(); // remove last number picked – bonus ball – from the 7 numbers
    numbersPicked = sortNumbers(numbersPicked);
    // console.log(numbersPicked, bonusBall);
    return numbersPicked, bonusBall;
}

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
    for (let w = 1; w < 1001; w++) {
        // resultsArea.textContent = w;
        numbersMatching = 0;
        numbersPicked = [];
        numbersMatching = 0;
        numbersUp = [];
        lottoDraw();
        checkNumbers(numbersPicked, myNumbers);
        if (numbersUp.length > 4 || (numbersUp.length > 5 && bonusMatched)) {
            alertUser(w, numbersMatching, numbersUp);
        }
    }
    console.log(ones, twentyFours, fifties);
}

function alertUser(w, numbersMatching, myNumbers) {
    console.log(
        `On attempt ${w} you matched ${numbersMatching} ${
            numbersMatching !== 1 ? "numbers" : "number"
        } in this draw. ${
            numbersUp.length > 0 ? "You matched " + numbersUp : ""
        }. ${
            bonusMatched
                ? "You matched the Bonus Ball which was " + bonusBall + "."
                : ""
        }`
    );
}

init();

// 1) check that 'myNumbers' exists.
// 2) make a Lotto draw; sort into numerical order.
// 3) check myNumbers against Lotto draw - counting matches (numerical) – and creating display; sort into numerical order.
