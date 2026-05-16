const accountId = 11223344
let accountEmail = "naveen@gmail.com"
var accountPassword = "12340"
accountCity = "Kota"
let accountState;
// accountId = 44332211 // Not allowed

accountEmail = "suman@gmail.com"
accountPassword = "23423"
accountCity = "Udaipur"

console.log(accountId); // For printing single value and semi-colon is optinal to use

/* 
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
