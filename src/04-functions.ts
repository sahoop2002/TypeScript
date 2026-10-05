//basic functions with types
function add (a:number, b:number):number{
    return a+b
}

// optional parameter
function greet (name : string, greeting? : string) : string {
    if (greeting) {
        return `${greeting}, ${name}!`
    }
    return `Hello, ${name}! `
}

// default parameter
function multiply (a: number, b: number = 1  ): number{
    return a * b;
}

//rest parameter 
function sum (...numbers: number[]): number{
    return numbers.reduce((total,n) => total + n, 0)
}

//arrow function 
const divide = (a:number, b:number): number => a/b;

// function type 
let calculate : (x: number, y: number) => number ;



    
