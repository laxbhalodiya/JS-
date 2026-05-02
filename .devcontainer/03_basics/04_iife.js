// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }

(function chai(){
    console.log(`DB CONNECTED`);
})();


(function aurcode(){
    // this is named iife
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`)
})();

( (name) => {
    // unnamed iife(simple iife)
    console.log(`DB CONNECTED TWO ${name}`)
})("Lax")


