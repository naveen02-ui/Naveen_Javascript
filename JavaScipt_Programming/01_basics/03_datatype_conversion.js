let score = "naveen"

console.log(typeof score);
console.log(typeof (score));    // can be expressed as ()

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN which means not a number
// true => 1; false => 0

let isLoggedIn = "naveen"

let booleanIsLoggedIn = Boolean(isLoggedIn) // bolean is true or name and false represent 1 and 0 respectively
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)
console.log(typeof someNumber)

//**************Operation**********//

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = "naveen"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log(2 + 1 +"2");
console.log("1" + 2 + 2);

console.log( (3 + 4) * 5 % 3 );  // Allowed but not preferable due to readablity issue


console.log(+true);      // Allowed add value in boolean 1
// console.log(true+); // Not allowed
console.log(+"");  // empty value treated as null

let gameCounter = 100
gameCounter++;              // First implement then increment to 1
console.log(gameCounter);