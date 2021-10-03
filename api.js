// this file manages the api call this movie_rent app
// imports the admin class, responsible for adding, deleting and updating movies in the movie store
const Admin = require("./Admin");
const User = require("./User")
// ADMIN API CALLS
// iniitialize the admin class
const Admin1 = new Admin();
// @set admin
Admin1.makeAdmin = "Ifenna";
// create new movie
Admin1.addMovie("Titanic", "Comic", 4)
Admin1.addMovie("shoot", "Action", 2)
Admin1.addMovie("Batons", "Romance", 3)
Admin1.addMovie("Bushes", "Comic", 2)
Admin1.addMovie("Rockout", "Action", 2)
Admin1.addMovie("Kerry", "Romance", 3)
// @get all movies 
console.table(Admin1.movie_collection);

// @update movie
Admin1.updateMovie("Kerry", "cheric", "Romance")
// @ delete a movie 
console.log(Admin1.deleteMovie("Berry"))
 

        //USER API CALLS
// instantiate users
const user1 = new User("ife@gmail.com");
const user2 = new User("edu@gmail.com");
const user3 = new User("man@gmail.com");
// sign up user
user1.user_signup();
user2.user_signup()
user3.user_signup()

// user Rent of books
console.log(user2.rent("shoot",1))
console.log(user3.rent("Titanic", 2));
console.log(user3.rent("Titanic",2));
console.log(user3.rent("Batons",2));
console.log(user1.rent("Titanic", 1));
console.log(user2.rent("Bushes", 1));

// user sign out 
console.log(user1.user_sign_out());
// can't rent since sign out
console.log(user1.rent("Rockout", 1));