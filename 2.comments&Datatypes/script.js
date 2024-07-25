// comment : It is a piece of text that is ignored by the JavaScript engine and does not affect the execution of the code.
// Comments are used to provide explanations or annotations within the code to make it easier to understand and maintain

// There are two types of comments :-
// single line comment :- using '// ____' (double slash)
// multi line comment : using '/* ____ */' (slash asterisk at starting & asterisk slash at ending)
// examples :-
// Hello welcome hello hi 123 hoo...
/*
welcome
hello
college
*/

console.log("Data Types !!!")
// Primitive & Non-Primitive data types
// There are 7 datatypes in Primitive:-
// typeof() : is used to know the type.

// 1. Number : Represents both integer and floating-point numbers.
let a = 2314;
console.log(a,typeof(a));

// 2. String : Represents a sequence of characters.
let b = "hello world!";
console.log(b,typeof(b));

// 3. Boolean : Represents logical entities. It has only two values: true and false.
let c = true;
console.log(c,typeof(c));

// 4. Undefined : A variable that has been declared but not assigned a value yet.
let d;
console.log(d,typeof(d));

// 5. Null : Represents the intentional absence of any object value. 
let e = null;
console.log(e,typeof(e)); // we get 'object' - it means it should be an object but i was null now.

// 6. BigInt : Represents integers with arbitrary precision.
let f = 9007199254740991n;
console.log(f,typeof(f));
// or
f = BigInt("23343234");
console.log(f,typeof(f));

// 7. Symbol : Represents a unique and immutable identifier.
let g = Symbol('description');
console.log(g,typeof(g));


// There are 9 Non-Primitive datatypes :-
// 1. Object: The most general type. Objects can store collections of data and more complex entities.
//            These consists of keys and values
const bot = {
    "Name" : "kunaal",
    "Roll" : 31,
    "Male" : true,
}
console.log(bot,typeof(bot))
console.log(bot["Name"],typeof(bot["Name"])) // we can access each key-value by this way.
console.log(bot.Roll,typeof(bot.Roll)) // we can access each key-value by this way also.

// Values can also be modified :-
bot["Roll"] = bot["Roll"] + 13;
console.log(bot,typeof(bot))
console.log(bot.Roll,typeof(bot.Roll))

// Note : we cant change the const variable assigning but we can change const object keys and values...

// The other below datatypes will be learning in upcoming concepts...
// 2. Array: A special type of object for storing ordered collections of values.
// 3. Function: Objects that are callable and can be executed.
// 4. Date: Objects that represent dates and times.
// 5. RegExp: Objects that represent regular expressions.
// 6. Map: Objects that store key-value pairs with keys of any type.
// 7. Set: Objects that store unique values of any type.
// 8. WeakMap: Similar to Map but allows for garbage collection of keys.
// 9. WeakSet: Similar to Set but allows for garbage collection of values.




