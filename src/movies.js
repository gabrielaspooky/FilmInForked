import { movies } from "./data.js"

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const movieDirectors = moviesArray.map(movie => {
        return movie.director;
    });
    return movieDirectors;
}

getAllDirectors(movies)

console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielbergMovies = movies.filter(movie => movie.director === "Spielberg" && movie.genre.includes("Drama"));
    return spielbergMovies;
}

console.log(howManyMovies(movies));


function howManyMovies(array) {
    const dramaStevenSpielbergMovies = array.filter((directordrama) => {
      return (
        directordrama.director.toLowerCase() === "steven spielberg" &&
        directordrama.genre.includes("Drama") === true
      );
    });
    return dramaStevenSpielbergMovies
  }
  
  console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
    const generalScore = movies.reduce((acc, movie) => acc + movie.score, 0);
    const averageScore = generalScore / movies.length;
    return averageScore.toFixed(2);
}

const avgScore = scoresAverage(movies); 
console.log(avgScore);

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// BONUS - Iteration 8: Best yearly score average - Best yearly score average


