// const tinderUser = new Object(); //singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sunny";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sunny@example.com",
    fullname : {
        userfullname: {
            firstname: "Sunny",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "sunny@example.com"
    },
    {
        id: 2,
        email: "john@example.com"
    },
    {
        id: 3,
        email: "jane@example.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Lax"
}

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
// console.log(instructor);

// {
//     "name": "Lax",
//     "courseName": "JavaScript",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]