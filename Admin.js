const { movie_store } = require("./movieStore");
module.exports = class Admin  {
    set makeAdmin(admin_name){
        this.name_of_admin = admin_name
    }
    addMovie(title, genre, number){
        const movie = {};
        movie["title"] = title;
        movie["genre"] = genre;
        movie["number"] = number;
        movie["rented"] = false
        movie_store.push(movie);
        console.log(" Movie was Created by  successfully by " + this.name_of_admin + " your admin");
    };
    deleteMovie(name){
        const foundMovieIndex = movie_store.findIndex(x=> x.title === name);
        if(foundMovieIndex === -1) return "Movie with name  " + name + "  " + "is not found"
        movie_store.splice(foundMovieIndex, 1)
        console.log(" Movie was deleted by  successfully by " + this.name_of_admin + " your admin");
    }
    updateMovie(name, newName, newGenre, newNumber){
        const foundMovie= movie_store.find(x=> x.title === name);
        if(!foundMovie) return "Movie with name  " + name + "  " + "is not found"
        newName && (foundMovie["title"] = newName);
        newGenre && (foundMovie["genre"] = newGenre);
        newNumber && (foundMovie["number"] = newNumber);
        console.log(" Movie was Updated by  successfully by " + this.name_of_admin + " your admin");
    }
    get  movie_collection(){
        return   movie_store
    }
}