// // alert :- it is a one time popup in website
// alert("Welcome to website!!!")

// // prompt :- asks for usere to input
// let name = prompt("Whats your name ?");
// console.log(name);

// // Problem :-
// // Get user to input a number using prompt("Enter a number:"). Check if the number is multiple of 5 or not?
// let num = prompt("Enter a number:")
// if (num%5 === 0){
//     console.log("It is multiple of 5");
//     alert("It is multiple of 5");
// }
// else{
//     console.log("It is not multiple of 5");
//     alert("It is not multiple of 5");
// }

// // write a code which can give grades to students according to their scores ?
// // -> 90-100, A
// // -> 70-89, B
// // -> 60-69, C
// // -> 50-59, D
// // -> 0-49, F
// let score = prompt("Enter score:");
// let grade;
// if (score >= 90 && score <= 100){
//     grade = "A";
// }
// else if (score >= 70 && score < 90){
//     grade = "B";
// }
// else if (score >= 60 && score < 70){
//     grade = "C";
// }
// else if (score >= 50 && score < 60){
//     grade = "D";
// }
// else if (score >= 0 && score < 50){
//     grade = "F";
// }
// else{
//     grade = "--";
//     alert("Grade must not be less than 0 or more than 100");
// }

// if (grade != "--"){
//     console.log("Grade as per given score is =",grade);
// }
// else{
//     console.log("Try again !")
// }
