// // Loops :-
// // for loop :-

// // let i=0 -> initialization, i<=5 -> stopping condition, i++ -> updation

// // print 1 to 5 numbers
// for(let i = 1; i<=5; i++){
//     console.log("for loop is running");
// }
// console.log("for loop is ended")

// // calculate the sum of 1 to n
// let n = 6
// let sum = 0;
// for (let i=0; i<=n; i++){
//     sum+=i;
// }
// console.log("Sum =",sum);

// // while loop :-
// // i=1 -> initialization(before starting while loop), i<=5 -> stopping condition, i++ -> updating (body of while loop)
// let i = 1;
// while (i<=5){
//     console.log("while loop running.");
//     i++;
// }
// console.log("while loop ended")

// // do - while loop :- (compulsory do executes one time whether condition is true or false)
// let i = 0;
// do {
//     console.log("while loop running");
//     i++;
// }while(i<=5);

// // for-of loops:- (used for iterating through strings)
// let str = "kunaal";
// for (let i of str){
//     console.log(i);
// }

// // problem : print only the vowels present in the string hakunamatata
// let word = "hakunamatata";
// for(let i of word){
//     if (i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
//         console.log(i);
//     }
// }

// for-in loops:- (used for iterating through object({key:val}), it iterates through through each keys in object)
// let student = {
//     "Name" : "Kunaal",
//     "Roll" : 31,
//     "Class" : "Ai&Ds",
//     "College" : "CBIT"
// };
// for (let i in student){
//     console.log(i); // retreives only keys
// }
// for (let i in student){
//     console.log("key =",i,", value =",student[i]); // to retreive value
// }

// // Problem :-
// // 1. Create a game where you start with any random game number. Ask the user to keep guessing the game number untill the user enters correct value :-
// let num = 24;
// let userNum = prompt("Guess the game number :-");
// while (userNum != num){ // iterates till usernum is not equal to num
//     userNum = prompt("You're guess is wrong, Guess again :-");
// }
// console.log("Congratulations your guess is correct 🥳");