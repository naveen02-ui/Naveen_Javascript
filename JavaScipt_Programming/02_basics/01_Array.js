// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "superman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)  // to add values we use push
console.log(myArr);

myArr.unshift(9)  // unshift to push value in start of the array
console.log(myArr)

myArr.shift()   // shift to remove the unshift value
console.log(myArr)

console.log(myArr.includes(9));  // check 9 exits or not
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// Slice, Splice

console.log("A", myArr);  // myArr denotes by A

const myn1 = myArr.slice(1, 3)  // it provide value from 1 to 2 not include 3

console.log(myn1);
console.log("B",myArr);  // myArr denotes by B

const myn2 = myArr.splice(1, 3)   // it provide value from 1 to 3
console.log(myn1);
console.log("C", myArr);  // manipulate value of previous terms
console.log(myn2);



