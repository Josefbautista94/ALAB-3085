//Part 1: Thinking Functionally

// While there is rarely a “correct” answer in programming, it is important to keep 
// your audience (other programmers) in mind.
//  Write functions with descriptive names, and clear inputs and outputs.
// With that in mind, write functions that accomplish the following:
// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the 
// strings that are longer than the given number. 
// For example, 
// stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number 
// between 1 and n without using loops. Use recursion.

let arrOfNums = [32, 43, 67, 35, 23, 12, 43, 72, 6, 256, 512];
let arrayOfStrings = ["random", "array", "of", "strings", "haha", "French Bulldogs", "pizza", "Hennesy Wings"];
let arrOfStrings2 = ['say', 'hello', 'in', 'the', 'morning']
// Take an array of numbers and return the sum.
function sumOfNumbers(numArr) {

    let sum = 0;
    for (let nums of numArr) {
        sum += nums
    }

    return sum;
}

console.log(`This is the sum of the numbers in the array: ${sumOfNumbers(arrOfNums)}`)

// Take an array of numbers and return the average.
function averageOfNumbers(numArr) {
    let sum = 0;
    for (let nums of numArr) {
        sum += nums
    }
    return sum / numArr.length;
}

console.log(`This is the average of the numbers in the array: ${averageOfNumbers(arrOfNums)}`)

// Take an array of strings and return the longest string.
function returnLongestString(stringArr) {
    let longestString = "" // storing current longest string
    for (let i = 0; i < stringArr.length; i++) { //travesring throught the array
        if (stringArr[i].length > longestString.length) { // checking if the string in the current index is longer than the string we stored, or if none stored it automatically becomes the longest string
            longestString = stringArr[i]; //updating the current longest string if the if statement is truuu
        }
    }
    return longestString; // doesnt check if there are two longest string with the same length so its going to return the first longest string
}

console.log(`This is the longest string in the array: ${returnLongestString(arrayOfStrings)}`)

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(stringArr,num){
    let newArr = []

    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i].length > num){
            newArr.push(stringArr[i])
        }
    }
    return newArr;

}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));