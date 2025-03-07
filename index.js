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
// let ages = personArr.map(person => Number(person.age))
// console.log(ages)
// let names = personArr.map(person => (person.name))
// console.log(names)


// Sort the array by age.

function sortByAge(byAge) {
    let sortedAges = byAge.sort((a, b) => Number(a.age) - Number(b.age)); // turning the string numbers into int's and then using .sort() to put them in order.
    return sortedAges;
}

console.log(sortByAge(personArr))

// Filter the array to remove entries with an age greater than 50.

function removingOlderPeople(ageistWowOk) {

    return ageistWowOk.filter(person => Number(person.age) < 50) // converting the number string to an int to filter out any numbers 50 and above and returning those numbers under 50

}
console.log(removingOlderPeople(personArr))

//Map the array to change the “occupation” key to “job” and increment every age by 1.

function newKeyAndIncrement(change) {

    return change.map(person => {
        let { occupation, ...rest } = person // removes occupation 
        return {
            ...rest, // spreads all else 
            job: person.occupation, // changing the name of occupation to job
            age: Number(person.age) + 1 // incrementing the age by 1
        }
    })
}

//Rest in Objects

// { keyToRemove, ...rest } = obj Extracts keyToRemove, keeps everything else in rest

console.log(newKeyAndIncrement(personArr))

//Use the reduce method to calculate the sum of the ages. Then use the result to calculate the average age.

function averageAge(personAverageAge) {

    return personAverageAge.reduce((sum, person) => sum + Number(person.age), 0) / personAverageAge.length; // starting at 0 and adding the value of Number(person.age) till we reach the last age then divinding it by the length of personAverageAge.
}

console.log(averageAge(personArr))

// Part 3: Thinking Critically

// It is important to remember that when working with objects in JavaScript,
//  we can either pass those objects into functions by value or by reference. 
// This important distinction changes the way that functions behave, and can have large
//  impacts on the way a program executes.
// For this section, develop functions that accomplish the following:
// Take an object and increment its age field.
// Take an object, make a copy, and increment the age field of the copy.
//  Return the copy.
// For each of the functions above, if the object does not yet contain an age field, 
// create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field 
// that stores a Date object with the current time.
// Thought experiment: since the Date object is an object, what would happen if
//  we modified it in the copy of the object created in the second function using 
// setTime() or another method? How could we circumvent potentially undesired behavior?

let newObj = {
    name: "Jose",
    age: 31
}

function incrementAge(obj) {
    return obj.age += 1
}

console.log(incrementAge(newObj))

let missingAgeObj = {
    name: "John"
}

function addAge(person) {
    if (!person.age) {
        person.age = 0;
    }

        person.age += 1;
        person.updated_at = new Date(); // Update timestamp
    
    return;
}
addAge(missingAgeObj)

console.log(missingAgeObj)

let dog = {
    name: "Franky",
    breed: "Dachshund"
}

function copyAndAddAge(doggy) {
    let newDoggy = {
        ...doggy, // spreading the original 
        age: (doggy.age || 0) + 1, // checking if age exists if not makes age automatically 0 and then we increment by 1
        updated_at: new Date(doggy.updated_at ? doggy.updated_at.getTime() : Date.now()) 
    }
    return newDoggy;
}

console.log(copyAndAddAge(dog))

