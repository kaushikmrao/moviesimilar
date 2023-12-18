# moviesimilar
# Movie Similarity Finder

This project is a simple Node.js application that uses The Movie Database (TMDb) API to find movies similar to a user-entered movie title.

## Overview

The Movie Similarity Finder is a command-line application built with Node.js and Axios that enables users to discover movies similar to a specified movie title. It leverages the TMDb API to retrieve information about movies and their similarities.

## Features

- Search for movies based on a provided movie title.
- Display a list of movies similar to the entered title.
- Retrieve details such as movie titles, release dates, posters, and descriptions.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kaushikmrao/moviesimilar.git

   cd moviesimilar
   cd movie-app
   1.1 Install dependencies:
   npm install
   1.2 Obtain a TMDb API key:

Sign up on TMDb to get your API key.
Replace 'YOUR_API_KEY' in the code with your TMDb API key.
   Run the application using Node.js:
   1.3 node movieApp.js
Follow the prompts in the terminal. Enter a movie title to find movies similar to it.

Example
Suppose you enter the movie title "Titanic" in the terminal. The application will display a list of movies related to "Titanic" and further list movies similar to the first match found.
