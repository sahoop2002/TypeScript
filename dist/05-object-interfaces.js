"use strict";
//object type annotation
let user = {
    name: "pratip",
    age: 23
};
let user1 = {
    name: "pratip",
    age: 23,
    //email : "sahoopratip@gmail.com"
    id: 10
};
let laptop = {
    name: "Macbook",
    price: 200000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    }
};
