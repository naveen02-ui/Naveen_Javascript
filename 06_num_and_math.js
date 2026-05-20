const score = 400
console.log(score);

const balance = new Number(100) // Here new Number helping us to show datatype of 100 as number
console.log(balance);

console.log(balance.toString().length); // toString use to change the datatype of number to string and length can be added to show length
console.log(balance.toFixed(2))  // toFixed use to provide decimal zeroes in the number
console.log(balance.toFixed(0))

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // it will roundoff value after from starting 4 digits
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('eng-IN'));  // this will represent number comma as indian standards



//**************** Maths *******************/
console.log(Math.abs(-4));  // keep values positive always
console.log(Math.round(4.6));  // to roundoff nearest 
console.log(Math.ceil(4.3));   // to upper integer roundoff
console.log(Math.floor(4.9));   // to lower integer roundoff
console.log(Math.min(4, 3, 6, 1)); 
console.log(Math.max(4, 3, 5, 1));

console.log(Math.random());  // provide real number random values
console.log((Math.random() * 10) + 1);  
console.log(Math.floor(Math.random() * 10) + 1);  // floor for upper integer value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   // provide random value within range in integer we have converted successfully and it's a formula

