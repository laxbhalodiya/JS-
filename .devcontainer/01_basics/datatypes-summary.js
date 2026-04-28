// JavaScript is dynamic type language means you not need to declare variables data types ex. const score = 100

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 1234567890123456789n


//Reference (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Lax",
    age: 20,
}

const myFunction = function(){
    // console.log("Hello World");
    
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof anotherId);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Allocation:

// There are 2 types of memory : 1.Stack, 2.Heap
// Where are this memory is used: stack(Primitive), Heap(Non-Primitive)

let myName = "Lax"