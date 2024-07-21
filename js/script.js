"use strict";

const numberOfFilms = +prompt("how many movies have you already watched so far?")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let oneWatchedMovie = prompt("The name of one of the last movies you watched?");
personalMovieDB.movies[oneWatchedMovie] = prompt("How much would you rate it?");

console.log(personalMovieDB);