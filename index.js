/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  // This function should return all movie titles inserted into an array
  // Create a variable and assign it to an empty array
  let allMovies = [];
  // Create a for loop that loops through all of the movies
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.type === "movie") {
      allMovies.push(movie.title);
    }
  }
  return allMovies;
  console.log(allMovies);
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // This function returns the highest `metascore` among all movies.
  // Declare a variable and assign it to 0
  let highestMovie = 0;
  // Convert the metascore into a number

  // Create a variable that holds the highest metascore
  let highestScore = Math.max(movies.metascore);
  // Create a for loop that loops through each movie to find the highest score
  for (let i = 0; i < movies.length; i++) {
    // Declare a variable that holds score
    const movie = movies[i];
    // Create an if statement to determine the highest score
    if (movie.metascore > highestScore) {
      highestMovie = movie.metascore;
    }
  }
  return highestMovie;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  // This function gets the average of all IMDB ratings
  // Declare a variable that holds a number
  let averageRating = 0;
  // Create a for of loop that loops through each movie and access the IMDB rating
  for (const movie of movies) {
    // Create an if statement that determines the average
    if (movie.imdbrating) {
      // Add all the ratings together
      // Divide by the number of movies
    }
  }
  // return the variable that holds the number
  return averageRating;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // This function returns an object where keys: movie ratings values: number of movies in array with that same rating
  // Declare a variable and assign it to an empty object
  let newObj = {};
  // Create a for loop that loops through each movie and find the same ratings
  for (let i = 0; i < movies.length; i++) {
    // Declare a variable that holds each movie
    const movie = movies[i];
    // Create an if statement that finds all movies with the same ratings
    if (movie.rated === "G") {
      newObj[movie.rated] = 3;
    }
  }
  return newObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  // This function returns a movie object based on the ID
  // Return null if inputted id does not match
  // Declare a variable and assign it to an object
  let foundMovie = {};
  // Create a for loop that loops through each movie to find the matching id
  for (let i = 0; i < movies.length; i++) {
    // Declare a variable and assign it to hold each movie
    const movie = movies[i];
    // Create an if statement to compare the id
    if (movie.imbdID === id) {
      return foundMovie[movie.title];
    }
  }
  return null;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  // This function returns all movie objects with a matching genre
  // If no movies match return an empty array
  // Declare a variable that holds an empty array
  let sameGenre = [];
  // Create a for of loop that goes through each movie
  for (const movie of movies) {
    // Create an if statement to find all movies that are of a certain genre
    if (movie.genre === genre) {
      // If movies are the same, push them into the array
      sameGenre.push(movie.title);
    }
  }
  // return the array
  return sameGenre;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  // This function returns all movies released equal to or less than the given year.
  // Declare a variable that holds an empty array
  let movieRelease = [];
  // Create a for loop that loops through each movie
  for (const movie of movies) {
    if (movie.released.includes(year)) {
      //newMovie.push(movie.title);
      movieRelease.push(movie.title);
    }
  }
  return movieRelease;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  // This function returns the name of the movie with the highest 'boxOffice' amount.
  // Declare a variable and assign it to an empty string
  let biggestMovie = " ";
  // Create a for loop that loops through each movie
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    // Create an if statement to determine the movie with the hgihest 'boxOffice' amount.
    if (movie.boxOffice) {
      return (biggestMovie = movie.title);
    }
  }
  //return the variable
  return null;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
