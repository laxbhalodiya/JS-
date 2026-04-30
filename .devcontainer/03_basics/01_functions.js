function sayMyname(){
    console.log("L");
    console.log("a");
    console.log("x");
    
}

// sayMyname()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(5, "10")
// const result = addTwoNumbers(5, 10)

// console.log("Result: ", result);


function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(5, 10)

// console.log("Result:", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Lax"));
// console.log(loginUserMessage());


// function loginUserMessage(username){
function loginUserMessage(username = "sam"){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());



// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "Sam",
    price: 999,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){   
    return getArray[1]   
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 500]));

