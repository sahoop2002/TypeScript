// type assertions 
const someValue: unknown = "subscribe to roadsidecoder";
const strLength: number = (someValue as string).length; 

// Or 
let strLength2 : number = (<string> someValue).length;


// type guards
function processValue (value : string | number) {
    if (typeof value == "string"){
        console.log(value.toLocaleUpperCase());
    }else{
        console.log(value.toFixed(2))
    }

}

// instanceof type guard
class Dog {
    bark(){
        console.log("woof!")
    }
}
class Cat {
    meow(){
        console.log("meow!")
    }
}
function makeSound(animal : Dog | Cat){
    if (animal instanceof Dog){
        animal.bark()
    } else {
        animal.meow()
    }
}
