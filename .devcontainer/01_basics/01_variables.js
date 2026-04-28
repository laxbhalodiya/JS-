const accountId = 14453
let accountEmail = "lax@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2  // not allowed

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])