//! Part 1: Coding Questions

//*--Q1: Convert the string "123" to a number and add 7.

var x = "123";
x= Number(x);
console.log(x+7);  //ANS-->130

console.log("-".repeat(50));
//*--Q2:Check if the given variable is falsy and return "Invalid" if it is.

var x= 0;
const checkFalsy = (value) => (!value ? "Invalid" : "Valid");
console.log(checkFalsy(x));  //ANS-->Invalid

console.log("-".repeat(50));


//*--Q3:Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for (let i=1; i<=10; i++){
    if(i%2===0){
        continue;
    }
    console.log(i);
}                            //ANS-->1,3,5,7,9

console.log("-".repeat(50));

//*--Q4:Create an array of numbers and return only the even numbers using filter method
var x= [1,2,3,4,5];
var evenNumbers = x.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);  //ANS-->[2,4]

console.log("-".repeat(50));

//*--Q5:Use the spread operator to merge two arrays, then return the merged array.
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]);  //ANS-->[1,2,3,4,5,6]

console.log("-".repeat(50));

//*--Q6:Use a switch statemen to return the day of the week given a number (1 = Sunday …., 7 = Saturday). 
var getDay = (num) => {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid day number";
    }
};
console.log(getDay(3));  //ANS-->Tuesday

console.log("-".repeat(50));

//*--Q7:Create an array of strings and return their lengths using map method.

let arr =['a','ab','abc'];
let lengths = arr.map(str => str.length);
console.log(lengths);  //ANS-->[1,2,3]

console.log("-".repeat(50));

//*--Q8:Write a function that checks if a number is divisible by 3 and 5

var x= 15;
if(x%3===0 && x%5===0){
    console.log("Divisible by both");
}

console.log("-".repeat(50));

//*--Q9:Write a function using arrow syntax to return the square of a number.

let Exponentiation = (num) => num ** 2;
console.log(Exponentiation(5));  //ANS-->25

console.log("-".repeat(50));

//*--Q10:Write a function that destructures an object to extract values and returns a formatted string.

const person = {
    name:"Gasser",
    age:20
}
console.log(`${person.name} is ${person.age} years old.`);  //ANS-->Gasser is 20 years old.

console.log("-".repeat(50));

//*--Q11:Write a function that accepts multiple parameters (two or more) and returns their sum.

var x=[1,2,3,4,5];
var sum = 0;
for(let i=0; i<x.length; i++){
    sum += x[i];
}
console.log(sum);  //ANS-->15

console.log("-".repeat(50));

//*--Q12:Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.

// var x = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Success');
//         }, 3000);
//     });
// };

// x().then(resolve => console.log(resolve));  //ANS-->Success

console.log("-".repeat(50));

//*--Q13:Write a function to find the largest number in an array.
var x = [1,3,7,2,4];

const findLargest = (arr) => Math.max(...arr);
console.log(findLargest(x));  //ANS-->7

console.log("-".repeat(50));

//*--Q14:Write a function that takes an object and returns an array containing only its keys. 

const obj = {
    name:"Gasser",
    age:20
}
console.log(Object.keys(obj));  //ANS-->['name', 'age']

console.log('-'.repeat(50));

//*--Q15Write a function that splits a string into an array of words based on spaces.

function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords("The quick brown fox"));  //ANS-->['The', 'quick', 'brown', 'fox']

console.log("=".repeat(50));

//=================================================================================================================
//! Part 2: Essay Questions

