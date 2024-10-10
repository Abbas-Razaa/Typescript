// arrow functions
const abcd2 = (): void => {
  console.log("hey");
};

// optional parameter

function user(name: string, age?: number) {}

user("abbas"); // age is optional, ajaye tu theek nahi aye tu bhhi chalega

// default parameters

function abcd3(name: string = "default") {
  console.log(name);
}

abcd3();

// // rest parameters
// function names(...names: string[] ){
//     console.log(names);
// }

// names('abbas', 'ayaan', 'mustafa');
