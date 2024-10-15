// Generics
// Generic Functions
// Generic Interfaces
// Generic Classes

// humein ek function banana hai jo ki accept karega koi bhi value and usey print karega

function logger(a: any){ } // a :any typescript use is violated
logger("hey");
logger(12);

// hum ek function ko use krte waqt bata sakte hai ki function argument ko kis type se treat kary

// Generic Functions
function abcd<T>(a: T){ } // T is a generic type
abcd<number>(12)
abcd<string>("hey")

// can be used as a console log
function log<T>(a: T){}
log<string>('hey')

// without defining type it can also be executed
function log1<T>(a: T){
    console.log(a)
}
log1(12); // log1(12) 12 is recognized as number by typescript itself

// Generic Interfaces
interface MyInterface<T>{
    value: T
}
function MyInterfaceFunction<T>(obj: MyInterface<string>) {}
MyInterfaceFunction({value: "hey"})

// Generic Classes
class BottleMaker<T>{
    constructor(public value: T){}
}
let bottle = new BottleMaker<string>("water")
let bottle2 = new BottleMaker<number>(12)
console.log(bottle, bottle2)

function abcde<T>(a: T, b: T): T{
    // return "hey" //not possible, hey is not string it is string literal because of "",
    return "hey" as T;
    // OR
    // return <T>"hey";
}
abcde<string>('hey', 'hello')

function MyFunction<T>(a:T, b:T): T{
    if(typeof a === "string"){
        a.length  // intelliscence will work only if type narrowing method is used
    }
}
MyFunction<string>('hey', 'hello');




