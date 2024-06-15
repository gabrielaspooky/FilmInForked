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


function howManyMovies(array) {
    const dramaStevenSpielbergMovies = array.filter((directorDrama) => {
      return (
        directorDrama.director.toLowerCase() === "steven spielberg" &&
        directorDrama.genre.includes("Drama") 
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

const finalScore = scoresAverage(movies); 
console.log(finalScore);

// Iteration 4: Drama movies - Get the average of Drama Movies

// function scoresDrama(movies) {
    
//     const dramaMovies = movies.genre.filter(movie => movie.genre === 'Drama');
   
//     const dramaTotalScore = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);
   
//     const averageDramaScore = dramaTotalScore / dramaMovies.length;

//     return averageDramaScore;
// }

// console.log(scoresDrama(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies) {

    const movieYears = movies.map(movie => {
        return { Year: movie.year, };
    });


    movieYears.sort((a, b) => a.year - b.year);

    return movieYears;
}


console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    
    const movieTitles = movies.map(movie => {
        return { title: movie.title };
    });


    movieTitles.sort((a, b) => {
        if (a.title < b.title) { return -1; }
        if (a.title > b.title) { return 1; }
        return 0;
    });


    return movieTitles.slice(0, 20).map(movie => movie.title);
}

orderAlphabetically(movies);

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// BONUS - Iteration 8: Best yearly score average - Best yearly score average


