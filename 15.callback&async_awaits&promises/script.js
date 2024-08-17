// Sync in JS :-

// Synchronous :-
// Synchronous means the code runs in a particular sequence of instructions given in a program. 
// Each instruction awaits for the previous instruction to complete its execution.

// Asynchronous :-
// Due to synchronous programming, sometimes imp intstructions get blocked due to some previous instructions, // which causes a delay in the UI. Asynchronous code executes allows to execute next instructions immediately and doesn't block the flow.

// Asynchronous example :-
// console.log("One");
// console.log("Two");

// setTimeout(() => {
//     console.log("Hello world!");
// },3000);

// console.log("Three");

// In the above code. if it is synchronous then One and Two will print and waits 3 seconds and prints hello world and then Three will be printed..
// But here first One and Two will be printed and also Three will be printed without waiting for 3sec and after these all at last after waiting for 3sec hello world will be printed : which is known as asynchronous

// CallBacks :-
// A callback is a function passed as an argument to another function
// Example :-
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(2,4,sum);

// Call back hell :-
// Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of doom)
// This style of programming becomes difficult to understand and manage.

// For example :- we want to print two datas with 2sec gap we will write the code like
// function getData(dataId){
//     setTimeout(() => {
//         console.log("Data :",dataId);
//     },2000);
// }
// getData(1);
// getData(2);
// But in the above code... getData(1) -> takes 2 sec waiting, and also getData(2) -> takes 2 sec waiting.. so after 2sec immidiately both prints...but out scenario is to print data1 after 2sec and after printing data1, data2 should be printing after 2sec...

// To solve this issue :- (we use nested  callbacks)
// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("Data :",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,() => {
//     getData(2, () => {
//         getData(3);             // This 56,57,58,59,60 lines code is nested callbacks which is tougher to
//     });                         // understand, thats why this is called as callback hell
// });
// Here we are passing a callback function i.e..,[ () => {getData(3)} ]

// This is callback hell which is problem in java script...to Solve this we have an amazing conceot called 'Promises' :-


// Promises :-
// Promises is for "eventual" completion of task. It is an object in JS.
// It is solution to callback hell.
// Promise has three states :- i) pending state ii) full-filled state (resolved) iii) rejected state (reject)
// mini examples :-
// let promise1 = new Promise((resolve,reject) => {
//     console.log("I am in promise1.");
// })
// console.log(promise1); // state : pending, result : undefined

// let promise2 = new Promise((resolve,reject) => {
//     console.log("I am in promise2.");
//     resolve("Success");
// })
// console.log(promise2); // state : fulfilled, result : Success

// let promise3 = new Promise((resolve,reject) => {
//     console.log("I am in promise3.");
//     reject("There is some error!");   //This shows like an error type in JS
// })
// console.log(promise3); // state : rejected, result : There is some error!

// Another example :-
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data :",dataId);
//             resolve("success");
//             if (getNextData){
//                 getNextData();
//             }
//         },10000);
//     })
// }
// let promise = getData(1);
// console.log(promise);
// now keep checking for state for everysec insdie the console (not here). by typing 'promise', you will be observing state as pending for 10sec. and after 10sec 'Data : 1' will be printed and due to resolve statement written. state will be fulfilled after 10sec

// Now if we want to perform anything after resolving or rejecting we will use '.then(), .catch()'
// Suppose we want to print 'Done' after resolving for mini example :-

// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("Hello World!");
//         resolve("success");
//     });
// }
// let promise = getPromise();
// console.log(promise);
// promise.then((res) => {
//     console.log("Done :",res);
// })
// promise.catch((err) => {
//     console.log("Not done :",err);
// })
// If there is an error or rejected then "Done" will not print becuase 
// resolve = .then()
// reject = .catch()

// const getPromise1 = () => {
//     return new Promise((resolve,reject) => {
//         console.log("Hello World!");
//         reject("some error");
//     });
// }
// let promise1 = getPromise1();
// console.log(promise1);
// promise1.then((res) => {
//     console.log("Done :",res);
// })
// promise1.catch((err) => {
//     console.log("Not done :",err);
// })


// Another example
// function asyncFunc1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("Success");
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             resolve("Success");
//         },4000);
//     });
// }

// console.log("Fetching data1...");
// let promise1 = asyncFunc1();
// promise1.then((res) => {
//     console.log(res);
// })
// console.log("Fetching data2...");
// let promise2 = asyncFunc2();
// promise2.then((res) => {
//     console.log(res);
// })

// By doing this both data starts fetching one time and both the data prints after 4sec same time. but we dont want like this naah becuase we thought of getting first data1 and after 4sec data2
// To do this we use 'Promise chain'
// function asyncFunc1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("Success");
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             resolve("Success");
//         },4000);
//     });
// }
// // console.log("Fetching data1...");
// // let promise1 = asyncFunc1();
// // promise1.then((res) => {
// //     console.log(res);
// //     console.log("Fetching data2...");
// //     let promise2 = asyncFunc2();
// //     promise2.then((res) => {
// //         console.log(res);
// //     });
// // })

// making it simpler :-
// console.log("Fetching data1...");
// asyncFunc1().then((res) => {
//     console.log(res);
//     console.log("Fetching Data2...");
//     asyncFunc2().then((res) => {
//         console.log(res);
//     });
// })

// Another example :-
// function getData(dataId){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data :",dataId);
//             resolve("success");
//         },3000);
//     });
// }

// The below code is a perfect Structure of Promise chaining...
// in getData(1)... when it finishes, it returns getData(2). After getData(2) finished, it returns getData(3)
// console.log("Fetching id-1...");
// getData(1).then((res) => {
//     console.log(res);
//     console.log("Fetching id-2...");
//     return getData(2);
// }).then((res) => {
//     console.log(res);
//     console.log("Fetching id-3...");
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })

// the above code meaning
// // console.log("Fetching id-1...")
// // getData(1).then((res) => {
// //     console.log(res);
// //     console.log("Fetching id-2...")
// //     getData(2).then((res) => {
// //         console.log(res);
// //     })
// // })

// Even thought the above is better to understand when compared to callback hell, but there is another which better than this code to get understandable, that is async await


// Async-Await :-
// async function always returns a promise.
// await pauses the execution of its surrounding async function untill the promise is settled.

// function getData(id){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data :",id);
//             resolve("Done");
//         },3000);
//     });
// }

// async function getAllData(){
//     console.log("Fetching data-1...")
//     await getData(1);
//     console.log("Fetching data-2...")
//     await getData(2);
//     console.log("Fetching data-3...")
//     await getData(3);
// }

// getAllData();

// The above is better understanding compared to callback hell and promises..but here there is small disadvantage, which is we need to keep this code inside a new function and also we need to call that which we didnt do for promises and callback..To make some more better.... we do :-
// IIFE = Immediately invoked function expression.
// IIFE is a function that is called immediately as soon as it is defined.
// which we studied in functions&methods...[for normal and arrow functions]
// Now for async functions making default or directly without calling and naming function :-
function getData(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data :",id);
            resolve("Done");
        },3000);
    });
}

(async () => {
    console.log("Fetching data-1...")
    await getData(1);
    console.log("Fetching data-2...")
    await getData(2);
    console.log("Fetching data-3...")
    await getData(3);
})();