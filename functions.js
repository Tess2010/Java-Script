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