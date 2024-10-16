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