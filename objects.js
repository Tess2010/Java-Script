        //JavaScript Objects Practice
//Question 1. Create an object called person with properties name, age, and city. 
//Print each property to the console.
        //Create object
const person ={}; 
        //Create Properties
person.name = "Luna Kelsie";
person.age = 5;
person.city = "Halifax";
        //Print each property to the console
console.log(person.name);
console.log(person.age);
console.log(person.city);

// Question 2. Create an object called car with properties brand, model, and year. 
//Print the car's brand and model in a sentence.
const car ={};
car.brand = "Hyundai";
car.model = "Palisade";
car.year = 2025;
console.log("My dream vehicle is a " + car.year," " + car.brand +".");

//Ques. 3 - Create an object called book with properties title, author, and pages. 
//Print the number of pages in the book.
const book ={};
book.title = "Little Women";
book.author = "Louisa May Alcott";
book.pages = 759;
console.log("There are " + book.pages + " pages");

//Ques. 4 - Create an object student with properties firstName, lastName, and grade. 
//Print the full name of the student using the object's properties.
const student={};
student.firstName = "Derrick";
student.lastName = "Parham";
console.log(student.firstName + " " + student.lastName); 

//Ques. 5 - Create an object called movie with properties title, director, and releaseYear. 
//Print the movie's title and release year in a sentence.
const movie = {};
movie.title = "Pretty Woman";
movie.director = "Gary Marshall";
movie.releaseYear = 1990;
console.log("The movie " + movie.title + " was released in " +movie.releaseYear + ".");

//Ques. 6 - Create an object called computer with properties brand, processor, and RAM. Print the brand of the computer.
const computer = {};
computer.brand = "Apple";
computer.processor = "M3";
computer.ram = 24;
console.log(computer.brand);

//Ques. 7 - Create an object called phone with properties brand, model, and price. Print the price of the phone.
const phone ={};
phone.brand = "Google";
phone.model = "Pixel8";
phone.price = 800.00;
console.log("$" +phone.price);

//Ques. 8 - Create an object animal with properties species, name, and age.
//Print the species and name of the animal in a sentence.
const animal = {};
animal.species = "cat";
animal.name = "Sage";
animal.age  = 4;
console.log("My daughter's " + animal.species + " is named " + animal.name +".");
