// this file manages the movie rent logic
let {movie_store} = require("./movieStore")
module.exports = class User {
    constructor (email){
        this.users = [];
        this.email = email;
        this.validateEmail = (elementValue) => {      
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(elementValue); 
        }
        this.find_user= (email)=> {
            const user = this.users.find(x=> x.email === email);
            return user ? user : null
        },
        this.find_movie = (movie_title)=>{
            const movie = movie_store.find(x=> x.title === movie_title);
            return movie
        }
     }
    user_signup(){
        if (!this.validateEmail(this.email)) {console.log("Invalid Email")}
        else{
            this.users.push({email:this.email});
            console.log("Signed up successfully");
            return this.users
        }
    }
    user_sign_out(){
       const user =  this.find_user(this.email);
       this.users.splice(this.users.indexOf(user), 1);
       return  this.email + " has Signed Out Successfully"
    }
    
    check_user_is_signed_up(){
        const user = this.users.find(x => x.email === this.email);
        return user ? true : false
    }
    rent(name_of_movie, number_of_movies_to_rent){
        if(!this.check_user_is_signed_up()) return console.log(`Sorry ${this.email} can't rent kindly signup`)
        if(!number_of_movies_to_rent) return  console.log("Kindly enter number of movies to rent");
        const foundMovie = this.find_movie(name_of_movie)
        if(!foundMovie) return  console.log("Movie is not in store");
        // check if number of movies to rent is greater than number of movie available        
        if(number_of_movies_to_rent > foundMovie.number) return "We have limited amount of copies to rent out. Number  " + foundMovie.title + "  of Movies : " + foundMovie.number
        if(foundMovie && foundMovie.number !==0){
            // sets movie.rented property to true
            foundMovie.rented = true;
            foundMovie.number -= number_of_movies_to_rent;
            foundMovie["rented By / Number of Movies Rented"] = this.email + " \ " + number_of_movies_to_rent;
        }
        console.log(`RENT DETAILS THE MOVIE ${name_of_movie} WAS RENTED BY ${this.email} THE CURRENT STATUS OF THE MOVIE STORE IS: 
        
**************************** `
        )
        console.table(movie_store)
   }

}


