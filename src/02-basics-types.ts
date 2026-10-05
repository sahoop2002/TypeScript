// primitives
let username : string ="sahoo@2002";
let age : number = 23;
let isAdmin: boolean = true;

// ARRAYS
let numbers: number[] = [1,2,3,4,];
let names: string[] = ["pratip","sahoo"];
 
//TUPLES
let person: [string, number] = ["pratip", 23];
 
//enum
enum Color{
    Red,
    Blue,
    Green,
    Yellow
}
let favouriteColor:Color = Color.Blue ;


// Any (avoid when possible)
 let randomValue : any = 10;
 randomValue = "pratip";
 randomValue = true;

 //unknown (better than any)
let userInput : unknown;
userInput = 5;
userInput = "text";

// void (for functions that don't eturn aything)
function subscribe(message : string):void{
     console.log(message )

}

 // null & undefined 
let nullValue : null = null;
let undefinedValue : undefined = undefined;




