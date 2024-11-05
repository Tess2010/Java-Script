//Question 1 - Greet Function
function greet(name){
    console.log(`Hello ${name}`);
}
greet("Teresa");

//Question 2 - Add Function
function add(x,y){
    return (x+y);
}
console.log(add (4,6));

//Question 3 - Multiply Function
function multiply(a,b){
    return (a*b);
}
console.log(multiply(2,3));

//Question 4 - isEven Function
function isEven(x){
    return (x % 2 === 0);
}
console.log(isEven(3));

//Question 5 -Square Function
function square(x){
    return (x*x);
}
console.log(square(4));

//Question 6 - toCelsius
function toCelsius(x){
    return (((x-32)/1.8));  
//return (Math.floor((((x-32)/ 1.8)*100))/100); This code is allowing me to ensure my answer is only 2 decimal points
}
console.log(toCelsius(89));

//Question 7 -greetWithTime (name & timeOfDay)
function greetWithTime(name, timeOfDay){ //Creating my function
    console.log(`Good ${timeOfDay}, ${name}`); //Printing my greeting
}
greetWithTime("Jill","morning");

//Question 8 - maxOfTwo
function maxOfTwo(x,y){ //Creating my function
    if (x > y){
        console.log(x);
        return (x);
    } else{
        console.log(y);
        return (y);
    }
}
maxOfTwo(3,8);

// Question 9 - minOfTwo Function
function minOfTwo(x,y){ //Creating my function
    if (x < y){
        console.log(x);
        return (x);
    } else{
        console.log(y);
        return (y);
    }
}
minOfTwo(3,8);

// Question 10 - isAdult Function
function isAdult(age){
    // if (age >= 18){  Another way to do the code
    //     return (true);
    // } else {
    //     return (false);
    // }
    return(age >= 18); //Shorter way to do the code
}
console.log(isAdult(19));

//Question 11 - repeatString Function
function repeatString(string, number){ //Create function
    for(let i = 1; i <= number; i++){ //Create loop 
        console.log(string); //Print
    }
}
repeatString("hello", 2);

//Question 12 - findLargest in array
function findLargest(arr){
    let largest = arr[0];
    for(let i = 0; i <= arr.length; i++){
        if (arr[i] >= largest){
            largest = arr[i]
        }
    }
    return largest;
}

let x = [4,2,8,10,26];
console.log(findLargest(x));

//Question 13 - findSmallest in array
function findSmallest(array){ //Creat function
    let smallest = array[0]; //Creat variable for smallest
    for(let i = 0; i <= array.length; i++){ //Create for loop 
        if (array[i] <= smallest){ //Create if statement
            smallest = array[i] 
        }
    }
    return smallest; 
}

let z = [26,5,10,9,2];
console.log(findSmallest(z)); //Print

//Question 14 - isPalindrome function
function isPalindrome(string){ //Create function
    let reversedString = ""; //Create variable for reversedString
    for (let i = string.length - 1; i >= 0; i--){ //Create for loop
        reversedString += string[i]; //Move string to reversedString variable
}
    if (reversedString === string) { //Create if statement
        return (true);
    } else{
        return(false);
    }
}
console.log(isPalindrome("racecar")); //Print 

//Question 15 Factorial function 
function factorial(num){
    let answer = 1;
    for (let i = 1; i <= num; i++){
        answer *= i;
    }
    return(answer)
}
console.log(factorial(6))

//Question 16 countVowels Function
function countVowels(string){ //Create function
    let counter = 0;//Create counter
    for (let i = 0; i <= string.length -1; i++){ //Create for loop to go through string
        if (string[i] == "a"){ //Create ifStatement to filter out and count the vowels
            counter++
        }
        else if (string[i] == "e"){
            counter++
        }
        else if (string[i] == "i"){
            counter++
        }       
        else if (string[i] == "o"){
            counter++
        }        
        else if (string[i] == "u"){
            counter++
        }
    }
    return(counter) //Return the counter
}
console.log(countVowels("Supercalifragilisticexpialidoshous")); //Print the # of vowels

//Question 17 reverseArray Function
function reverseArray(array){ //Create function
    return(array.reverse()) //Return the array reversed
}
let array = [1,2,3,4,5]; //Declare your array
console.log(reverseArray(array)); //Print the reversed array

//Question 18 isPrime function
function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){ //Create a for loop to determine if the number is divisible by any other number (factor)
    if (num % i === 0){ //Using "mod" to determine if there is a remainder, which would mean the number is not a prime number
        return(false)
    }
    } return(true)
}
console.log(isPrime(7)); //Print
    
//Question 19 sumArray Function
function sumArray(array){ //Create function
let sum = 0;
    for(let i = 0; i <= array.length -1; i++){
        sum += array[i];
        
    }return(sum) //Always remember that the retrun must be outside the for loop
}
let xyz =[1,2,3,4]
console.log(sumArray(xyz));

//Question 20 averageArray Function
function averageArray(array){ //Create function
    let sum = 0;
    let avg = 0;
        for(let i = 0; i <= array.length -1; i++){
            sum += array[i]; 

        } avg = sum/array.length
        return(avg) //Always remember that the retrun must be outside the for loop
        


    }
    let yz =[1,2,3,4]
    console.log(averageArray(yz));