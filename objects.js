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

//Ques. 15 Create an object called recipe with properties name, ingredients (an array of strings), and timeToCook. 
//Print the recipe name and the number of ingredients.
let recipes = {};
recipes.name = "Best Meatloaf";
recipes.ingredients = ["ground-beef", "tomato sauce", "2 eggs", "rolled oats", "onion soup mix"];
recipes.timeToCook = "50-60 minutes"

console.log("Recipe Name: " + recipes.name);
console.log("Number of ingredients: " + recipes.ingredients.length);

//Ques. 16- Create an object called library with properties name, location, and books (an array of objects, each with a title and author). 
//Print the title of the first book.

//Create object with name & location of library
const library = {
name: "South City Public Library",
location:"2345 Sant Thomas Blvd",
//Create array of books in library with author & tite
books: [{author:"Michelle Good" , title:"Five Little Indians"},
    {author:"Shelton Johnson" , title:"Gloryland"},
    {author:"Harper Lee" , title:"To Kill a Mockingbird"},
    {author:"Johanna Spyri" , title:"Heidi"}]
} 
//Print the title of the first book by using the 'object'.'index number of the array'.object
console.log(library.books[0].title);

//Ques. 17 - Create an object store with properties name, location, and products (an array of objects with productName and price). 
//Print the name of the store and the price of the first product.
const store = {
    name: "Tyrese's Tasty Treats",
    location: "1231 December St, Halifax",
    products: [
        {productName:"Skinny Toads", price: "$8.00/dz"},
        {productName:"Roblox Roadies", price:"$1.25"},
        {productName:"Shake-em-Down Sundaes", price:"$2.99"},
        {productName:"Minecraft Milkshakes", price:"$4.99"},
    ]
}
console.log(store.name + " " + store.products[0].price);

//Ques. 18 - Create an object called smartphone with properties brand, model, and features (an array of strings). 
//Print all the features using a loop.
const smartphone = {
    brand: "Google",
    model: "Pixel 8",
    features: ["Camera/Selfie Camera","Night Sight","Audio Magic Eraser",
        "Video Boost", "Google Ai","Fast Charging","Wireless Charging",
        "Call Screen","7 years Security Updates",
    ]
};
//Use a for loop to print all the features
for(let i = 0; i <= smartphone.features.length -1; i++){
    console.log(smartphone.features[i]);
}

//Ques. 19 - Create an object called vacation with properties destination, duration, and activities (an array of strings). 
//Print the destination and the first activity in the list.
const vacation = {
    destination: "Portugal",
    duration: "10 days",
    activities: ["Visit the beaches", "Tour Porto", 
        "Visit Sintra & the Pena Palace", " Go hikie in the Azores",
        "Wine Tasting in Douro Valley"
    ]
};
console.log(vacation.destination + " " + vacation.activities[0]);

//Ques. 20 - Create an object called restaurant with properties name, location, and menu (an array of objects with dishName and price). 
//Print the name of the restaurant and the name of the first dish on the menu.
const restaurant ={
    name: "Habibi's",
    location: "5767 Your Place Blvd, Halifax",
    menu: ["Steak & potatoes","Shawarma  Plate","Mediterranian Plate",
        "Tomato Chicken & Potato Bake","Lamb chops and roasted vegetables"
    ]
};
console.log(restaurant.name + " " + restaurant.menu[0]);

//Ques. 21 - Create an object player with properties name, team, and scores (an array of numbers). 
//Print the player's name and total score by adding all the scores.
const players = {
    name: "Jason Balthazar",
    team: "The Gritties",
    scores: [145, 236, 389, 478, 689]
};
let totalScore = 0;
for(let i = 0; i <= players.scores.length-1; i++){
    totalScore += players.scores[i];
}
console.log(players.name + " " + totalScore);

//Ques. 22 - Create an object bookstore with properties name, location, and inventory (an array of objects with title and price). 
//Print the name of the bookstore and the price of the first book.
const bookstore ={
    name: "Whispering Pages",
    location: "1967 Alphabet Lane, Storybrook", 
    inventory: [
        {title:"Charlotte's Web", price:"$15.98"},
        {title:"The Very Hungry Caterpiller", price:"$12.98"},
        {title:"Green Eggs and Ham", price:"$14.98"},
        {title:"The Chronicles of Narnia", price:"$10.98"},
        {title:"Goodnight Moon", price:"$11.98"},
        {title:"A Wrinkle in Time", price:"$13.48"},
        {title:"Oh, the Places You'll Go!", price:"$17.98"},
        {title:"Little House on the Prairie", price:"$14.98"},
    ]
};
console.log(bookstore.name + " " + bookstore.inventory[0].price);