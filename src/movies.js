import { movies } from "./data.js"

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const movieDirectors = movies.map(movie => {
        return movie.director;
    });
    return movieDirectors;
}

getAllDirectors(movies)

console.log(getAllDirectors(movies));

// bonus wip


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
    const dramaStevenSpielbergMovies = movies.filter((directorDrama) => {
      return (
        directorDrama.director === "Steven Spielberg" && directorDrama.genre.includes("Drama") );
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

function dramaMoviesScore(movies) {

    const dramaMovies = movies.filter(movie => {
        return movie.genre.includes("Drama");
    });

    const averageDramaSum = dramaMovies.reduce((acc, movie) => {
        return acc + (movie.score || 0);  
    }, 0);

    let averageDrama = (averageDramaSum / dramaMovies.length).toFixed(2);

    return `The average score of drama movies is ${averageDrama}`;
}

console.log(dramaMoviesScore(movies));


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

wip

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

wip


