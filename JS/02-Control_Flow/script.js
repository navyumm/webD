//! Lecture 2: Control Flow + Loops

//!>>>>>>>>>>>>>            CONTROL STATEMENT AND LOOPS           <<<<<<<<<<<<<<<<<<<<!//

//*                           if, if...else, else if,             
//*                           conditional (ternary) operator   
//*                           Switch Statement   
//*                           While Loop        
//*                           Do-While Loop    
//*                           For Loop             
//*                           break and continue    

//*::::::::::::::::         1).  if, if...else, else if         :::::::::::::::::::::*//

//!  if statement
//?  if is used when you want to run a block of code only if a condition is true.


// let age = 18;

// if (age >= 18) {
//   console.log("You are eligible to vote.");
// }


//!   if...else statement
//?  Used when you want to perform one action if true, and another if false.

// let marks = 40;

// if (marks >= 50) {
//   console.log("You passed the exam!");
// } else {
//   console.log("You failed. Try again!");
// }


//!   if...else if...else
//?  Used when you have multiple conditions to check.


// let score = 85;

// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 75) {
//   console.log("Grade B");
// } else if (score >= 50) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }


//*::::::::::::::::          2). Conditional (ternary) operator          :::::::::::::::::::::*//


// let Target =400;
// if (Target == 400){
//         console.log("We Won the match 😍");
// }else{
//         console.log("We loss the match 😭");
// }


//? The Conditional (ternary) operator is the only JavaScript operator
//? that takes three operands.
//!     syntax  >>  
// *   VariableName = (condition)? value1:value2 


//?>>>>>>>>>>>>>>>         by using ternary operator         <<<<<<<<<<<<<<<<<//


// let Target = 400;
// (Target==399)?  console.log("We Won the match 😍") : console.log("We loss the match 😭")

// var age = 19;
// console.log((age>=18)? "you are eligible to vote" : "you are not eligible to vote");



//*::::::::::::::::         3). Switch Statement          :::::::::::::::::::::*//

//? Used when you have to compare one value with many possible cases — a cleaner version of many if...else if.


// let day=1;
// if(day==1){
//         console.log("sunday")
// }
// else if(day==2){
//         console.log("monday")
// }
// else if(day==3){
//         console.log("tuesday")
// }else{
//         console.log("wednesday")
// }

//* The JavaScript switch statement is used to execute one code from multiple expressions.


// let day=1;

// switch(day){

//         case 1:  
//         console.log("sunday")

//         case 2:  
//         console.log("Mon")

//         case 3:  
//         console.log("Tue")

//         case 4:  
//         console.log("Wed")

//         case 5:  
//         console.log("thur")

//         case 6:  
//         console.log("Fri")

//         case 7:  
//         console.log("sat")

//         default:  
//         console.log("Invaild Input")
// }


//*  🙌 Break statement
//* Terminates the current loop, switch, or label 
//* statement and transfers
//* program control to the statement following the terminated statement. 

// let day=0;

// switch(day){

//         case 1:  
//         console.log("sunday")
//          break;

//         case 2:  
//         console.log("Mon")
//          break;

//         case 3:  
//         console.log("Tue")
//          break;

//         case 4:  
//         console.log("Wed")
//          break;

//         case 5:  
//         console.log("thur")
//          break;

//         case 6:  
//         console.log("Fri")
//          break;

//         case 7:  
//         console.log("sat")
//          break;

//         default:  
//         console.log("Invaild Input")
// }




//*::::::::::::::::              4. While Loop statement               :::::::::::::::::::::*//

//? Used when you don’t know how many times you’ll loop — it runs until a condition becomes false.
//? A while loop is used to repeatedly execute a block of code as long as a specified condition is true. 
//! Syntax 
//      while (condition)  
//      {  
//         code to be executed  
//     }  



// let num = 7;
// debugger;
// while(num<=10){
//         console.log(num);
//         num++;
// }



//*::::::::::::::::              5. Do-While Loop statement               :::::::::::::::::::::*//

//? Similar to while, but it runs at least once even if the condition is false.
//? A do-while loop is similar to a while loop, but it always executes the block of code at least once, even if the condition is initially false. 

//! Syntax
//      do{  
//         code to be executed  
//     }while (condition);  


// let num = 11;

// do{
//         console.log(num);
//         num++;
// }
// while(num<=10)


//*::::::::::::::::              6. For Loop statement               :::::::::::::::::::::*//

//? Used when we know how many times to repeat something.
//? Also, it is shortest way of while and do while loop

// let num = 2;

// do{
//         console.log(num);
//         num++;
// }
// while(num<=10)


//! Syntax :
// for (initialization; condition; increment/decrement)  
// {  
//     code to be executed  
// }


// for(let num=2; num<=10; num++){
//         console.log(num);
// }

//* Print the table of 7 


//*::::::::::::::::              7. Break & Continue             :::::::::::::::::::::*//

//! break
//? Stops the loop immediately.

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }


//! continue
//? Skips the current iteration and moves to the next one.

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }