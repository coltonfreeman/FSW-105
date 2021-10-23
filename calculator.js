var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number:  ");
var enteredOperation = readlineSync.question("Please enter the operation to perform *(add, sub, mul, div): ");

//Function to perform addition operation
function myAddition(num1, num2){
    return num1 + num2;
}
//Function to perform subtraction operation
function mySubtraction(num1, num2){
    return num1 - num2;
}
//Function to perform multipication operation
function myMultipication(num1, num2){
    return num1 * num2
}
//Function to perform divison operation
function myDivison(num1, num2){
    return num1 / num2
}
function customCalulator(num1, num2, myOperation){
   if (myOperation =="add"){
       //Call the addition function
       console.log("Number-1" + num1 + "added with Number-2 " + num2 + " returns: " + myAddition(num1, num2));
   } else if (myOperation == "sub"){
       // Call the subtraction function
       console.log("Number-1" + num1 + "subtrated from Number-2 " + num2 + " returns: " + mySubtraction(num1, num2));
   } else if (myOperation =="mul"){
       //Call the multiplication function
       console.log("Number-1" + num1 + "mulitplied with Number-2 " + num2 + " returns: " + myMultipication(num1, num2));
    }else if (myOperation == "div"){
        //Call the divison function
        console.log("Number-1" + num1 + "divided by Number-2 " + num2 + " returns: " + myDivison(num1, num2));
    }else {
        //User provided a different operation
        console.log("Operation not identified Please try again!");
    }
}
//Function Call
customCalulator(firstNum, secondNum, enteredOperation);
