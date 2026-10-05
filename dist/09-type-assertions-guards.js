"use strict";
// type assertions 
const someValue = "subscribe to roadsidecoder";
const strLength = someValue.length;
// Or 
let strLength2 = someValue.length;
// type guards
function processValue(value) {
    if (typeof value == "string") {
        console.log(value.toLocaleUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// instanceof type guard
class Dog {
    bark() {
        console.log("woof!");
    }
}
class Cat {
    meow() {
        console.log("meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
