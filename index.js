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
        if (stringArr[i].length > longestString.length) { // checking if the string in the current index is longer than the string we stored, or if none it's stored automatically and becomes the longest string.
            longestString = stringArr[i]; //updating the current longest string if the if statement is truuu
        }
    }
    return longestString; // doesnt check if there are two longest string with the same length so its going to return the first longest string
}

console.log(`This is the longest string in the array: ${returnLongestString(arrayOfStrings)}`)

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(stringArr, num) {
    let newArr = []

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > num) {
            newArr.push(stringArr[i])
        }
    }
    return newArr;

}

console.log(stringsLongerThan(arrOfStrings2, 3));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

//I needed help for this part so here are my resources because I didn't quite understand in the beggining!
/*
 * Function to print numbers from 'start' to 'end' using recursion.
 * Adapted from: "JavaScript Program to Print 1 to N using Recursion"
 * Author: GeeksforGeeks
 * URL: https://www.geeksforgeeks.org/javascript-program-to-print-1-to-n-using-recursion/
 * Retrieved on: 03/06/2025
 */

let recursionNumber = 30;

function recursion(num, n) { // num is the number where start, and current number being printed and n is the end goal

    if (num > n) { // checking if the current number goes over the end goal if it does the if statement stops by returning
        return;
    }
    console.log(num) // we're printing where we currently are at
    recursion(num + 1, n); // recursion takes place here, we're adding 1 to num till the if statement becomes true, if num becomes 31 terminates the function.
}

console.log(recursion(1, recursionNumber))

// Part 2: Thinking Methodically

let personArr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
//learning how to use map real quck

//using map to find the ages and converting them to numbers
let ages = personArr.map(person => Number(person.age))
console.log(ages)
let names = personArr.map(person => (person.name))
console.log(names)


// Sort the array by age.

function sortByAge(byAge) {
    let sortedAges = byAge.sort((a, b) => Number(a.age) - Number(b.age)); // turning the string numbers into int's and then using .sort() to put them in order.
    return sortedAges;
}

console.log(sortByAge(personArr))
