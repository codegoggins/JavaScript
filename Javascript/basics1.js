//Brings an alert dropdown
//alert("Hello World")

//We can open developers tools and write js code in the console

//console.log()
//prints in console
//console.log("Hello World");
// console.error("Hello");
// console.warn("Hi");

//  Best site for web dev documentation   https://developer.mozilla.org/en-US/

//We can learn about console from the above link and many other also.

//for declaring variables we have var,let,const
//var declares globally
//let is used in scopes and can be reassigned in the same scope

//if (1) {
//  let a = 10;
//console.log(a); //we get output 30 because value of let can be re-assigned
//}
//let b = a; 
//we cannot access a because its scope is local to the block in which it is declared
//console.log(b);


//const
// const b = 30;
// b = 21;
// console.log(b);
//we get error


//string ,numbers , boolean , null ,undefined

//**const variables can be declared only once in a program
//const name = 'John';
//const age = 30;
// const rating = 4.5;
//boolean value
// const isCool = true;
//variable which contains null
//variable which contains null
//variable which contains null
// const x = null;
//declaring a variable undefined
// const y = undefined;
//when we want variable to be undefined using let,just declare the variable without initialising any value to it
// let z;

//to get what type of variable one is
// console.log(typeof(age)); //we get number in console as output
// console.log(typeof(rating)); //we get number in console as output
// console.log(typeof(isCool)); //we get boolean in console as output
// console.log(typeof(x)); //**we get object in console as output
// console.log(typeof(y)); //we get number undefined in console as output
// console.log(typeof(z)); //we get number undefined in console as output

//CONCATENATION
//const name = 'John';
//const age = 30;
//console.log('My name is ' + name + ' and I am ' + age + ' years old.');

//TEMPLATE STRING (WITHOUT USING THE CONCATENATION OPERATOR)
//console.log(`My name is ${name} ans I am ${age} years old`)
//const sne = `My name is ${name} ans I am ${age} years old`;
//console.log(sne);


//STRING METHODS
//const s = 'hello world';
//converts strings to upper case
//console.log(s.toUpperCase());
//converts strings to lower case
//const t = 'HeLlO WoRld';
//console.log(t.toLowerCase());
//substring
//prints output hel
//console.log(s.substring(0, 3));

//using split
//splits a string into an array
//takes parameter depending on which we have to split the array
//const s = 'Hello';
//split on empty space parameter
//console.log(s.split(''));

//create an array from the string below
//const st = 'Tech,code,sky,alien';
//console.log(st.split(','));

//ARRAYS
//declaring array
// const numbers = new Array(1, 2, 3, 4, 5);
// const odd = [1, 3, 5];
// const fruits = ['Apples', 'oranges', 'grapes'];
// console.log(numbers);
// console.log(odd);
// console.log(fruits);

//we can have multiple data types in the same array
// const data = ['Apples', 'oranges', 'grapes', 10, true];
//console.log(data);
//add element at the end
// data.push('pear');
//add element at the beginning
// data.unshift(34);
// console.log(data);

//to check if something is an array or not
// console.log(Array.isArray(fruits)); //true
// console.log(Array.isArray('hello')); //false

//to get index of elements
// console.log(fruits.indexOf('oranges')); //1

//OBJECT LITERALS
//key value pairs
//separated by commas
// const person = {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 30,
//         hobbies: ['music', 'movies', 'sports'],
//         //object within an object\
//         address: {
//             street: '50 Avenue Park',
//             city: 'Boston',
//             state: 'MA'

//         }
//     }
// console.log(person.address.city); //Boston
// console.log(person.firstName); //John
// console.log(person.hobbies[0]); //Movies

//Suppose we want to use these as variables(Part of ES6)
//this is termed as destructuring
// const { firstName, lastName, age, address: { city } } = person;
// console.log(city);
// console.log(age);
// console.log(firstName);
//we are able to use properties as variables

//we can add properties using destructuring too
// person.email = 'john@gmail.com';
// console.log(person);

//ARRAYS OF OBJECTS
// const todos = [{
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Dentist',
//         isCompleted: false
//     }
// ];
// console.log(todos);
// console.log(todos[1].text);

// JSON
//Javascript Object Notation
// Format in which data is sent to the server
//JSON format is same as above,only double quotes around keys and strings.No single quotes in Json
//Suppose we want the abov data to be ready to give to the server.So first we will have to convert it into a json format

//const todoJson = JSON.stringify(todos);
//console.log(todoJson);

// LOOPS
// const todos = [{
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist',
//         isCompleted: false
//     }
// ];



//FOR LOOP
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
//while loop
// let i = 1;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
//looping the array
//not the best way to loop through array
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }


//FOR OF LOOP 
//much readable
//for(let variable of arrayname)
// for (let todo of todos) {
//     console.log(todo.id);
// }

//High order array methods
//forEach,,map,filter

//FOR EACH
//todos.forEach(callbackfunction(var){function body})
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });


//MAP
//returns an array
//todos.map(callbackfunction(var){function body})
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
//gives an array of text
// console.log(todoText);


//FILTER
//filters according to condition
//suppose we want todos which have true as value
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);
//so we get the all the properties with isCompleted true



//suppose we want text of only those objects whose isCompleted is true
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });
// console.log(todoCompleted);



//CONDITIONALS
//condition is true and prints x is 10
const x = 10;
if (x == 10) {
    console.log('x is 10');
}
//Now if we convert b to string 10 ,then also the conditionis true and it prints b is 10.Because == does not matches data types.
const b = '10';
if (b == 10) {
    console.log('b is 10');
}
//So to solve this we use ===.
//=== check value as well as data type
//We can always use === as conditionals

//ternary operator
const color = x > 10 ? 'red' : 'blue';
console.log(color);

//switch
switch (color) {
    case 'red':
        console.log("Hello");
        break;
    case 'blue':
        console.log("Bye");
        break;
}



//FUNCTIONS
//putting default value in parameters,when we have passed nothing in arguments
// function addNums(num1 = 1, num2 = 2) {
//     console.log(num1 + num2);
// }
// addNums();
//output 3


//when we have given arguments
function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}
addNums(5, 5);

//returning value
function addNums1(num1 = 1, num2 = 2) {
    return num1 + num2;
}
console.log(addNums1(5, 15));

//ES6
//Using fat arrow to declare a function
//instead of using keyword function , we use a variable
const addNums3 = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}
console.log(addNums3(100, 20));

//benifits of using arrow function
//If we dont have variable and other statements in the function,i.e we have only one statement we can execute it like this:

//to print
const addNums4 = (num1 = 1, num2 = 2) => console.log(num1 + num2);
addNums4(5, 50);

//just return the value
//we dont even need to use return keyword
const addNums5 = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNums5(130, 50));

//suppose we have only one parameter
//we can remove the parameter paranthesis
const increment = num1 => num1 + 1;
console.log(increment(10));


//OBJECT ORIENTED PROGRAMMING