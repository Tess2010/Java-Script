//ARRAY QUESTIONS:
//Ques. 1 -Create an array of favorite color and print the first one
let array = ["orange","purple","red","black","blue"]; //Array of avorite colors
    console.log(array[0]);//Print first color in array

//Ques. 2 -Declare an arry of #s and print the sum
let array2 = [1,2,3,4,6,7,8,9]; //Declare an array
let sumOfArray = 0; //Declare sum for storage
    for(let i = 0; i < array2.length; i++){//Create for loop to go through array
        sumOfArray += array2[i]//Get sum
    }
    console.log(sumOfArray);//Print sum to console

//Ques. 3 -Declare string array and print each on a new line
let stringArray = ["Tyrese","Jaydis","Derrick","Luna","Nahmir"];
    for(let i = 0; i <= stringArray.length - 1; i++){
        console.log(stringArray[i]);
    }

 //Ques. 4 -Declare an array, find the maximum and print the result
let arr = [2,4,6,8]; //Declare array
let maximum = arr[0]; //Create variable to hold maximum
    for(let i = 0; i < arr.length; i++){ //Create for loop to filter through array
        if (arr[i] > maximum){ //Create ifstatement to determine if new # is maximum
            maximum = arr[i];//Create new maximum

        }
    } console.log(maximum);//Print

//Ques. 5 - Declare array, reverse and print reserved array
let arr1 = [2,4,6,8,10];
    for(let i = 4; i >= 0; i--){
        console.log(arr1[i]);
    }

//Ques. 6 -Declare array, use filter method to create new array with even numbers
let newArr = []; //Create variable to store new array
    function filter(arr2){ //Create filter function(method)
    for(let i = 0; i <= arr2.length-1; i++){ //For loop to filter through array
        if (arr2[i] % 2 == 0){ //ifstatement to figure if number is even
            newArr.push(arr2[i]);// Push even number to new array
        }
    }  return newArr // Sends the value to the function so it stops executing
} 
let tt = [1,2,3,4,5,6]; //Declare your array
console.log(filter(tt)); //Print new array using filter function

//Ques. 7 Create array of names loop to print with greeting ("Hello,<name>!)
let arrayB = ["Tim","Jim","Lou","Sue","Tonya"]; //Declare array
    function greet(){ //Create function
        for(let i = 0; i <= arrayB.length -1; i++){ ///For loop to filter through array
            console.log("Hello " + arrayB[i]+ "!");//Print to console
        }  
    }
    
//Ques. 8 - Declare array of strings use "map" to create a new array in all uppercase   
let string = ["i","love","my","grandchildren"];
newString = string.map(function(abc){
    return abc.toUpperCase();
});
console.log(newString);

//Ques. 9 -Declare array, use 'reduce'method to find the product
let arrayZ = [1,2,3,4]; //Declare array
//Store product from redcue function
let prod = arrayZ.reduce((product,num)=>product*num,1);
//Print to console
console.log(prod);


//Ques. 10 -Create array with numbers and strings with "filter" create new array and print

let tlk = [1,"terri",2,"jerri",3,"sue",4]; //Declare your array
let numbers = tlk.filter(item => typeof item === 'number');
console.log(numbers);
    
//FUNCTION QUESTIONS:

//Ques. 1 - sayHello function
function sayHello(name){
    console.log(`Hello, ${name}!`);
}
sayHello("Tyrese");
    
//Ques. 2 - square function
function square(number){
    if (number < 0){
        return;
    }
    return Math.sqrt(number);
    }
console.log (square(64));
console.log(square(100));

//Ques.3 - isEven function
function isEven(x){
    if(x % 2 === 0){
        return true;
    } else {
        return false;
    }  
}
console.log(isEven(24));

//Ques. 4 - calculateArea function
function calculateArea(a,b){
    return (a*b)
}
console.log(calculateArea(7,9));

//Ques. 5 - reverseString function
function reverseString(str){
    let newStrg = "";
    for(let i = str.length - 1; i >= 0; i--){
        newStrg += str[i]
    }
    return newStrg;
}
let bab= "Mississippi";
console.log(reverseString(bab));

//Ques. 6 - countVowels function
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
} console.log(countVowels("Peter Piper"));

//Ques. 7 - isPrime
function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){ 
    if (num % i === 0){ 
        return(false)
    }
    } return(true)
}
console.log(isPrime(19));

//Ques. 8 - toFarenheit function
function toFahrenheit(c){
    return (((c * (9/5))+32));
}
console.log(toFahrenheit(24));

//Ques. 9 - capitalize function
function capitalize(abcd){
   let c = abcd[0].toUpperCase(); 
    let remainder = abcd.slice(1);
            return (c + remainder)
}
let nom = "anthony";
console.log(capitalize(nom));

//Ques. 10 - mergeArrays function
function mergeArrays(arrayU,arrayV){
    let newArrayW = [];
    for(let i = 0; i < arrayU.length; i++){
        newArrayW.push(arrayU[i]);
    }
    for(let i = 0; i < arrayV.length; i++){
        newArrayW.push(arrayV[i]);
    }   
    return newArrayW;
}
let gg = [10,9,8,7,6];
let hh = [6,7,8,9,10];
newArrayW = mergeArrays(gg,hh);
console.log(newArrayW);

