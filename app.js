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