//JavaScript Arrays Practice 
//Question 1 - Declare & print an array
let array = [1,2,3,4,5]; //Declaring my array
console.log(array); //Printing to console

//Question 2 - Declare array of your favorit fruit & print the first one
let fruit = ["strawberries", "blueberries", "watermelon", "raspberries", "blackberries"];//Declare your fave fruits
console.log(fruit[0]); //Print only the first one

//Question 3 - An array of 5 number  print the sum
let array2 = [2,4,6,8,10]; //Declare your array
let sum = 0; //
for (let i = 0; i < array2.length; i++) {
    sum += array2[i]
}
console.log(sum);

//Question 4 - Array of 5 strings use loop, print each on a new line
let stringArray = ["Love", "Live", "Laugh", "Peace", "Faith"]; //Declare string array
for (let i = 0; i <= stringArray.length -1; i++) { //Create loop
    console.log(stringArray[i]); //Print array
}
//Question 5 - Array of number -Print the largest
let array3 = [1,3,5,7,9];
let largest = array3[0];
// Create for loop
for (let i = 0; i < array3.length; i++){
    //This tells me that if the number is larger than this number it now bedomes the largest number.
    if (array3[i] > largest) {
        largest = array3[i];
    }
}    
console.log("The largest number is " + largest);

//Question 6 - Array of numbers, print smallest
let array4 = [10,5,15,23,2];
let smallest = array4[0];
// Create for loop
for (let i = 0; i < array4.length; i++){
    //This tells me that if the number is smaller, then it now becomes the smallest number.
    if (array4[i] < smallest) {
        smallest = array4[i];
    }
}    
console.log("The smallest number is " + smallest);

//Question 7 - Print the average of the array of numbers (Had a little trouble with this one)
let array5 = [77,57,55,54,53]; //Declare your array
let sumA = 0; //Declare your sum
for (let i = 0; i < array5.length; i++) { //Create a for loop
    sumA += array5[i] //Calculate the sum
}
let average = sumA / array5.length; //Calculate the average
console.log("The average of the array of numbers is " + average); //Print

//Question 8 - Declare an array and print all even numbers
let array6 = [2,3,5,6,7,9,10,11,13,14]; //Declare array
for (let i = 0;i < array6.length; i++) { //Create loop
if (array6[i] % 2 === 0){ //Determine if number is even
    console.log(array6[i]);  //Print
    }
}
//Question 9 - Declare an array and print all odd numbers
let array7 = [2,3,5,6,7,9,10,11,13,14]; //Declare array
for (let i = 0;i < array7.length; i++) { //Create loop
if (array7[i] % 2 === 1){ //Determine if number is odd
    console.log(array7[i]); //Print
    }
}

//Question 10 - Declare array of strings, check for a specific string - pring "Found" or "Not found"
let string2 = ["Peaches", "Plums", "Nectarines", "Clementines", "Tangerines"];
for (let i = 0; i < string2.length; i++) {
    if (string2[i] === "Tangerines") {
        console.log("Found");
    } else {
        console.log("Not found");
    }
}


//Question 11 - Declare an array and reverse print
let array8 = [1,2,3,4,5,6,7,8];
for (let i = 7; i >= 0; i--) {
    console.log(array8[i]);
}

//Question 12 - Declare an array, sort and print in ascending order
let arrayB = [4, 23, 7,15, 3, 20];//Declare array
arrayB.sort((a, b) => a - b); //This stores the first 2 numbers in the array and compares them. Determines if it is positive or negative and prints the lowest num first.
console.log(arrayB);//Print

//Question 13 -Declare an array, sort and print in descending order
let arrayC = [10, 23, 7,15, 3, 20];//Declare array
arrayC.sort((a,b) => b - a); //This stores the first 2 numbers in the array and compares them. Determines if it is positive or negative and prints the lowest num first.
console.log(arrayC);//Print

//Question 14 -Declare empty array, use a loop to add number 1-10 and print
let array9 = []; //Declare blank array
for (let i = 1; i <= 10; i++){ //Create for loop
    array9.push(i); //Push number to the array
}
console.log(array9); //Print array

//Question 15 - Declare array of 5 numbers. Print the product of all numbers in the array
let arrayD = [1,2,3,4,5];
let product = 1;
for (let i = 0; i <= 4; i++) {
    product *= arrayD[i];
}
console.log(product);

//Question 16 - Declare array of name and add name at end and print new array
let arrayE = ["Tess", "June", "Jill",];
arrayE.push("Beth");
console.log(arrayE);

//Question 17 - Declare array of names and remove the last name, print
let arrayF = ["Tim", "Bob"]; //Declare array
arrayF.pop(); //POp removes the last element in the array
console.log(arrayF); //Print

//Question 18 - Declare array, use 'map function' to create new array that is doubled
let arrayG = [2,4,6]; //Declare array
const doubled = arrayG.map(num => num * 2);//Declare new array using the map function ('num is a place holder') 
console.log(doubled);//Print

//Question 19 - Declare array, use 'filter function' create new array with numbers > than 10
let arrayH = [10,1,13,,8,16];
const greater = arrayH.filter(num => num>10); //Filter function takes the number and filter to get what you need
console.log(greater);

//Question 20 - Use 'reduce function' to find the sum of an array
let nums = [2,3,4,6,7,8];
let sum5 = nums.reduce((x,y)=> x + y, 0);  //Reduce function reduces the numbers to a single digit
console.log(sum5);

//Question 21 - Use 'indexOf method to find the index of a specific num in the array, print the index
let arrayI = [0,1,2,3,4];
let index = arrayI.indexOf(3); //Get the index of the number in the array
console.log(index);

//Question 22 - Use the include method to see if a specific name exists
let nom = ["Dee","Nate", "Mikey"];
let ans = nom.includes("Nate");
if (ans){
    console.log("Found");
}   
else {
    console.log("Not found");
    }

//Question 23 - Use the 'slice method' to creat a new array with the first 3 numbers, print it
let arrayJ = [2,3,4,5,6];
let newArray = arrayJ.slice(0,3); //This is where the slice function "slices out" the chosen elements after given index
console.log(newArray);

//Question 24 - Use 'splice method' to remoce the second & third numbers from the arrat, print updated array
let arrayK = [0,1,2,3,4,5];
arrayK.splice(1,2); //This is where you "splice (remove)" specific elements
console.log(arrayK);

//Question 25 - Declare a string, concatenate all strings into a single string, print
let stringArray1 = ["A","b","C","d"];
let newString = stringArray1.join("");//Create new string array using join to concantenate the original string array
console.log(newString);