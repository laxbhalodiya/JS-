let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);  // it will give error
// console.log(b);  // it will give error
// console.log(c);  // it will print 30, because var is function scoped, not block scoped

function one(){
    const username = "Lax"

    function two(){
    const website = "Youtube"
    console.log(username);
    }
    // console.log(website);  // it will give error, because website is not defined in this scope
    // two()
    two()
}
// one()

if(true){
    const username = "Lax"
    if(username === "Lax"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);  // it will give error, because website is not defined in this scope
}

// console.log(username);


//++++++++++++++++++++++++++  interesting  ++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
