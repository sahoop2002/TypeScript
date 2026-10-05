"use strict";
// generics in ts
function identity(arg) {
    return arg;
}
let output1 = identity("Subscribe");
let output2 = identity(100);
//const a = identity("hello"); // typed as `any`, not `string`
// generic with arrays 
function getFirstElement(arr) {
    return arr[0];
}
let myNum = getFirstElement([1, 2, 3]);
let myName = getFirstElement(["pratip", "sahoo"]);
let stringNumberPair = {
    key: {
        name: "pratip",
        myKey: ""
    },
    value: 23
};
// generic classes 
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItems() {
        return this.data;
    }
}
const textStorage = new DataStorage();
textStorage.addItem("hello");
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("hello"); // fine — strings have .length
logLength([1, 2, 3]); // fine — arrays have .length
//logLength(42); // Error: number has no .length
