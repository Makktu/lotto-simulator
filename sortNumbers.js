export function sortNumbers(arr) {
    // sorts an array of numbers into ascending numerical order
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr;
}
