// Primitive
// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')  // They are looking equal but not because written value is not same 

console.log(id === anotherid);

const bigNumber = 4343434343434n   // n use for BigInt (Big numbers or values)

// Refrence (Non-Primitive) 
// Types : Array, Object, Functions

const heros = ["Iron Man", "Hulk", "Spider-Man"];
let myObj = {
    name: "naveen",   // here we use , inside obj
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);  // to identify the type of datatype
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof anotherid);



//**********************************//

// Stack (used in Primitive), Heap (Non-Primitive)

let myYoutubename = "Naveen Techno"

let anothername = myYoutubename
anothername = "technology"
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "naveen@google.com"

console.log(userOne.email);
console.log(userTwo.email);


