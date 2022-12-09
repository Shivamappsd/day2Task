// 1.Write a program that creates a numeric, string, null, bigint, undefined and boolean variable and also display the respective data types 

// Javascript number

let num1 = 18;
console.log("Print number : ",num1 + ":" + typeof(num1));
let num2 = 18.5;
console.log("Print number : ",num2 + ":" + typeof(num2));

// Javascript string
let str1 = "Shivam";
console.log("Print string : ",str1 + ":" + typeof(str1));

// Javascript null
let number = null;
console.log("Print null : ",number  + ":" + typeof(number));

// Javascript bigint
let bint = 235648462685n;
console.log("Print bigint : ",bint  + ":" + typeof(bint));

// adding the big intergers
let bigval = bint + 1n;
console.log("Print big value : ",bigval);

// javascript undefined
let noName;
console.log("Print Undefined :",noName + ":" + typeof(noName));

// Javascript boolean
let x = null;
console.log("Print boolean : ",Boolean(x) + ":" + typeof(x));
let y = 20;
console.log("Print boolean : ",Boolean(y) + ":" + typeof(y));

// Question no. 2
// Declare a const object and initialize it. Also try to change its data type by assigning string to it.

let cars = {
    type:"suv" ,
    name:"BMW",
    model:2019 
    }
let objVal = JSON.stringify(cars);
console.log("Key and values of the obj is : " + objVal);

// //3. Using the above question , try to manipulate the object by adding a new key value pair to it and also try to change the existing values to the keys defined.

cars.color = "blue";
console.log(cars);

//Change the previous value of the object
cars.type = "jeep";
cars.name = "Audi";
cars.model = "2022";
console.log(cars);


// 4 . Write a program that prompts the user to enter two numbers and compute the basic arithmetic operations like sum, subtraction, multiplication, division, percentage of one number to the other number of the two numbers. Modify the program to use the back tick operator to display the result of the addition.
// const prompt = require ("prompt-sync")({sigint:true});

let num1 = prompt("Enter First Value"); //Taking the first value from the user
let num2 = prompt("Enter First Value"); // taking the second value from the user
num1 = parseInt(num1);
num2 = parseInt(num2);

let add = num1 + num2;
console.log(`Adding the to number ${num1} and ${num2}`,add);

let substract = num1 - num2;
console.log(`Substract the to number ${num1} and ${num2}`,substract);

let multiply = num1 * num2;
console.log(`Multiply the to number ${num1} and ${num2}`,multiply);

let divide = num1 / num2;
console.log(`Devide the to number ${num1} and ${num2}`,divide);


//Q5. Write a program that accepts the values of π and the radius of a circle. The program should compute the area of the circle and displayed the result with only two digits after the decimal place.

const prompt = require ("prompt-sync")({sigint:true});
const pi = 3.14;
let radius = parseInt(prompt("Enter the Radius of the circle"));
let area = pi*(radius*radius);
console.log(parseFloat(area));


// 6. Write a program which excepts a current time using js Date() function and display whether it's morning, afternoon, or evening using if else statement.
const date = new Date();
let getHr = date.getHours()
if (getHr < 12) {
    console.log("Good morning to all.");
} else if (getHr < 18) {
    console.log("Good Afternoon to all.");
} else {
    console.log("Good Evening to all.");
}

// 7. Do the above question using switch statement.
let date = new Date()
let getHr = date.getHours()
switch (getHr<12 || getHr<18 || getHr<24 ) {
    case getHr<12:
    console.log('good morning');
      break;
    case getHr < 18:
        console.log('good afternoon');
      break;
    case getHr<24:
        console.log('good evening')
        break;
    default:
        console.log('time incorrect')
  }


// Q8. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade in the alert box.
// The rates are determined as follows :
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

let students = [
    ["sanskar", 56],
    ["satyam", 86],
    ["rohit", 58],
    ["mohit", 23]
];
var Avrg = 0;

for (let i = 0; i < students.length; i++) {
    Avrg += students[i][1];
    var average = Avrg / students.length;
};

if (average <= 60) {
    console.log("Grade: D")
} else if (average <= 70) {
    console.log("Grade : D");
}
else if (average <= 80) {
    console.log("Grade : C");
} else if (average <= 90) {
    console.log("Grade : B");
} else if (average <= 100) {
    console.log("Grade : A");
}
