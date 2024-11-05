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
function isPalindrome(string){
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
}
    if (reversedString === string) {
        return (true);
    } else{
        return(false);
    }
}

console.log(isPalindrome("racecr"));