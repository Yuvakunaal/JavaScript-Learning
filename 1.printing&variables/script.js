// Print
console.log("Welcome to JS")
console.log("Displaying & Variables !!!")
console.log(24)

// Variables :- (3 types)
// Type-1 :- using 'var' keyword : variable can be redeclared & updated. A global scope variable
// Actually it is used before 2015 maximum.but after 2015 developers had bought 'ES6'= ecma script 6. Which means it gives us a strutured and detailed features and way of using components in js. In that we got other two types...

var a = 1;
var a = 2;
var a = 3;
console.log(a) // It prints '3' since at last a=3. But this creates 3 different variable objects of a and assigns to '3' which is not that good of programming...

// So the most popular used keywords for assigning variables are 'let' & 'const' keywords.

// Type-2 :- using 'let' keyword : Variables cannot be redeclared but can be updated. A block scope variable.
let c = 1;
c = 2;
c = 3;
console.log(c) // It prints '3' since it is last updates to '3'..Here a is single variable. its value is getting updated but not creating a new variable object like 'var'. 

// Type-3 :- using 'const' keyword : Variables cannot be redeclared and also cannot be updated. A block scope variable.
const b = 1;
// b = 2; -> throws error
// const b = 3; -> throws error
console.log(b) // It prints '1'. It behaves like constant type. means unchangeble.The in-depth and commonly used keywords for declaring variables are 'let' and 'const' - based on the conditions and situations.