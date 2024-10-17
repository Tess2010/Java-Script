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

//Question 13 - Print the word on separate lines using for loop
let string1 = "JavaScript";
for (i = 0; i < string1.length - 1; i++) {
    console.log(string1[i]); //Prints the current character after it printed the previous one
}

//Question 14 - Use forp loop and find the sum of an array of number
let arrayA = [2,4,6,8,10]; //Declare array
let arraySum = 0; //Set variable for sum
for (let i = 0; i < arrayA.length; i++) {
    arraySum += arrayA[i]
}
console.log(arraySum);

//Question 15 - Print all the multiples of 4 between 1 and 40
for (let i = 1; i <= 40; i++) { //Create for loop
    if (i % 4 === 0) {  //determine if the number a multiple of 4
        console.log(i); //Print to console
    }
}

//While Loops Questions

//Question 16 - Print number 1 - 10
let d = 1; //Start with 1 (Initialization)
while (d <=10) { //Continue WHILE d is less or equal to 10 (Condition)
    console.log(d); //Print the value of d
    d++; //Increase d by 1 (Increment)
}

//Question 17 - Print numbers 10 - 1
let n = 10; //Initialize
while (n >= 1) { //Set condition
    console.log(n); //Print value of n
    n --; //Decrease by 1
}

//Question 18 - Print number as long as they are less than 5
let m = 0; //Initialize and set m to 0
while ( n < 5) {
    console.log(n);
    n++; //Increase by 1
}

//Question 19 - Print first 10 multiples of 3
let o = 1; //Initialize
let count = 10; // We want to print the first 10 multiples
while (o <= count) { //Continue while n is less than or equal to the count
    console.log(o * 3); //Print multiples of 3
    o++;//Increase by 1
}
//Question 20 - Declare a number, divide by 2 until it is less than 1- Print each result
let p = 50; //Start with your number
while (p >= 1) { //Continue while p is greater than 1
    console.log(p);
    p /= 2; //Divide the number by 2 each time
}

//Question 21 - Find the sum of numbers 1-50 using a while loop
let q = 1; //Set variable counter
let sumQ = 0; //Initialize sum variable
while (q <= 50) { //Condition
    sumQ += q; //Add current number to sum
    q++; //Increase by 1
}
console.log(sumQ); //Print

//Question 22 Print digit os number from right to left
let digit = 4567;
while (digit > 0){
    let lastNum = digit % 10;
    console.log(lastNum);
    digit = Math.floor(digit / 10);
}