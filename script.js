"use strict";

let randomNumber;
let numbersMatching = 0;
let numbersPicked = [];
let myNumbers = [7, 9, 12, 14, 15, 36];

const lottoDraw = function () {
    for (let j = 1; j < 7; j++) {
        randomNumber = Math.random() * 50 + 1;
        randomNumber = Math.floor(randomNumber);
        numbersPicked.push(randomNumber);
    }
    return numbersPicked;
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

for (let s = 0; s < 50; s++) {
    lottoDraw();
    console.log(checkNumbers(numbersPicked, myNumbers));
}
