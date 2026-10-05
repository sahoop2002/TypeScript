// Type alias
type point = {
     x : number ;
     y : number ;
}

let point : point = { x: 10, y: 20 }

// type alias for primitives
type ID =  string | number ;

let userId : ID = "pratip123";
let productId : ID = 555;

// type alias vs Interface
// * interfaces can be extended but type aliases can not
interface Animal {
    name : string ;

}
interface Dog extends Animal {
    name : "Buddy";
    bred : "Golden Retriever";

}
// * Interfaces can be declared multiple times and will merge 
interface Animal {
    name : string ;

}
interface Animal {
    age : number ;

}
let dog : Animal = {
    age : 3,
    name : "Buddy"
}
// use interfaces for object shapes,
// type aliases for unions / intersections
interface User {
    name : string ;
    age : number ;

}
type UserID = string | number ;
