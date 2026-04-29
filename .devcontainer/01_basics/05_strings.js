const fname = "Lax"
const lname = "Bhalodiya"

// console.log(fname + lname);

// console.log(`Hello my name is ${fname} ${lname}`);

const name = new String('Lax Bhalodiya')

// console.log(name[0]);
// console.log(name.__proto__);

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(6));
// console.log(name.indexOf('h'));

const newName = name.substring(2,6)
// console.log(newName);

const anotherName = name.slice(-13,6)
// console.log(anotherName);

const anothernewName = "  Lax  "
// console.log(anothernewName);
// console.log(anothernewName.trim());

const url = "https://lax.com/lax%20bhalodiya"

// console.log(url.replace('%20','-'));
// console.log(url.includes('lax'));

console.log(url.split('/'));
console.log(name.split(' '));


