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

let arrOfNums = [32, 43, 67, 35, 23, 12, 43, 72, 6, 256, 512]
let arrayOfStrings = ["random","array","of","strings","haha"]

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
