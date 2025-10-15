//!>>>>>>>>>>>>>             Functions in JavaScript          <<<<<<<<<<<<<<<<<<<<!//

//*                          Function Definition    
//*                          Calling a Function     
//*                          Function Parameter     
//*                          Function Arguments     
//*                          Function expression     
//*                          Return keyword          
//*                          Anonymous Function      
//*                         Arrow Function



//*::::::::::::::::              1. Function Definition              :::::::::::::::::::::*//


// let num1 = 20;
// let num2 = 10;
// let num3 = 15;

// console.log("Sum of num1 and num2  " + (( num1 + num2)/2));
// console.log("Done");
// console.log("Sum of num2 and num3 " + ((num2 + num3)/2));
// console.log("Done");



//? Before we use a function, we need to define it. 

//! Syntax
// function functionName(){
  // Code to be executed 
// }

// function sum(){
//   let num1 = 20;
//   let num2 = 10; 
// console.log(num1 + num2);
// }

// A function definition (also called a function declaration, or function statement) 
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {...}.


//*::::::::::::::::              2. Calling a Function              :::::::::::::::::::::*//

//?  Defining a function does not execute it.
//?  A JavaScript function is executed when "something" invokes it (calls it).

// //* function define
// function sum(){
//   let num1 = 20;
//   let num2 = 10; 
// console.log(num1 + num2);
// }

// //* function call
// sum();



//*:::::::::::::              3. Function Parameter vs Function Arguments              :::::::::::::::::::::*//


//?  Function parameters are the names listed in the function's definition. 
//?  Function arguments are the real values passed to the function.

//* Function Parameter
// function sum(num1, num2){
  // let num1 = 20;
  // let num2 = 10; 
// console.log(num1 + num2);
// }

// //* Function Arguments 
// sum(20,10);
// sum(30,10);
// sum(25,10);

//? jab hume variable ki values change krnege than hmara udhar 
//? function parameter and function arguments use me aa jata hai




// 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫 

//! Why Functions? 

//? You can reuse code: Define the code once, and use it many times.
//? You can use the same code many times with different arguments, 
//? to produce different results.

// OR

//? A function is a group of reusable code which can be called anywhere 
//? in your program. This eliminates the need of writing the same code 
//? again and again.

// OR

//? A function is a block of code designed to perform a particular task.
//? It helps in code reusability and modularity.

//* DRY : DO Not Repeat yourself


//! Practice Questions

//* Create a function called printMultiplicationTable that takes a number as a parameter and prints the multiplication table for that number up to 10.

// function printMultiplicationTable(table){
//   let a=0;
//   while(a<10){
//     a++
//     console.log(table + "*" + a +" = " + (table*a));
// }

// }
// printMultiplicationTable(11)

//* Write a function called checkNumber that takes a number as a parameter and prints "Even" if the number is even and "Odd" if it's odd.

// function checknumber(num){
//   let a= num%2==0 ? "even number" : "odd number"
//   console.log(a)
// }

// checknumber(22) // even
// checknumber(5) // odd

//* Write a function called checkPassword that takes a password as a parameter and prints "Valid" if the password is at least 8 characters long and "Invalid" otherwise.

// function checkpassword(pass){
//   let password = pass.length >= 8 ? "Valid" : "invalid";
//   console.log(password);
// }
// checkpassword("1233112")        //invalid
// checkpassword("1233112312")     // valid


// var changetype = 1234567
// console.log(toString changetype)




//!:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//*::::::::::::::::              4. Function expressions             :::::::::::::::::::::*//


//? A function can be stored in a variable.

//* function define
// function sum(){
//   let num1 = 20;
//   let num2 = 10; 
// console.log(num1 + num2);
// }

// //* function call
// var funExp = sum();
// funExp;




//*::::::::::::::::              5. Return Keyword             :::::::::::::::::::::*//

//? In JavaScript, the return keyword is used within a function to specify 
//? the value that the function should return when it is called.

//? When a function is invoked, 
//? the return statement is used to send a value back to the calling code. 


// //* function define
// function sum(num1, num2){ 
// return num1+num2;
// }

// //* function call
// var funExp = sum(10,20);
// console.log(funExp);



//? It's important to note that the return statement not only provides a value 
//? but also terminates the execution of the function. 

//? Once a return statement is encountered, the function exits, 
//? and any code after the return statement will not be executed. 

//? If a function doesn't have a return statement or if it has a return statement without a value, 
//? the function will return undefined by default.








//*::::::::::::::::              6 ️  . Anonymous Function            :::::::::::::::::::::*//

//? An anonymous function in JavaScript is a function that does not have a name.

//?  Unlike named functions, which have an identifier 
//? that can be used to refer to them elsewhere in the code, 

//? anonymous functions are typically used where the function is either short-lived 
//? or doesn't need to be referenced again.

// //* function define
// var sum = function (num1, num2){ 
// return num1+num2;
// }

// //* function call
// var funExp = sum(10,20);
// console.log(funExp);


//*::::::::::::::::              7 ️  . Arrow Function            :::::::::::::::::::::*//


//? Normal way of defining a function  
// function sum(num1, num2=5){ 
// return num1*num2;
// }

// var funExp = sum(10,2);
// console.log(funExp);



//? using fat arrow function of defining a function  

// const sum =() => {}



// const sum= () => {
//    return `sum of two number is : ${ (num1=10) + (num2=15)}`
// }

// console.log(sum());

//? in fat arrow function when we have a single line statement 
//? then we don't need to use return 

// const sum = () => `sum of two number is : ${ (num1=10) + (num2=15)}`


// console.log(sum());



//*************************************************************************************** */
//! ************************************************************************************* */


//!>>>>>>>>>>>>>>>>>             Arrays in JavaScript                  <<<<<<<<<<<<<<!//

//? Using var 

// let friend1 = Bablu;
// let friend2 = Harsh;
// let friend3 = Frost;
// let friend4 = Janvi;


//? Using Array

//! 1. By array literal
// let friends = ["Bablu",17, "Harsh",17, "Frost",17, "Janvi",19]

//! 2. By creating instance of Array directly (using new keyword)
// var friends = new Array ();
// friends[0] = "Bablu";
// friends[1] = "Harsh";
// friends[2] = "Janvi";

//! 3. By using an Array constructor (using new keyword) 
// let arr = new Array("")

//? An array is a special type of variable that can hold multiple values in one variable.


// let fruits = ["Apple", "Banana", "Mango"];

//* Example 1: Accessing Array Elements

// console.log(fruits[0]);     // Apple
// console.log(fruits[2]);     // Mango


//* Example 2: Array Length

// console.log(fruits.length); // 3


//* Example 3: Looping Through an Array 

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//? -------------------------------------------------------------------------------------------- ?//

//! Common Array Methods:

// |        Method      |            Description            |               Example                  |
// | ---------------- | ---------------------------- | ------------------------------ |
// |        push()       |          Add at end                |       fruits.push("Orange")      |
// |        pop()         |            Remove last            |            fruits.pop()                 |
// |        unshift()    |           Add at start              |   fruits.unshift("Pineapple")   |
// |      shift()          |          Remove first              |          fruits.shift()                   |
// |      slice()          |      Copy part of array         |         fruits.slice(1,3)               |
// |     splice()         | Add/remove at position      |        fruits.splice(2,1)             |


//? -------------------------------------------------------------------------------------------- ?//


//*************************************************************************************** */
//! ************************************************************************************* */






//!>>>>>>>>>>>>>>>>>             Object in JavaScript                  <<<<<<<<<<<<<<!//

//? An object stores data in key-value pairs.
//? Used to represent real-world entities.


//* Example 1: Creating an Object

// let student = {
//   name: "Amit",
//   age: 20,
//   course: "CSE",
//   isPresent: true
// };


//* Example 2: Accessing Values

// console.log(student.name);           // Amit
// console.log(student["course"]);      // CSE


//* Example 3: Updating Values

// student.age = 21;
// student.city = "Delhi";          // adding new property
// console.log(student);


//!>>>>>>>>>>>>>>>>>             COMBINING ARRAYS & OBJECTS                 <<<<<<<<<<<<<<!//

//* Example 1: Array of Objects
// let students = [
//   { name: "Amit", age: 20 },
//   { name: "Priya", age: 21 },
//   { name: "Rohit", age: 22 }
// ];

// students.forEach((stu) => {
//   console.log(stu.name + " is " + stu.age + " years old.");
// });


//* Example 2: Object Containing Arrays
// let classroom = {
//   teacher: "Mr. Sharma",
//   students: ["Amit", "Priya", "Rohit"]
// };

// console.log(classroom.students[1]); // Priya



//*************************************************************************************** */
//*************************************************************************************** */