
//object type annotation
let user :{ name: string; age: number} = {
    name : "pratip",
    age : 23
}

// interface
interface user1 {
    name: string;
    age: number;
    email?: string; // optional property
    readonly id : number // readonly property
}
let user1 = {
    name : "pratip",
    age : 23,
    //email : "sahoopratip@gmail.com"
    id : 10 
}

//user.id = 2 ; // since this is readonly we can't update it

//interface with method 
interface product {
    name : string;
    price : number;
    getDiscount(percentage:number):number
}

let laptop : product = {
    name : "Macbook",
    price : 200000,
    getDiscount (percentage:number):number{
        return this.price * (percentage / 100)
    }
}
