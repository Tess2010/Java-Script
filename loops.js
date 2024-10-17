// Practice questions for loops in js
//For Loops

//Question 1 - Count numbers from 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i) ;
}

//Question 2 - Even numbers from 2-20
for (let num = 2; num <= 20; num += 2) {
    console.log(num);
}

// Question 3 - Count down from 10-1
for (let num1 = 10; num1 >= 1; num1 --) {
    console.log(num1);
}

//Question 4 - Multiplication table of 5

for (let num2 = 1; num2 <= 10; num2 ++) {
    console.log(`5 * ${num2} = ${5 * num2} `);

}

//Question 5 - Declare & print an array of names
//declare array
let names = ["Tyrese", "Jaydis", "Derrick", "Luna", "Nahmir"];
//Remember that your array starts at 0 so you must end at the 'name of the array' - 1"
for(let i = 0; i <= names.length - 1; i ++) {
    console.log(names[i]);
}

//Question 6 - Sum of numbers 1-100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Question 7 - Declare 5 number array and print largest with step by step
// Initialize array
let numbers = [19, 3, 6, 24, 14];
// Set variable for largest number to first number in array
let largest = numbers[0];
// Create for loop
for (let i = 1; i < numbers.length; i++) {
//This tells me that if the number is larger than this number it now bedomes the largest number.
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log ("The largest number is: " + largest)

//Question 8 - For loop for 1-20; Mutilples of 3 print 'Fizz'; Multilples of 5 Print 'Buzz'
//Multilples of 3 & 5 Print 'FizzBuzz'
//Create for loop
for (let i =1; i <=20; i++) {
//This how you find out if the number is a multiple of 3 & 5 
    if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
//This how you find if the number is a multiple of 3
    } else if (i % 3 === 0) {
        console.log("Fizz"); 
//This how you find if the number is a multiple of 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
//If it's not a multiple of 3 or 5, print the number itslef.
    } else {
        console.log(i);
    }
}
//Question 9 print the first 10 Fibonacci figures
//Declare the first two numbers in the sequence
let fibnum1 = 0; //First Fibonacci number
let fibnum2 = 1; //Second Fibonacci number
//We can print the first 2 numbers as we already declared them
console.log(fibnum1);
console.log(fibnum2);
//Create a for loop to print the remaining 8 Fibonacci numbers
for (let i = 2; i < 10; i++) {
    let nextnum = fibnum1 + fibnum2; //Calculates the next Fibonacci number
    console.log(nextnum);
//Now you have to update the fibnum1 & fibnum2 for the next number
    fibnum1 = fibnum2;
    fibnum2 = nextnum;
}

//Question 10 - For loop to reverse a String & print the reversed Strin
//Create first string and reversed string "holder"
let string = "I love my grandchidren!";
let reversedString = "";
for (let i = string.length - 1; i >= 0; i --) { //Create for loop
    reversedString += string[i]; //I JavaScript, use brackets to get the characters in a string not parenthesisgit
}
console.log(reversedString);

//Question 11 - Declare array of integers & print the odd numbers
let array = [1, 2, 2, 3, 4, 5, 5, 6, 9];    //Declare array
for (let i = 0; i < array.length; i++ ) { //Creat for loop
    if (array[i] % 2 !== 0) {   //ifStatement 
        console.log(array[i]);
    } 
}

//Question 12 - Print factorial of the number 6 using a for loop
let facNum = 6; //Declare your factorial number
let answer = 1; //Set the answer to 1
for (let i = 1; i <= facNum; i++) { //Write your for loop
    answer *= i;
}
console.log (answer); //Print to console




