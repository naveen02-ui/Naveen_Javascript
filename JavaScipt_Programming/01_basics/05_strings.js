const name = "naveen"
const repoCount = 50

console.log(name + repoCount + " Value");   // Not recommend to use this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Use this

const gameName = new String('naveen')

console.log(gameName[0]);  // [] provide word with position number from starting with 0 count
console.log(gameName.__proto__); // This use for showing both indexing with words

console.log(gameName.length);  // for number of length of words
console.log(gameName.toUpperCase()); // For capital of whole words1
console.log(gameName.charAt(2)); // for finding word by position
console.log(gameName.indexOf('t')); // for finding location number of word 

const newString = gameName.substring(0,5)  // substring to print words combined with starting location 0 even you choose minus it's bydefault 0 set
console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

const newStringOne = "     naveen   "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim use for blank space and other like trimStart and trimEnd for respective uses

const url = "https://naveen.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  // replace use to replace the word with particlular next thing (-) is mention here to change (%20)

console.log(url.includes('naveen')); // It tell's that these words is there in the sentence or not by true or false

console.log(url.includes('sundar'))

console.log(gameName.split('-'));  // split provide us to split the sentences with particular difference mean like (-) here
