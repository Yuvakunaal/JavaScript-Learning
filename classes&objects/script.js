// Prototypes in JS
// A java script object is an entity having state and behavior (properties and methods)
// Js objects have a special property called prototype
// we can set prototype using '__proto__'
// If object & prototype have same method object's method will be used.

const student = {
    fullName : "Kunaal",
    marks : 82,
    displayMarks : function() {
        console.log("Marks =",this.marks); //this.marks means student.marks (means accessing the objects item using 'this keyword')
    },
};
console.log(student);
console.log(student.fullName);
console.log(student.marks);
student.displayMarks();

// Here now for the second object we want to display thr first objects method...
const employee = {
    calcTax(){
        console.log("Tax is 10%");
    }
};

const kunaal = {
    salary : 50000
};

console.log(employee);
console.log(kunaal);
// To access or get the employee object's function using kunaal object :-
kunaal.__proto__ = employee; // go and check in console..you will object calcTax inside the prototype of kunaal


// Classes in JS
// class is a program-code template for creating objects
// Those objects will have some state(variables) & some behaviour(functions) inside it

class ToyotaCar{
    start(){
        console.log("Start!");
    }

    stop(){
        console.log("Stop!");
    }
    
    setbrand(name){
        this.brand = name;
    }
}
let fortuner = new ToyotaCar();
console.log(fortuner);
fortuner.start();
fortuner.stop();
fortuner.setbrand("fortuner");

// constructor() method :-
// automatically invoked by new
// inializes object

// To create a custom constructor :-
class Student{
    constructor(name,roll){
        console.log("Constructor!");
        this.name = name;
        this.roll = roll;
    }
    name_is(){
        console.log(this.name);
    }
    roll_is(){
        console.log(this.roll);
    }
}
let stud = new Student("kunaal",31);
console.log(stud.name); // directly accessing parameters
stud.name_is();
stud.roll_is();

// Inheritance :-
// Inheritance is passing down properties & methods from parent class to child class
// if child & parent have same method, child's method will be used (method overriding)
class Parent{
    method1(){
        console.log("Parent's method1");
    }
}
class Child extends Parent{
    method2(){
        console.log("Child's method2");
    }
}
let obj = new Child();
obj.method1();
obj.method2();

// For support a person eats and sleeps and an engineer do what a person do and also does work
class Person{
    eat(){
        console.log("Eats");
    }
    sleep(){
        console.log("Sleeps");
    }
    work(){
        console.log("Do nothing"); 
    }
}
class Engineer extends Person{
    work(){
        console.log("Solves problems");    // overriding
    }
}
class Doctor extends Person{
    work(){
        console.log("Treats patients");    // overriding
    }
}

let kunaaleng = new Engineer();
let kunaaldoc = new Doctor();
kunaaleng.eat();
kunaaleng.work();
kunaaleng.sleep();
kunaaldoc.eat();
kunaaldoc.work();
kunaaldoc.sleep();

// super keyword :-
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
class Person1{
    constructor(){
        console.log("Parents constructor");
        this.species = "Homo sapiens";
    }
    eat(){
        console.log("eats");
    }
}
class Engineer1 extends Person1{
    constructor(branch){
        console.log("before child constructor");
        super();
        this.branch = branch;
        console.log("after child constructor");
    }
    work(){
        console.log("solves problems");
    }
}

let obj1 = new Engineer1("CSE");
console.log(obj1);

// if you want to send arguments to parent using super 
class Person2{
    constructor(name){
        console.log("Parents constructor");
        this.species = "Homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eats");
    }
}
class Engineer2 extends Person2{
    constructor(name){
        console.log("before child constructor");
        super(name); // we can pass like this
        console.log("after child constructor");
    }
    work(){
        console.log("solves problems");
    }
}

let obj2 = new Engineer2("kunaal");
console.log(obj2);

// if you want to use the function in parent class inside child class
class Person3{
    constructor(name){
        console.log("Parents constructor");
        this.species = "Homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eats");
    }
}
class Engineer3 extends Person3{
    constructor(name){
        console.log("before child constructor");
        super(name); // we can pass like this
        console.log("after child constructor");
    }
    work(){
        super.eat();
        console.log("solves problems");
    }
}

let obj3 = new Engineer3("kunaal");
obj3.work();