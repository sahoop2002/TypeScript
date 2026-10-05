"use strict";
// primitives
let username = "sahoo@2002";
let age = 23;
let isAdmin = true;
// ARRAYS
let numbers = [1, 2, 3, 4,];
let names = ["pratip", "sahoo"];
//TUPLES
let person = ["pratip", 23];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
let favouriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "pratip";
randomValue = true;
//unknown (better than any)
let userInput;
userInput = 5;
userInput = "text";
// void (for functions that don't eturn aything)
function subscribe(message) {
    console.log(message);
}
// null & undefined 
let nullValue = null;
let undefinedValue = undefined;
