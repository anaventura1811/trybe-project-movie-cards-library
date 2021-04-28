import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import movies from '../data';

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          movie={ movie }
          title={ movie.title }
          subtitle={ movie.subtitle }
          storyline={ movie.storyline }
          imagePath={ movie.imagePath }
          key={ `Movie Title ${index + 1}` }
        />))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// Link para documentação de PropTypes: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
