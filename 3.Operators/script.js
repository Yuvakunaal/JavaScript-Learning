// Operators :-

// Arithmetic operators :- (+,-,*,/,%,**)
let a = 2;
let b = 3;
console.log("a =",a,"& b =",b)
console.log("a + b =",a+b)
console.log("a - b =",a-b)
console.log("a * b =",a*b)
console.log("a / b =",a/b)
console.log("a % b =",a%b)
console.log("a ** b = ",a**b)

// Unary operators :- (++,--)
let c = 2;
let d = 2;
let e = 2;
let f = 2;
console.log("++c =",++c) // ++c = it increments and then prints
console.log("d++ =",d++) // d++ = it prints and after printing it increments
console.log("--e =",--e) // --e = it decrements and then prints
console.log("f-- =",f--) // f-- = it prints and after printing it decrements

// Assignment operators :- (+=,-=,*=,/=,%=,**=)
let a = 4;
let b = 3;
console.log("a =",a,"& b=",b)
a+=1;
console.log("a+=1 =",a)
a-=1;
console.log("a-=1 =",a)
a*1;
console.log("a*=1 =",a)
a/=1;
console.log("a/=1 =",a)
a%=1;
console.log("a%=1 =",a)
a**=1;
console.log("a**=1 =",a)

// Comparison operators :- (==,===,!=,!==,<,>,<=,>=)
let a = 3;
let b = 4;
let c = 3.0;
console.log("a == c ->",a==c)
console.log("a === c ->",a===c)
console.log("a != b ->",a!=b)
console.log("a !== b ->",a!==b)
console.log("a < b ->",a<b)
console.log("a > b ->",a>b)
console.log("a <= b ->",a<=b)
console.log("a >= b ->",a>=b)

// Logical operators :- (and = &&, or = ||, not = !)
let a = 2;
let b = 3;
let c = 0;

let cond1 = a==b;
let cond2 = c;
console.log("cond1 && cond2 =",cond1 && cond2)

let cond3 = a==b;
let cond4 = c;
console.log("cond3 || cond4 =",cond3 || cond4)

let cond5 = c;
console.log("!cond5 =",!cond5)