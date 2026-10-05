"use strict";
//basic functions with types
function add(a, b) {
    return a + b;
}
// optional parameter
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}! `;
}
// default parameter
function multiply(a, b = 1) {
    return a * b;
}
//rest parameter 
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
//arrow function 
const divide = (a, b) => a / b;
// function type 
let calculate;
