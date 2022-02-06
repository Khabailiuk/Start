"use strict";
const number0fFilms = +prompt("How many movies have you wached?", "");
const personalMovieDB = {
  count: number0fFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("The last movie that you have watched", ""),
  b = prompt("how can rate it?", ""),
  c = prompt("The last movie that you have watched", ""),
  d = prompt("how can rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
m;
