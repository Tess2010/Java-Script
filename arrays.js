//JavaScript Arrays Practice 
//Question 1 - Declare & pring an array
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
console.log("The average of the array of numbers is " + average);

//Question 8 - Declare an array and print all even numbers
let array6 = [2,3,5,6,7,9,10,11,13,14];
for (let i = 0;i < array6.length; i++) {
if (array6[i] % 2 === 0){
    console.log(array6[i]);
    }
}
//Question 9 - Declare an array and print all odd numbers
let array7 = [2,3,5,6,7,9,10,11,13,14];
for (let i = 0;i < array7.length; i++) {
if (array7[i] % 2 === 1){
    console.log(array7[i]);
    }
}