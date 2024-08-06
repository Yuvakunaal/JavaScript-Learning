// Arrays : collection of items
let marks = [10,20,30,40,60,80];
console.log("Array =",marks);
console.log("Length =",marks.length); // array property

let avengers = ["iron man","hulk","black panther","thor"];
console.log("Array =",avengers);

console.log("Type =",typeof(marks));
// returns 'object' because even though it is array it is considered as object

// Indices
console.log(`0th index = ${marks[0]}`);
console.log(`2nd index = ${marks[2]}`);

// Looping over arrays
// using indices
for (let i=0;i<avengers.length;i++){
    console.log(avengers[i]);
}
console.log("-")
// for-of
for(let avenger of avengers){
    console.log(avenger.toUpperCase());
}

// Problems :-
// 1. For the given array with the marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class ?
let marks_of_students = [85,97,44,37,76,60];
let a = 0;
for(let i=0;i<marks_of_students.length;i++){
    a+=marks_of_students[i];
}
console.log(`Average marks of students = ${a/marks_of_students.length}`);
// or
a = 0;
for(let num of marks_of_students){
    a+=num;
}
console.log(`Average marks of students = ${a/marks_of_students.length}`);

// 2. For the given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% OFF an item. Change the array to store the final price after applying offer ?
let prices = [250,645,300,900,50];
for (let i=0;i<prices.length;i++){
    prices[i] = prices[i] - (prices[i]*(10/100));
}
console.log(`Prices after applying offer = ${prices}`);


// Array methods :-
// push() : adds to end, 
// pop(): deletes from end and returns it, 
// toString() : converts array to string, 
// concat() : joins multiple arrays and return new array, 
// unshift() : adds to start, 
// shift() : deletes from start and returns it, 
// slice() : return a piece of array, 
// splice() : change original array(add,remove,replace)
// indexOf() : returns index or specified element from array 

// push()
let fruits = ["Apple","Banana","Pomegranate"]
console.log(fruits);

fruits.push("Mango");
fruits.push("Orange");
fruits.push("Kiwi","Apricot","Grapes");
console.log(fruits);

// pop()
let poppedfruit = fruits.pop();
console.log(`Final array after popping '${poppedfruit}' = ${fruits}`);

// toString()
let strfruits = fruits.toString();
console.log(fruits);
console.log(strfruits);

// concat()
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];
let arr4 = arr1.concat(arr2,arr3);
console.log(arr4);

// unshift()
let vegetables = ["Tomato","Potato"];
console.log(vegetables);

vegetables.unshift("Cucumber","Brinjal");
console.log(vegetables);

// shift()
let poppedvegetable = vegetables.shift();
console.log(`Final array after shifting '${poppedvegetable}' = ${vegetables}`)

// slice() => (start_index (no default, index must be specified), end_index#but id doesnt include (default = last index))
console.log(avengers);
let sliced_arr1 = avengers.slice(2,);
console.log(sliced_arr1);
let sliced_arr2 = avengers.slice(1,3);
console.log(sliced_arr2);

// splice() => (start_index,no_of_elements_to_delete,what_to_replace_in_place_of_deleted)
console.log(fruits);
fruits.splice(2,2,"Watermelon","Jackfruit"); // (going to '2nd' index, deleting '2' elements from 2nd index,element-1 adding in first deleted,element-2 adding in second deleted)
console.log(fruits);

// if you want to only add at a specific index, then keep no_of_elements to be deleted = 0
fruits.splice(2,0,"Cherry"); // going to 2nd index, deleting 0 elements, element adding in 2nd element
console.log(fruits);

// if you want to only delete at a specific index
fruits.splice(3,1); // going to 3nd index, deleting 1 element 
console.log(fruits);

// if you want to replace single element at a specific index
fruits.splice(2,1,"Berry"); // going to 2nd index, deleting 1 element, element adding at that index (cherry -> berry)
console.log(fruits);

// if you keep only single element in splice. deletes all elements present after that index, and returns deleted items
let single_elem = fruits.splice(4); // deletes from 4th index to last
console.log(`After deleting '${single_elem}' => array = ${fruits}`);

// if you didnt keep anything inside splice(), then nothing will happen, just returns empty arr, but no change will happen to original array
let test = fruits.splice();
console.log(test);
console.log(fruits);

// indexOf()
let arr = ["a","b","c","d"];
console.log(arr.indexOf("b"));

// Problems :-
// create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a) Remove the first company from array
// b) Remove uber and add ola in its place
// c) Add amazon at the end

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

// a
let a_solve = companies.shift();
console.log("Array =",companies, "after removing",a_solve);

// b
companies.splice(companies.indexOf("Uber"),1,"Ola")
console.log(companies);

// c
companies.push("Amazon");
console.log("Final companies =",companies);

