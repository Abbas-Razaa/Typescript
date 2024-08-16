// Basic Types:

// let ar: [];  // let arr: Type

// let ar1: string = 'hey' // also assigned value

// let arr3: [number, string] = [2,'gey']; // it is a tuple, first number then string because we have defined.


// running typescript : tsc filename,  it will create a js file

// tsc --watch, this will make files in watch mode and show all changes in real time

// function abcd(): never {
//     while (true) {
//         console.log('infinte run');
//     }
// }

// abcd();
// console.log('hey')

// function abcd(): string {
//     return '12';
// }

// abcd();

// function abcd1(): void {
//     console.log('hey')
// }

// abcd();


// Enumeration:

enum Human {
    name = 'harsh',
    age = 25
}

console.log(Human.name);