// primitive data types-(STACK)

// String
// Numbernull
// undefined
// boolean
// BigInt
// symbol mostly used in libraries

let fullname ="kaniyamudhu" 
let age = 6;
let salary = null;
let hike = undefined;
let isLoggedIn = true;
let largeNumber = 8888888888888888888888888n;
//  const buttonId = symbol("Id");


//  refernce types -(HEAP)
// object
let userOject = {
    "name" : "Kani",
    age : 21,
    isLoggedIn :true
}

// Array
let naturalNumbers = [1,2,3,4,5,6,7,8,9,0]

// function -bring a functionality to our code--- here it bring login functionality of login to the user
const sayhello = function(){
    console.log("logged in")
};

let anotherName = fullname;
let anotherUser = userOject
anotherName = "Kani Kutty"

console.log(fullname,anotherName);
console.log(userOject,anotherUser);
