const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item)=>{
    // return console.log(item);
})

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=> {
//     num > 4
// })
// console.log(newNums);


// const newNums = []

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

const code = myCoding.filter((cd)=> cd.languageName === "JavaScript")
console.log(code)