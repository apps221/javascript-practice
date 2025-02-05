function addition(num1, num2) {
    return (num1 + num2);
}
console.log(addition(3, 5));

function hoursIntoSeconds(hours) {
    return (hours * 60 * 60);
}
console.log(hoursIntoSeconds(2));

function calcPerimeter(length, width) {
    return (length * 2) + (width * 2);
}
console.log(calcPerimeter(6, 7));

function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}
console.log(calcTriangleArea(3, 2));

function appendFrontend(string1) {
    
return string1 + "frontend";
}
console.log(appendFrontend("Apple"));

function appendFrontendNumber(string) {
    return 4 + (+string);
}
console.log(appendFrontendNumber("1"));

function sumGreaterThan100(num1, num2) {
let sum = num1 + num2;
if (sum > 100) {
    return true;
}
else {
    return false;
}
}
console.log(sumGreaterThan100(20, 10));

function lessThan(num1) {
if (num1 <=0 ) {
    return true;
}
else {
    return false;
}
}
console.log(lessThan(3));

function oppositeBoolean(bool) {
    return !bool;
}
console.log(oppositeBoolean(false));

function isNotZero (element) {
    if (element !== 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNotZero(""));

function calcRemainder(num1, num2) {
    return num1 % num2;
}
console.log(calcRemainder(7, 8))

function isOdd (num1) {
    if (num1 % 2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isOdd(3))

function booleanInteger(num1) {
    if (num1 % 2 === 0) {
        return 1;
    }
    return -1;
}
console.log(booleanInteger(2))

function loggedInAndSubscribed (string1, string2) {
    if (string1 === "LOGGED_IN" && string2 === "SUBSCRIBED") {
        return true;
    }
    return false;
}
console.log(loggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
//function checks if value is truthy and returns num1 if it is
function filterOutTruthy (num1, num2) {
    if (!num1) { //checks if !num1 == true, because in order for if statement to run it has to be equal to true
        return num1;
    }
    else {
        return num2;
    }
}
//return length of array

function returnLength (arr) {
    return arr.length;
}
//get last element from array
function lastElement (arr) {
    return arr[arr.length-1];
}
//get sum of numbers of array 
function sumArr (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ) {
        sum = sum + arr[i];
    }
    return sum;
}
//return max element of array
function getMax (arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
    }
    else {
        return max;
    }
}
}
//turn all elements of array to 0s
function convertToZeros (arr) {
    let arrayZeros = [];
    for (let i = 0; i < arr.length; i++) {
        arrayZeros[i] = 0;
    }
    return arrayZeros;
}
convertToZeros([2, 3, 4])

//remove all apples from array
function removeApples (arr) {
    let noApples = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "Apple") {
            noApples.push(arr[i]); //adds element to end of noApples
        }
    }
    return noApples;
}
//returns all elements that are not apples
function removeApples2 (arr) {
    return arr.filter(elem => elem !== "Apple")
}
console.log(removeApples2(["Apple", "Orange", "Banana", "Apple"]))

function convertToBoolean (arr) {
    //return arr.map(elem => !!elem);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = !!arr[i];
    }
    return arr;
}
console.log(convertToBoolean([500, 0, "David"]))
//filter out all posts by single user using promises
async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json();
    const posts = result.filter(element => element.userId === userId)
  //  console.log(posts);
}
postsByUser(6);
//return the first 6 incomplete todos
async function firstSixIncomplete() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();
    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6);
    console.log(incompleteTasks);
}
firstSixIncomplete();