// Fetch Api :- [API = Application Programming Interface]
// The Fetch Api provides an interface for fetching (sending / receiving) resources.
// It uses Request and Response objects.
// The fetch() method is used to fetch a resourse (data).

// Understanding some terms :-
// AJAX : It is Asynchronous JS & XML.
// JSON : JavaScript Object Notation.
// json() method : returns a second promise that resolves with the result of parsing the response body text as JSON. (input is JSON, output is JS object).

const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//     console.log("Fetching...")
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     for(let i=0;i<data.length;i++){
//         console.log(data[i].text);
//     };
// };
// getFacts();


// //----------------------------------------------------
// // To print inside our html page
// const btn = document.querySelector("#btn");
// const fact = document.querySelector("#fact");

// const getFacts = async () => {
//     console.log("Fetching...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     fact.innerText = data[0].text;
// }
// btn.addEventListener("click",getFacts);
// //----------------------------------------------------


// ** Request & Response **

// HTTP verbs :- [ HTTP = Hyper Text Transfer Protocol ]
// GET :-
// The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

// HEAD :-
// The HEAD method asks for a response identical to a GET request, but without the response body.

// POST :-
// The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

// PUT :-
// The PUT method replaces all current representations of the target resource with the request payload.

// DELETE :-
// The DELETE method deletes the specified resource.

// CONNECT :-
// The CONNECT method establishes a tunnel to the server identified by the target resource.

// OPTIONS :-
// The OPTIONS method describes the communication options for the target resource.

// TRACE :-
// The TRACE method performs a message loop-back test along the path to the target resource.

// PATCH :-
// The PATCH method applies partial modifications to a resource.

// Response status codes :-
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

// Note : HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.

