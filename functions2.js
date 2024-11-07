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
