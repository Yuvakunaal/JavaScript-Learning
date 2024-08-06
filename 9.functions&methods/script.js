// Functions in JS :- (Hepts to avoid redundancy)
// Block of code that performs a specific task, can be invoked whenever needed
// Two steps -> function definition & function call
// function definition with 0 parameters (parameter = the elemets which recieve through -> ()calling)
// function <func_name>(){
// 
//  <body of function>
// 
// }

// function call :-
// <func_name>();

// function definition with more than 0 parameters
// function <func_name>(param1,param2,...){
// 
//  <body of function>
// 
// }

// function call :- (here we pass arguments)
// <func_name>(param1,param2,...);

// passing = arguments
// getting = parameters


// lets start to code 
function myfunc1(){
    console.log("This is Function concept!");
}
myfunc1();

function myfunc2(msg){ // msg -> parameter
    console.log(`Message from my friend : ${msg}`);
}
myfunc2("How are you ?"); // msg -> argument

// Find sum of two numbers 
function summing(x,y){
    console.log(x+y);
}
summing(2,3);

// using return :- return is a keyword which is used to stop at that line and come out of the function, what we keep beside return it returns to the fucntion call
function summ(x,y){
    console.log("before return"); // will execute
    return x+y;
    console.log("After return"); // Will not execute
}
let a = summ(2,4);
console.log(a);

// scope of variables :-
function func(a,b,c){  
    // a,b,c are local variables of 'func', These variables exists within the function, they are undefined outside the function.
    return a*b*c
}
console.log(func(2,4,3));


// Arrow Functions :-
// Compact way of writing a function
// Here after calling the arrow function, result directly returns to variable.
const sum = (a,b) => {
    return a+b;
};
console.log(sum(4,8));

const printhello = () => {
    return "hello world!!!";
};
console.log(printhello());

// Problems :-
// create a function using the 'function' keyword that takes a string as an argument & returns the number of vowels in the string 
function count_vowels(str){
    let a = 0;
    for (let i of str){
        if (i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            a+=1;
        }
    }
    return a;
}
str = "hikarunakamura";
let result = count_vowels(str);
console.log(`Vowel count in '${str}' = ${result}`);

// arr.forEach(callBackFunction) :-
// Call Back Function : Here, it is a function to execute for each element in the array
// A call back is a function passed as an argument to another function 
let arr = ["name","id","roll","clg"];
arr.forEach((val) => {
    console.log(val.toUpperCase());
});
arr.forEach((val,index) => {
    console.log(val.toUpperCase(),index);
});
arr.forEach((val,index,array) => {
    console.log(val.toUpperCase(),index,array);
});


// Higher order functions/methods :-
//     Higher order functions/methods are the functions/methods that takes function as parameter or returns a function.

// Problems :-
// For a given array of numbers, print the square of each value using the forEach loop :-
// 1. printing squares
let nums = [1,2,3,4,5];
nums.forEach((val) => {
    console.log(val**2);
});
// or
// 2. creating another array for squares
let squares = [];
nums.forEach((val) => {
    squares.push(val**2);
});
console.log(squares);
// or
// 3. creating using arrow function
let calsquare = (num) => {
    console.log(num**2);
};
nums.forEach(calsquare);


// Some other array methods :-
// Map
// Creates a new array with the results of some operations. The value its callback returns are used to form a new array
let words = ["apple","ball","cat","dog"];
words.map((val) => {
    console.log(val);
});
words.map((val,index) => {
    console.log(val,index);
});

// Concat '!' to all strings in array
words.map((val) => {
    console.log(val+"!");
});

// using return (for storing these results in new array)
let res = words.map((val) => {
    return val+"!";
});
console.log(res);

// filter 
// Creates a new array of elements that give true for a condition/filter
// filter even number from array :-
let numbers = [1,2,3,4,5,6,7,8,9];
let res1 = numbers.filter((val) => {
    return val%2==0;
});
console.log(res1);

// reduce
// Performs some operations & reduces the array to a single value. It returns that single value.
let nums1 = [1,2,3,4,5];
let output1 = nums1.reduce((prev,curr) => {
    return prev + curr;
});
console.log(output1); // This code calculates sum of all numbers in array 
// understand the above code
// step-1 : prev = 1, curr = 2
// step-2 : prev = 3, curr = 3
// step-3 : prev = 6, curr = 4
// step-4 : prev = 10, curr = 5
// step-5 : prev = 15, curr = ---, returns prev
// means it will do the operation given and stores it in prev, and curr goes on iterating till the end of array

// Return max number from array
let nums2 = [3,1,5,4,6,7,2];
let output2 = nums2.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(output2);


// Problems :-
// We are given array of marks of students. Filter out the marks of students that scored 90+ ?
let scores = [75,92,89,91,99,35,67];
let scores90 = scores.filter((val) => {
    return val > 90;
});
console.log(scores90);


// Take a number n as input from user. Create an array of numbers from 1 to n. 
// Use reduce method to calculate sum of all numbers in the array
// Use reduce method to calculate product of all numbers in the array

let n = prompt("Enter number :-");
let numbers_array = [];
for (let i=1;i<=n;i++){
    numbers_array.push(i);
}
console.log(numbers_array);
let sum_of_numbers = numbers_array.reduce((prev,curr) => {
    return prev + curr;
});
console.log(`Sum : ${sum_of_numbers}`);
let prod_of_numbers = numbers_array.reduce((prev,curr) => {
    return prev * curr;
});
console.log(`Product : ${prod_of_numbers}`);