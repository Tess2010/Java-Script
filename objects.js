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

//Ques. 9 - Create an object called house with properties type, numberOfRooms, and location. 
//Print the type and number of rooms.
const house = {};
house.type = "semi-detached";
house.numberOfRooms = 4;
house.location = "Bedford";
console.log(house.type + " " + house.numberOfRooms);

//Ques. 10 - Create an object called teacher with properties name, subject, and yearsOfExperience. 
//Print a sentence about the teacher's name and subject they teach.
const teacher = {};
teacher.name = "Mr. Donelly";
teacher.subject = "English";
teacher.yearsOfExperience = 30;
console.log(teacher.name + " teaches " + teacher.subject + ".");

//Ques. 11 - Create an object called job with properties title, company, and salary. 
//Print the job title and salary in a sentence.
const job = {};
job.title = "Program Developer";
job.company = "Electronic Games";
job.salary = "50,000";
console.log("Entry level salary for a " + job.title + " is $" + job.salary);

//Ques. 12 - Create an object called user with properties username and email.
//Add a method to the object that prints the user's username.
let user ={};
user.userName = "Jaydis Maleek";
user.email = "maleek2011@yahoo.ca";

user.getUserName = function () {
    console.log(this.userName);
}
user.getUserName();

//Ques. 13 - Create an object bankAccount with properties accountNumber, balance, and accountHolder. 
//Print the account holder's name.
const bankAccount = {};
bankAccount.accountNumber = 5042335;
bankAccount.balance = "1,234";
bankAccount.accountHolder = "Alice Green";

bankAccount.getUserName = function(){
    console.log(this.accountHolder);
}
bankAccount.getUserName();

//Ques. 14 - Create an object called game with properties name, genre, and platform. 
//Print the game name and platform.

let game = {};
game.name = "The Sims: Vacation";
game.genre = "life simulation";
game.platform = "PC";

console.log(game.name + "  " + game.platform);

