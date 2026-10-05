// generics in ts
function identity<MyType>(arg: MyType): MyType {
  return arg;
}

let output1 = identity <string>("Subscribe");
let output2 = identity <number>(100)
//const a = identity("hello"); // typed as `any`, not `string`

// generic with arrays 
function getFirstElement <T> (arr: T[]) : T | undefined {
    return arr[0]
}

let myNum = getFirstElement([1,2,3])
let myName = getFirstElement(["pratip","sahoo"])

// generic interfaces
interface KeyValuePair <K,V> {
    key: {
        name : string;
        myKey : K
    };
    value: V;
}

let stringNumberPair : KeyValuePair <string, number > = {
    key : {
        name : "pratip",
        myKey : ""
    },
    value : 23
}

// generic classes 
class DataStorage<T> {
  private data: T[] = [];
 
  addItem(item: T) {
    this.data.push(item);
  }
 
  getItems(): T[] {
    return this.data;
  }
}
 
const textStorage = new DataStorage<string>();
textStorage.addItem("hello");

// generic constrains 
interface Lengthwise {
  length: number;
}
 
function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
 
logLength("hello"); // fine — strings have .length
logLength([1, 2, 3]); // fine — arrays have .length
//logLength(42); // Error: number has no .length


