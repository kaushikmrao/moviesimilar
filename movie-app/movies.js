const axios = require('axios');
const readline = require('readline');

const apiKey = '6cbf50520080701f8582ab2d01986323';
const baseURL = 'https://api.themoviedb.org/3';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function searchMovie(movieTitle) {
  try {
    const response = await axios.get(`${baseURL}/search/movie`, {
      params: {
        api_key: apiKey,
        query: movieTitle,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error searching for movie:', error.message);
    return [];
  }
}


async function getSimilarMovies(movieId) {
  try {
    const response = await axios.get(`${baseURL}/movie/${movieId}/similar`, {
      params: {
        api_key: apiKey,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching similar movies:', error.message);
    return [];
  }
}


rl.question('Enter a movie title: ', async (movieTitle) => {
  try {
    const movies = await searchMovie(movieTitle);

    if (movies.length > 0) {
      console.log(`Movies similar to "${movieTitle}":`);
      movies.forEach((movie) => {
        console.log(movie.title);
      });

    
      const firstMovieId = movies[0].id;
      const similarMovies = await getSimilarMovies(firstMovieId);

      if (similarMovies.length > 0) {
        console.log('Similar Movies:');
        similarMovies.forEach((movie) => {
          console.log(movie.title);
        });
      } else {
        console.log('No similar movies found.');
      }
    } else {
      console.log(`No movies found for "${movieTitle}".`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }

  rl.close();
});
