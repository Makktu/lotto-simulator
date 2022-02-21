let randomNumber;
let numbersPicked = []; // empty array to be filled with a simulated draw of 7 numbers (6x main numbers plus bonus ball)

export function lottoDraw() {
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

function getRandom(n) {
    // returns single instance of random number between 0 and n
    randomNumber = Math.random() * n + 1;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

export function drawReset() {
    numbersPicked = [];
}
