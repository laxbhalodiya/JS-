//  singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Lax",
    "full name": "Lax Bhalodiya",
    [mySym]: "mykey1",
    age: 20,
    location: "Junagadh",
    email: "lax@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.full name);  // it will give error
// console.log(JsUser."full name");   // it will give error
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "lax@google.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = "lax@microsof.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());