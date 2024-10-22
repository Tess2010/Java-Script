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