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
    