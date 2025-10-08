// var username = "sakiman"
// alert("hey man.. Good Morning!!");
// prompt("apna naam batao")
// confirm("are you sure??")

//*  -----------------------------------------------------------  *//

//! Variables – var, let, const 

// var email = "one@gmail.com"                      // decalare
// email = "two@gmail.com"                            // reasign
// var email = "navyum12@gmail.com"            // re- declare

// let age = 24                     // decalare
// age = 55                          // reasign

// const pi = 55.6                 // decalare

// console.log(username)


//*  -----------------------------------------------------------  *//


//! DATA types

//* 1). primitive                          2). Non-primitive 

// 1. Number                               1. object
// 2. String    "",'',``                      2. functions
// 3. Boolean  (true, false)            3. Array
// 4. Null
// 5. Undefine
// 6. Bigint
// 7. syntax


//!  1. Number 

// let a = 45;
// console.log(a)
// console.log(typeof (a));

//! 2. String    "",'',`` 

// let a = "shakiman"
// console.log(a)

//! 3. Boolean
// let isSunday = false;

//! difference between null and undefined 

// var a ;
// console.log(typeof a);   // undefined

// var b = null;
// console.log(b);          // object


//! 6. Bigint

// var a = 45827397297287245n;   //! a pow 53-1
// console.log(a);
// console.log(typeof (a));



//************************************* */
//! Non-Primitive
//************************************* */

//? 1. object
// var Bablu = {
//     Fname : "BAblu",
//     LNAme : "lemshar",
// }

// console.log(Bablu);


//? array
// let arr = ["red", 32, true]

//? function
// function sum(){
//     return 2+4
// }
// sum()

//*  -----------------------------------------------------------  *//


//!>>>>>>>>>>>>             EXPRESSIONS AND OPERATORS           <<<<<<<<<<<<<<<<<<<<!//

//*                 5+20             5 is operands
//*                                  + is operator 
//*                                  and combination of both called Expression

//?                   1. Assignment operator 
//?                   2. Arithmetic operator 
//?                   3. Comparison operator  
//?                   4. Logical operator     
//?                   5. String operator      


//*::::::::::::::::        1. Assignment operators       :::::::::::::::::::::*//

//?   An Assignment operator assign a value to its left operand based on the value of its right operand.
//?   the simple assignment operator is equal (=)



// ?>>>>>      a)    =          : Assign a value to a variable
// ?>>>>>      b)    +=       : Add and assign
// ?>>>>>      c)    -=        : Subtract and assign
// ?>>>>>      d)    *=       : Multiply and assign
// ?>>>>>      e)    /=       : Divide and assign


// let money = 10;
// money += 5;
// money -= 3;
// money *= 2;
// money /= 2;

// console.log(money);



//*::::::::::::::::        2. Arithmetic operators       :::::::::::::::::::::*//

//?          An Arithmetic operator takes numerical values
//?          (either literal or variable) as their operand stand
//?          return a single numerical value.



// let myMoney = 35;
// let yoursMoney = 20;


// console.log(myMoney + yoursMoney);      //* Addition            +
// console.log(myMoney - yoursMoney);      //* Subtraction         -
// console.log(myMoney * yoursMoney);      //* Multiplication     *
// console.log(myMoney / yoursMoney);      //* Divide                /
// console.log(myMoney % yoursMoney);      //* Module            %



//! Syntax Sugar
//?>>>>>>>>>       Increment and decrement operator        <<<<<<<<<<//
//* operator : x++ or ++x or x-- or --x
//? If used postfix, with operator after operand (for example, x++),
//? the increment operator increase and return the value before incrementing.If



// let money = 10;
// console.log(money++);       //! postfix
// console.log(++money);       //! prefix




//*::::::::::::::::        3. Comparison (Relational) operators       :::::::::::::::::::::*//

//? A comparison operator compare its operands and 
//? return a logical value based on whether the comparison is true.



// let giyu =   10;
// let Goku =   8;

// //*    equal to ==
// console.log(giyu == Goku);

// //*    Not equal to  !=
// console.log(giyu != Goku);

// //*    Greater then  >
// console.log(giyu > Goku);

// //*    Greater then equal to         >=
// console.log(giyu >= Goku);

// //*    Less then                      <
// console.log(giyu < Goku);

// //*    Less then equal to            <=
// console.log(giyu <= Goku);




//*::::::::::::::::        4. Logical operator      :::::::::::::::::::::*//
//? it also returns value in boolean

// let giyu =   10;
// let Goku =   8;


//?  1.      Logical AND (&&)
// console.log(giyu>5 && Goku>5);


//?  2.      Logical OR (||)
// console.log(giyu>12 || Goku>10);


//?  3.      Logical NOT (!)
// let Goku =  8;
// console.log(!true);
// console.log(!false);



//*::::::::::::::::        5. String concatenation (operators)       :::::::::::::::::::::*//

//? The concatenation operator (+) concatenates two string values together, 
//? returning another string that is the union of the two operand strings.

// let FName = "Angel";
// let LName = "Priya";

// console.log(FName + LName);


//*  -----------------------------------------------------------  *//

//! Template Literals

//? Template Literals are special strings in JavaScript that allow you to:

//?  insert variables easily
//? write multi-line strings
//? add expressions directly inside strings

// ?They are enclosed using backticks ( ` ) instead of quotes (' or ").

//* Without Template Literal:
// let namee = "Nayyum";
// let message = "Hello " + namee + ", welcome to JavaScript!";
// console.log(message);

//* With Template Literal: 
// let namee = "Nayyum";
// let message = `Hello ${namee}, welcome to JavaScript!`;
// console.log(message);

// let a = 10;
// let b = 5;
// console.log(`The sum of ${a} and ${b} is ${a + b}.`);

//*  -----------------------------------------------------------  *//