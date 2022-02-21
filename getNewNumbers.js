import { sortNumbers } from "./sortNumbers.js";

export function getNewNumbers(myNumbers) {
    alert(
        "You will be asked for 6 numbers, one after the other. Enter them ONE at a time. Press OK to start."
    );
    let thisNum;
    let changedNums = [];
    for (let d = 0; d < 6; d++) {
        thisNum = prompt(`Enter number ${d + 1}`);
        if (thisNum < 1 || thisNum > 50) {
            alert(
                "Illegal entry. Numbers must be between 1 and 50 inclusive. Your numbers have not been changed."
            );
            return;
        }
        changedNums.push(thisNum);
    }
    sortNumbers(changedNums);
    let confirm = prompt(
        `Your numbers have not yet been changed. Press OK to confirm that you wish to change them to ${changedNums}; CANCEL will cancel this change`
    );
    if (confirm == "y" || confirm == "Y") {
        alert(`Your numbers have been changed to ${changedNums}`);
        myNumbers = changedNums;
        return myNumbers;
    }
}
