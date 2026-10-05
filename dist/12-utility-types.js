"use strict";
// let pages : Merged = {
//     home : {title: "Home", url: "/"},
//     about : {title: "About", url: "/about"}
//     contract : {title: "Contract", url: "/contract"}
//}
// { home: PageInfo; about: PageInfo; contact: PageInfo }
// ReturnType<T> — extracts a function's return type without repeating it manually:
function createUser() {
    return {
        id: 1,
        name: "Alice",
        email: "alice@example.com"
    };
}
