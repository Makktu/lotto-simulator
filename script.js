"use strict";

let randomNumber;
let alreadyPicked = false;
let bonusBall;
let numbersMatching = 0; // this variable keeps track of how many 'myNumbers' match the simulated lotto draw numbers
let numbersPicked = []; // empty array to be filled with a simulated draw of 7 numbers (6x main numbers plus bonus ball)
let myNumbers = [7, 9, 12, 14, 15, 36]; // the starting myNumbers; the user will be able to change these

const sortNumbers = (arr) => {
    // sorts an array of numbers into numerical order
    arr.sort(function (a, b) {
        return a - b;
    });
};

const lottoDraw = () => {
    numbersPicked = [];
    for (let j = 1; j < 8; j++) {
        randomNumber = Math.random() * 50 + 1;
        randomNumber = Math.floor(randomNumber);
        for (let g = 0; g < numbersPicked.length; g++) {
            if (numbersPicked[g] == randomNumber) {
                alreadyPicked = true;
                break;
            }
        }
        if (!alreadyPicked) {
            numbersPicked.push(randomNumber);
        } else {
            console.log("dupe");
            alreadyPicked = false;
        }
    }
    bonusBall = numbersPicked[6]; // assign last number picked to be the bonus ball
    numbersPicked.pop(); // remove last number picked – bonus ball – from the 7 numbers
    return numbersPicked, bonusBall;
};

const checkNumbers = (numbersPicked, myNumbers) => {
    for (let k = 0; k < 6; k++) {
        for (let h = 0; h < 6; h++) {
            if (myNumbers[k] == numbersPicked[h]) {
                numbersMatching++;
                break;
            }
        }
    }
    return numbersMatching;
};

const init = () => {
    // for (let s = 0; s < 50; s++) {
    //     lottoDraw();
    //     console.log(checkNumbers(numbersPicked, myNumbers));
    // }
    for (let p = 0; p < 10; p++) {
        numbersMatching = 0;
        lottoDraw();
        console.log(numbersPicked, bonusBall);
        checkNumbers(numbersPicked, myNumbers);
        console.log(`You matched ${numbersMatching} for this draw`);
    }
};

init();

// 1) check that 'myNumbers' exists
// 2) make a Lotto draw; sort into numerical order
// 3) check myNumbers against Lotto draw - counting matches (numerical) – and creating display; sort into numerical order
