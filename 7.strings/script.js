// // String : string is a sequence of characters used in represent text

// // creating string :-
// let str = "kunaal";
// console.log("string =",str);

// // length of string :-
// console.log("Length =",str.length);

// // indices :-
// console.log("0th index =",str[0]);
// console.log("2th index =",str[2]);
// console.log("4th index =",str[4]);

// // problem :-
// // display all characters in string using for and indices concepts :-
// for (let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// Template Literals in JS
// // A way to have embedded expressions in strings (represented with ``)
// let a = `hello this is kunaal`;
// console.log(a,"-",typeof(a));

// // String interpolation
// // To create a string by doing substitution of placeholders
// let name = "kunaal";
// let sentence = `I am ${name}`;
// console.log(sentence);

// // for better understanding
// // display item and price in single line string using the object
// let store = {
//     "item" : "apple",
//     "price" : 25
// };
// let str = `The item ${store.item} is of price ${store.price}/-`;
// console.log(str);

// // we can even substitute the expressions
// let num = 2;
// let a = `square of ${num} is ${num**2}, cube of ${num} is ${num**3}`;
// console.log(a);

// // escape characters :-
// // \n = moves to nextline , \t = gives tabe space
// let str1 = "hello\nkunaal";
// console.log(str1);
// console.log(str1.length); // even though there are 2 letters without hellokunaal the output will be 12, because escape char counts only as length = 1 (tricky interview question)

// // let str2 = "hello\tkunaal";
// // console.log(str2);

// // String methods in js :-
// // uppercase, lowercase ,trim
// let str = "HeLlo";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str1 = "  Hello kunaal ";
// console.log(str1);
// console.log(str1.trim()); // removes whitespaces at the start and end of string
// // or
// trimmedstr = str1.trim();
// console.log(trimmedstr);

// // some more methods
// // slice = returns part of string, concat = join str2 with str1, replace = replaces str2 with str1, chatAt = returns chat of index in string.
// let str = "hellokunaal";
// console.log(str.slice(1,4)); // str.slice(a,b), a=start, b=end(but not considers in output)
// console.log(str.slice(3)); // starts from 2nd index to end of string

// let str1 = "kunaal";
// let str2 = "cbit";
// let result1 = str1.concat(str2);
// console.log(result1);

// let result2 = str1 + str2; // we can do like this also
// console.log(result2);

// // also we can add multiple strings
// let result3 = "This is "+str1+" from "+str2;
// console.log(result3);

// // can concat int also , becuase it converts to string and then concats internally
// let result4 = "hello"+24;
// console.log(result4);

// let str = "mgit";
// str = str.replace("m","c"); // str.replace(where-to-replace,what-to-replace)
// str = str.replace("g","b");
// console.log(str);

// let str = "ThisIsJS";
// console.log(str.charAt(1));
// console.log(str.charAt(6));

// // we cant change the string becuase it is immutable(not changeble)(we can create another variable for changed), so to change the string without creating new one, we can do like this
// // use chatAt to bring the indexed element, then use replace using the indexed element
// let str = "ThisIsC";
// console.log(str);
// let char = str.charAt(6);
// str = str.replace(char,"JS");
// console.log(str);

